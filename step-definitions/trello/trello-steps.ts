import { CardService } from '../../services/cardService';
import { Given, When, Then } from 'cucumber';

Given('I try to create a card', async function () {
  const service = new CardService({
    key: '90758d9be2ee9eb500d0195de2945823',
    token: 'cb8f25cd27ac835b262402ba10c119fbd8416a56208a84970ec6abe7354062c5',
    idList: '609c623ca3633f333109e526',
  });
  await service.create({
    name: 'Criando card',
    desc: 'Teste criacao de card',
  });
});

Given('I try to search a card', async function () {
  const service = new CardService({
    key: '90758d9be2ee9eb500d0195de2945823',
    token: 'cb8f25cd27ac835b262402ba10c119fbd8416a56208a84970ec6abe7354062c5',
  });
  await service.findOne('609c62d2414b2c2c81d0472b');
});

Given('I try to delete a card', async function () {
  const service = new CardService({
    key: '90758d9be2ee9eb500d0195de2945823',
    token: 'cb8f25cd27ac835b262402ba10c119fbd8416a56208a84970ec6abe7354062c5',
  });
  await service.delete('609d41e2b02d204af8871711');
});

Given('I try to update a card', async function () {
  const service = new CardService({
    key: '90758d9be2ee9eb500d0195de2945823',
    token: 'cb8f25cd27ac835b262402ba10c119fbd8416a56208a84970ec6abe7354062c5',
    idList: '609d4923de4e4c04743539cc',
  });
  await service.update('609c62d2414b2c2c81d0472b', {
    name: 'Editando um card',
    desc: 'Teste para edição de um card',
  });
});

When('i make the call', async function () {
  return 'pending';
});

Then('is expected the status code {int}', async function () {
  // Then('is expected the status code {float}', async function (float) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
