import React from 'react';
import PropTypes from 'prop-types';
import Big from 'big.js';

export default function Form({ onSubmit, currentUser }) {

  const options = [
    { value: 'doggo-1', label: 'Plumpkin' },
    { value: 'doggo-2', label: 'Bubbles' },
    { value: 'doggo-3', label: 'Penandes' },
    { value: 'doggo-4', label: 'Plugh' },
    { value: 'doggo-5', label: 'Bante' },
  ];

  const [value, setValue] = React.useState('Plumpkin');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <form onSubmit={onSubmit}>
      <fieldset id="fieldset">
        <p>Feed the dogs, { currentUser.accountId }!</p>
        <p className="highlight">
          <label htmlFor="dog">Dog:</label>
          <select id="dog" value={value} onChange={handleChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </p>
        <p>
          <label htmlFor="donation">Donation:</label>
          <input
            autoComplete="off"
            defaultValue={'0'}
            id="donation"
            max={Big(currentUser.balance).div(10 ** 24)}
            min="0"
            step="0.01"
            type="number"
          />
          <span title="NEAR Tokens">Ⓝ</span>
        </p>
        <button type="submit">
          Donate
        </button>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  })
};
