import React from 'react';
import Loan from './Loan';
import data from '../current-loans.json';

const CurrentLoans = () => {
  return (
    <div>
      <h1>Current Loan</h1>
      {data.loans.map(loan => <Loan loan={loan} />)}
    </div>
  );
}

export default CurrentLoans;