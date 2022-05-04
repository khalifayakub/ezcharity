// these are made available by near-cli/test_environment
// note: do not remove the line below as it is needed for these tests
/* global nearlib, nearConfig */
import 'regenerator-runtime/runtime';

let near;
let contract;
let accountId;

beforeAll(async function() {
  near = await nearlib.connect(nearConfig);
  accountId = nearConfig.contractName;
  contract = await near.loadContract(nearConfig.contractName, {
    viewMethods: ['getDonations'],
    changeMethods: ['addDonation'],
    sender: accountId
  });
});

it('add one donation and retrieve it', async() => {
  await contract.addDonation({ args: { doggoId: 'doggo-1' }});
  const donations = await contract.getDonations();
  const expectedDonationsResult = [{
    Id: "doggo-1",
    amount: "0",
    sender: accountId,
    doggoId: 'doggo-1'
  }];
  expect(donations).toEqual(expectedDonationsResult);
});

// it('add two more donations and expect three total', async() => {
//   await contract.addDonation({ args: { doggoId: 'doggo-2' }});
//   await contract.addDonation({ args: { doggoId: 'doggo-3' }});
//   const donations = await contract.getDonations();
//   expect(donations.length).toEqual(3);
// });
