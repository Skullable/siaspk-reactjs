import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { padding } from '@mui/system';

const useStyles = makeStyles({
  root: {
    background: '#1d73be',
    border: 'solid 3px #1d73be',
    width: '250px',
    height: '300px',
    borderRadius: '50px',
    color: 'White',
    height: 50,
    padding: '0 30px',
    cursor: 'pointer',
    margin: '15px',
    fontFamily: 'Poppins',
    fontWeight: 300,
    transition: 'all .5s',
    '&:hover':{
      background: 'white',
      color: '#1d73be',
    }
  },
  send:{ 
    
  }
});

export default function Hook() {
  const classes = useStyles();
  const value = 'SEND MESSAGE'
  return <input className={classes.root} type='submit' value={value}></input>;
}