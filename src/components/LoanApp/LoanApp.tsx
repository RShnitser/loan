import React, { useState } from 'react';
import houseIMG from '../../assets/icons/buy-a-house.svg';
import './LoanApp.css';

// eslint-disable-next-line @typescript-eslint/naming-convention
const LoanApp = (): JSX.Element => {
  const [amount, setAmount] = useState(0);
  const [reachDate, setReachDate] = useState(1);

  const usdFormatter = new Intl.NumberFormat('en-us', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const monthMap = new Map([
    [0, 'January'],
    [1, 'February'],
    [2, 'March'],
    [3, 'April'],
    [4, 'May'],
    [5, 'June'],
    [6, 'July'],
    [7, 'August'],
    [8, 'September'],
    [9, 'October'],
    [10, 'November'],
    [11, 'December'],
  ]);

  const currentDate = new Date();
  const targetMonth = monthMap.get((currentDate.getMonth() + reachDate) % 12);
  const targetYear =
    currentDate.getFullYear() +
    Math.floor((currentDate.getMonth() + reachDate) / 12);

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
                  value={usdFormatter.format(amount)}
                  onChange={({
                    target: { value },
                  }: React.ChangeEvent<HTMLInputElement>) => {
                    const result = value.replace(/\D/g, '');
                    const newAmount = isNaN(parseFloat(result))
                      ? 0
                      : parseFloat(result);
                    setAmount(newAmount);
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
                    const newMonth = reachDate - 1 < 1 ? 1 : reachDate - 1;
                    setReachDate(newMonth);
                  }}
                />
                <div className="center-text">
                  <div className="bold">{targetMonth}</div>
                  <div className="input-label">{targetYear}</div>
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
              <div className="amount">
                ${usdFormatter.format(Math.ceil(amount / reachDate))}
              </div>
            </div>
            <div className="center-text planning">
              You&apos;re planning <span>{reachDate} monthly deposits</span> to
              reach your <span>${usdFormatter.format(amount)}</span> goal by by
              <span>{` ${targetMonth} ${targetYear}`}</span>.
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
