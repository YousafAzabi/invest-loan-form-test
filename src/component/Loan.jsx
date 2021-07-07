import React, { useState } from 'react';
import InvestDialog from './InvestDialog';

const Loan = ({ loan, handleInvest, investedIn }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClick = () => {
    setOpenDialog(true);
  }

  const handleDialogClose = () => {
    setOpenDialog(false);
  }

  const handleDialogInvest = (investAmount) => {
    handleDialogClose();
    handleInvest(investAmount, loan);
  }

  return (
    <div className="loan-container">
      <div className="loan-title">{loan.title}</div>
        {investedIn && <label className="invest-label">Invested</label>}
        <ul>
          <li>{`Trancche: ${loan.tranche}`}</li>
          <li>{`Available: ${loan.available}`}</li>
          <li>{`Annualised Return: ${loan.annualised_return}`}</li>
          <li>{`Term Remaining: ${loan.term_remaining}`}</li>
          <li>{`LTV: ${loan.ltv}`}</li>
          <li>{`Amount: ${loan.amount}`}</li>
        </ul>
        <button
          className="invest-button"
          onClick={handleClick}
        >
          INVEST
        </button>
        <InvestDialog
          open={openDialog}
          loan={loan}
          handleInvest={handleDialogInvest}
          handleClose={handleDialogClose}
        />
    </div>
  );
}

export default Loan;