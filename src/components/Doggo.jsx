import React from 'react';
import PropTypes from 'prop-types';

export default function Doggo({ doggo, donations }) {

  const totalDoggoDonation = donations.reduce((total, current) => {
    console.log(current)
    if(current.doggoId === doggo.doggoId){
      total += Number(current.amount)/1000000000000000000000000
    }
    return total
  }, 0)
  return (
    <span className="doggo">
      <img src={doggo.doggoImage}/>
      <p>Name: {doggo.doggoName}</p>
      <p>Breed: {doggo.doggoBreed}</p>
      <p>Fact: {doggo.doggoFact}</p>
      <p>Current Feeding Money: {totalDoggoDonation.toPrecision(2)} <span title="NEAR Tokens">Ⓝ</span></p>
    </span>
  );
}

Doggo.propTypes = {
  doggo: PropTypes.any,
  donations: PropTypes.array
};
