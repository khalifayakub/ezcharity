import { getDonations, addDonation } from '../main';
import { DoggoDonation, donations } from '../model';
import { VMContext, u128} from "near-sdk-as";

function createDonation(Id: string): DoggoDonation {
  return new DoggoDonation(Id);
}

const donation = createDonation('doggo-1');

describe('donation tests', () => {
  afterEach(() => {
    while (donations.length > 0) {
      donations.pop();
    }
  });

  it('adds a donation', () => {

    VMContext.setAttached_deposit(u128.from('2'));
    addDonation('doggo-1');
    expect(donations.length).toBe(
      1,
      'should only contain one donation'
    );

    expect(donations[0].amount).toBeTruthy('amount should exist');

    expect(donations[0]).toStrictEqual(
      donation,
      'doggo should be "doggo-1"'
    );
  });

  it('retrieves donations', () => {
    addDonation('doggo-1');
    const donationsArr = getDonations();
    expect(donationsArr.length).toBe(
      1,
      'should be one donation'
    );
    expect(donationsArr).toIncludeEqual(
      donation,
      'donations should include:\n' + donation.toJSON()
    );
  });
});
