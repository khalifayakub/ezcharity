import { DoggoDonation, donations } from './model';

// --- contract code goes below

/**
 * Adds a new donation under the name of the sender's account id.\
 * NOTE: This is a change method. Which means it will modify the state.\
 * But right now we don't distinguish them with annotations yet.
 */
export function addDonation(doggoId: string): void {
  // Creating a new donation and populating fields with our data
  const donation = new DoggoDonation(doggoId);
  // Adding the donation to end of the persistent collection
  donations.push(donation);
}

/**
 * Returns an array of donations.\
 * NOTE: This is a view method. Which means it should NOT modify the state.
 */
export function getDonations(): DoggoDonation[] {
  const numDonations = donations.length;
  const result = new Array<DoggoDonation>(donations.length);
  for(let i = 0; i < numDonations; i++) {
    result[i] = donations[i];
  }
  return result;
}
