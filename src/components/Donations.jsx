import React from 'react';
import PropTypes from 'prop-types';
import {Dogs} from "../data/doggos";
import Doggo from "./Doggo";

export default function Donations({ donations }) {

  console.log(donations)
  return (
    <>
      <h2>Dogs</h2>
      <span className="doggo-list">
        {Dogs.map((doggo) =>
          <Doggo doggo={doggo} donations={donations}/>
        )}
      </span>

    </>
  );
}

Donations.propTypes = {
  messages: PropTypes.array
};
