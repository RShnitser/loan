import React, { useState } from 'react';
import houseIMG from '../../assets/icons/buy-a-house.svg';
import './LoanApp.css';

// eslint-disable-next-line @typescript-eslint/naming-convention
const LoanApp = (): JSX.Element => {
  const [amount, setAmount] = useState(0);
  const [reachDate, setReachDate] = useState(0);

  const usdFormatter = new Intl.NumberFormat('en-us', {
    style: 'decimal',
    //currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="page-container">
      <nav className="nav-container">
        <div className="logo">origin</div>
      </nav>
      <div className="title">
        Let&apos;s plan your <span>saving goal</span>
      </div>
      <div className="card-container">
        <form>
          <div className="goal-container">
            <div className="loan-image">
              <img src={houseIMG} alt="goal" />
            </div>
            <div className="goal-text">
              <div className="goal-title">Buy a house</div>
              <div className="goal-subtitle">Saving goal</div>
            </div>
          </div>
          <div className="input-container">
            <div>
              <div className="input-label">Total amount</div>
              <div className="border flex-container">
                <div className="currency">$</div>
                <input
                  className="input-amount"
                  type="text"
                  value={usdFormatter.format(amount / 100)}
                  onChange={({
                    target: { value },
                  }: React.ChangeEvent<HTMLInputElement>) => {
                    const result = value.replace(/\D/g, '');
                    setAmount(parseFloat(result));
                  }}
                />
              </div>
            </div>
            <div>
              <div className="input-label">Reach goal by</div>
              <div className="border flex-container">
                <input
                  type="button"
                  value="&lsaquo;"
                  onClick={() => {
                    setReachDate(reachDate - 1);
                  }}
                />
                <div className="center-text">
                  <div className="bold">month</div>
                  <div className="input-label">year</div>
                </div>
                <input
                  type="button"
                  value="&rsaquo;"
                  onClick={() => {
                    setReachDate(reachDate + 1);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border amount-container">
            <div className="monthly-label">
              <div>Monthly amount</div>
              <div className="amount">amount</div>
            </div>
            <div className="center-text planning">
              You&apos;re planning <span>{reachDate} monthly deposits</span> to
              reach your <span>${usdFormatter.format(amount / 100)}</span> goal
              by <span>some date</span>
            </div>
          </div>
          <button className="btn-confirm" type="submit">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanApp;
