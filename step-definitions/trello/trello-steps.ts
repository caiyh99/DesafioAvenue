import { CardService } from '../../services/cardService';
import { Given, When, Then } from 'cucumber';
import faker from 'faker';
import expect from 'expect';

Given('I created a card', async function () {
  this.card = await this.cardService.create({
    name: faker.random.words(),
    desc: faker.lorem.sentence(),
  });
});
When('I try to create a card', async function () {
  this.card = await this.cardService.create({
    name: faker.random.words(),
    desc: faker.lorem.sentence(),
  });
});
When('I try to create a card with an invalid token', async function () {
  this.cardService = new CardService({
    key: '90758d9be2ee9eb500d0195de2945823',
    token: 'invalidToken',
    idList: this.list.id,
  });

  this.cardInvalid = await this.cardService.create(
    {
      name: faker.random.words(),
      desc: faker.lorem.sentence(),
    },
    401,
  );
});
When('I try to update a card with an invalid key', async function () {
  this.cardServiceKeyInvalid = new CardService({
    key: 'invalidkey',
    token: 'cb8f25cd27ac835b262402ba10c119fbd8416a56208a84970ec6abe7354062c5',
    idList: this.list.id,
  });

  this.editedCard = await this.cardServiceKeyInvalid.update(
    this.card.id,
    {
      name: faker.random.words(),
      desc: faker.lorem.sentence(),
    },
    401,
  );
});
When('I try to create a card without a List', async function () {
  this.cardInvalid = await this.cardService.create(
    {
      name: faker.random.words(),
      desc: faker.lorem.sentence(),
      idList: 'invalid',
    },
    400,
  );
});
When('I try to delete a card', async function () {
  this.deletedCard = await this.cardService.delete(this.card.id);
});
When('I try to delete a card with an invalid id', async function () {
  this.deletedCard = await this.cardService.delete('invalidID', 400);
});
When('I try to delete a card with an invalid key', async function () {
  this.cardServiceKeyInvalid = new CardService({
    key: 'invalidkey',
    token: 'cb8f25cd27ac835b262402ba10c119fbd8416a56208a84970ec6abe7354062c5',
    idList: this.list.id,
  });

  this.deletedCard = await this.cardServiceKeyInvalid.delete(this.card.id, 401);
});
When('I try to update a card', async function () {
  this.updatedCard = await this.cardService.update(this.card.id, {
    name: faker.random.words(),
    desc: faker.lorem.sentence(),
  });
});
When('I try to update a card with an invalid id', async function () {
  this.updatedCard = await this.cardService.update(
    'invalidID',
    {
      name: faker.random.words(),
      desc: faker.lorem.sentence(),
    },
    400,
  );
});
When('I try to search a card', async function () {
  this.foundedCard = await this.cardService.findOne(this.card.id);
});
Then('card is created', async function () {
  const card = await this.cardService.findOne(this.card.id);
  expect(card.name).toBe(this.card.name);
  expect(card.desc).toBe(this.card.desc);
});
Then('card is updated', async function () {
  const card = await this.cardService.findOne(this.card.id);
  expect(card.name).toBe(this.updatedCard.name);
  expect(card.desc).toBe(this.updatedCard.desc);
});
Then('the card was founded', async function () {
  expect(this.foundedCard.name).toBe(this.card.name);
  expect(this.foundedCard.desc).toBe(this.card.desc);
});
Then('the card was deleted with success', async function () {
  expect(this.deletedCard.httpRequestStatusCode).toBe(undefined);
});
Then('card is not created', async function () {
  expect(this.cardInvalid.httpRequestStatusCode).toBe(undefined);
});
Then('card is not updated', async function () {
  const editedCard = await this.cardService.findOne(this.card.id);
  expect(editedCard.name).toBe(this.card.name);
});
Then('the card is not deleted', async function () {
  const notDeletedCard = await this.cardService.findOne(this.card.id);
  expect(notDeletedCard.name).toBe(this.card.name);
  expect(notDeletedCard.desc).toBe(this.card.desc);
});
