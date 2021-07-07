import React, { useState } from 'react';
import Loan from './Loan';
import data from '../current-loans.json';

const CurrentLoans = () => {
  const [loans, setLoans] = useState(data.loans);

  const handleInvest = (investAmount, loan) => {
    const remaining = Number(loan.available.split(',').join('')) - investAmount;
    const newLoans = loans.map(l => {
      if (l.id === loan.id) {
        return {...l, available: remaining.toLocaleString()}
      }
      return l
    });
    setLoans(newLoans);
  }

  const totalAvailable = loans
    .map(loan => Number(loan.available.split(',').join('')))
    .reduce((a, b) => a + b);

  return (
    <div>
      <h1>Current Loan</h1>
      {data.loans.map(loan => <Loan loan={loan} />)}
      <div className="total-amount-available">
        Total Amount Available for Invesment:
        <strong>{` £${totalAvailable.toLocaleString()}`}</strong>
      </div>
    </div>
  );
}

export default CurrentLoans;