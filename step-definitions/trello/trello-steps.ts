import { Card } from '../../domains/cards/card';
import { Given, When, Then } from 'cucumber';
import expect from 'expect';

Given('I try to create/update/delete a card', async function () {
  const card = new Card();
  expect(card).not.toBeNull();
});

When('i make the call', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('is expected the status code {int}', async function () {
  // Then('is expected the status code {float}', async function (float) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
