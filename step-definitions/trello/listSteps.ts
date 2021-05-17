import { Given, When, Then } from 'cucumber';
import faker from 'faker';
import expect from 'expect';

Given('I have created a board', async function () {
  this.createdBoard = await this.boardService.findOne(this.board.id);
});
Given('I create a list', async function () {
  this.listCreated = await this.listService.create({
    name: faker.random.words(),
    idBoard: this.createdBoard.id,
  });
});
Given('I archive a list', async function () {
  this.listArchived = await this.listService.archive(this.listCreated.id, {
    value: 'true',
  });
});
When('I try to create a list', async function () {
  this.listCreated = await this.listService.create({
    name: faker.random.words(),
    idBoard: this.createdBoard.id,
  });
});
When('I try to update a list', async function () {
  this.listUpdated = await this.listService.update(this.listCreated.id, {
    name: faker.random.words(),
  });
});
When('I try to archive a list', async function () {
  this.listArchived = await this.listService.archive(this.listCreated.id, {
    value: 'true',
  });
});
When('I try to unarchive a list', async function () {
  this.listArchived = await this.listService.archive(this.listCreated.id, {
    value: 'false',
  });
});
Then('the list was created', async function () {
  const list = await this.listService.findOne(this.listCreated.id);
  expect(list.name).toBe(this.listCreated.name);
});
Then('the list was updated', async function () {
  const list = await this.listService.findOne(this.listUpdated.id);
  expect(list.name).toBe(this.listUpdated.name);
});
Then('the list is archived', async function () {
  const list = await this.listService.findOne(this.listCreated.id);
  expect(list.closed).toBe(true);
});
Then('the list is unarchived', async function () {
  const list = await this.listService.findOne(this.listCreated.id);
  expect(list.closed).toBe(false);
});
