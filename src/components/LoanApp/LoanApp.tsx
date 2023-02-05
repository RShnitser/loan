import React from 'react';
import houseIMG from '../../assets/icons/buy-a-house.svg';
import './LoanApp.css';

const loanApp = (): JSX.Element => {
  return (
    <div className="page-container">
      <nav className="nav-container">
        <div className="logo">origin</div>
      </nav>
      <div className="title">
        Let&apos;s plan your <span className="bold">saving goal</span>
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
              <input className="input-border" type="text" />
            </div>
            <div>
              <div>Reach goal by</div>
              <div>
                <input type="button" value="<" />
                <div>
                  <div>year</div>
                  <div>month</div>
                </div>
                <input type="button" value=">" />
              </div>
            </div>
          </div>
          <div>
            <div>Monthly amount</div>
            <div>amount</div>
          </div>
          <div>planning</div>
          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default loanApp;
