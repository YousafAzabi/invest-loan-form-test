import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const InvestDialog = ({ open, loan, handleInvest, handleClose }) => {
  const [investAmount, setInvestAmount] = useState(0);

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle>Invest In Loan</DialogTitle>
        <DialogContent>
          <DialogContentText>{loan.title}</DialogContentText>
          <div>{`Amount available: £${loan.available}`}</div>
          <div>{`Loan ends in: I do not know the forumla`}</div>
          <TextField
            margin="dense"
            id="amount"
            label="Investment Amount (£)"
            type="number"
            defaultValue="0"
            fullWidth
            onChange={(e) => setInvestAmount(Number(e.target.value))}
          />
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => handleInvest(investAmount)}
            className="dialog-invest-button">Invest</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InvestDialog;