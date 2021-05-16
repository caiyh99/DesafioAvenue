import { CardService } from '../services/cardService';
import { BoardService } from '../services/boardService';
import { ListService } from '../services/listService';
import { Before, BeforeAll, AfterAll, After } from 'cucumber';
import faker from 'faker';

Before({ tags: '@ignore' }, async function () {
  return 'skipped';
});

Before({ tags: '@board' }, async function () {
  this.boardService = new BoardService({
    key: '90758d9be2ee9eb500d0195de2945823',
    token: 'cb8f25cd27ac835b262402ba10c119fbd8416a56208a84970ec6abe7354062c5',
  });
  this.board = await this.boardService.create({ name: faker.random.words() });
});

Before({ tags: '@list' }, async function () {
  this.listService = new ListService({
    key: '90758d9be2ee9eb500d0195de2945823',
    token: 'cb8f25cd27ac835b262402ba10c119fbd8416a56208a84970ec6abe7354062c5',
  });
  this.list = await this.listService.create({ name: faker.random.words(), idBoard: this.board.id });
});

Before({ tags: '@card' }, async function () {
  this.cardService = new CardService({
    key: '90758d9be2ee9eb500d0195de2945823',
    token: 'cb8f25cd27ac835b262402ba10c119fbd8416a56208a84970ec6abe7354062c5',
    idList: this.list.id,
  });
});

Before({ tags: '@cardFail' }, async function () {
  this.cardService = new CardService({
    key: '90758d9be2ee9eb500d0195de2945823',
    token: 'cb8f25cd27ac835b262402ba10c119fbd8416a56208a84970ec6abe7354062c5',
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

BeforeAll(async function () {
  // eslint-disable-next-line no-console
  console.log('Before All');
});

AfterAll(async function () {
  // eslint-disable-next-line no-console
  console.log('After All');
});
