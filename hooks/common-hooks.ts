import AuthSingleton from './auth';
import { CardService } from '../services/cardService';
import { BoardService } from '../services/boardService';
import { ListService } from '../services/listService';
import { Before, BeforeAll, AfterAll, After } from 'cucumber';
import faker from 'faker';
import puppeteer from 'puppeteer';
import dotenv from 'dotenv';
import chalk from 'chalk';

// eslint-disable-next-line no-console
const log = console.log;

Before({ tags: '@ignore' }, async function () {
  return 'skipped';
});
Before({ tags: '@board' }, async function () {
  const auth = AuthSingleton.getInstance();

  this.boardService = new BoardService({
    key: auth.key as string,
    token: auth.token as string,
  });
  this.board = await this.boardService.create({ name: faker.random.words() });
});
Before({ tags: '@listSetup' }, async function () {
  const auth = AuthSingleton.getInstance();

  this.listService = new ListService({
    key: auth.key as string,
    token: auth.token as string,
  });
});
Before({ tags: '@list' }, async function () {
  const auth = AuthSingleton.getInstance();

  this.listService = new ListService({
    key: auth.key as string,
    token: auth.token as string,
  });
  this.list = await this.listService.create({ name: faker.random.words(), idBoard: this.board.id });
});
Before({ tags: '@card' }, async function () {
  const auth = AuthSingleton.getInstance();

  this.cardService = new CardService({
    key: auth.key as string,
    token: auth.token as string,
    idList: this.list.id,
  });
});
After({ tags: '@card and not @preventDelete' }, async function () {
  this.cardService.delete(this.card.id);
});
After({ tags: '@board' }, async function () {
  this.boardService.delete(this.board.id);
});
After({ tags: '@list' }, async function () {
  this.listService.delete(this.list.id);
});
BeforeAll({ timeout: 120 * 1000 }, async () => {
  dotenv.config();

  AuthSingleton.getInstance(process.env.KEY, process.env.EXPIRATION);

  log(chalk.blue.bgRed.bold('Getting Trello Auth Token'));
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    `${process.env.API_TRELLO_URL}/authorize/?key=${process.env.KEY}&expiration=${process.env.EXPIRATION}&response_type=token&scope=read,write,account`,
  );
  await page.click('a[class="button primary"');

  await page.waitForSelector('input[id="user"]');
  await page.focus('input[id="user"]');
  await page.waitForTimeout(1000);
  await page.type('input[id="user"]', 'caiqueravpp@gmail.com');
  await page.waitForTimeout(3000);
  await page.click('input[id="login"]');
  await page.waitForNavigation();
  await page.focus('input[id="password"]');
  await page.waitForSelector('input[id="password"]');
  await page.type('input[id="password"]', process.env.TRELLO_PASSWORD as string);
  await page.click('button[id="login-submit"]');
  await page.waitForSelector('input[id="approveButton"]:not([disabled])');
  await page.click('input[id="approveButton"]');
  await page.waitForSelector('pre');
  const element = await page.$('pre');
  const value = await page.evaluate((el) => el.textContent, element);

  AuthSingleton.getInstance().token = value;
  log(chalk.magenta.bold(`TOKEN: ${value}`));
  await browser.close();
});
AfterAll(async function () {
  // eslint-disable-next-line no-console
  console.log('After All');
});
