import React from 'react';
import data from '../current-loans.json';

const CurrentLoans = () => {
  return (
    <div>
      <h1>Current Loan</h1>
      {data.loans.map(loan => <div>{loan.title}</div>)}
    </div>
  );
}

export default CurrentLoans;