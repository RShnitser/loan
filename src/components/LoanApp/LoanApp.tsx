import React from 'react';

const loanApp = (): JSX.Element => {
  return (
    <>
      <nav></nav>
      <h2>Let&apos;s plan your saving goal</h2>
      <div>
        <form>
          <div>Buy a house</div>
          <div>Saving goal</div>
          <label htmlFor="amount"></label>
          <input type="number" />
          <label htmlFor="month"></label>
          <input type="number" />
          <div>Monthly amount</div>
          <div>planning</div>
          <button type="submit">Confirm</button>
        </form>
      </div>
    </>
  );
};

export default loanApp;
