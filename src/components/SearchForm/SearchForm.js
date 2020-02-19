import React, { useState } from 'react';

import classes from './SearchForm.module.scss';

const SearchForm = () => {
  const [inputs, setInputs] = useState({
    amount: 0,
    currency: 'eur'
  });

  const handleInputChange = e => {
    const inputValue = e.target.value.replace(/^0+(?=\d)/, '');
    setInputs({
      ...inputs,
      [e.target.name]: inputValue
    });
  };
  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
    }
  };

  return (
    <form className={classes.searchForm} onSubmit={handleSubmit}>
      <label>I have</label>
      <input
        type="number"
        name="amount"
        onChange={handleInputChange}
        value={inputs.amount}
      />
      <select name="currency" onChange={handleInputChange}>
        <option value="eur">EUR</option>
        <option value="usd">USD</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default SearchForm;