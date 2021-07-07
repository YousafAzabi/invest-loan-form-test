import React from 'react';

const Loan = ({ loan }) => {
  return (
    <div className="loan-container">
      <div className="loan-title">{loan.title}</div>
        <ul>
          <li>{`Trancche: ${loan.tranche}`}</li>
          <li>{`Available: ${loan.available}`}</li>
          <li>{`Annualised Return: ${loan.annualised_return}`}</li>
          <li>{`Term Remaining: ${loan.term_remaining}`}</li>
          <li>{`LTV: ${loan.ltv}`}</li>
          <li>{`Amount: ${loan.amount}`}</li>
        </ul>
        <button className="invest-button">INVEST</button>
    </div>
  );
}

export default Loan;