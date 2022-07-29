import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  root: {
    background: '#1d73be',
    border: 0,
    borderRadius: '50%',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#1d73be',
    height: 50,
    padding: '0 30px',
  },
});

export default function Hook() {
  const classes = useStyles();
  return <Button className={classes.root}>Styled with Hook API</Button>;
}