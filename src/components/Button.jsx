import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { padding } from '@mui/system';

const useStyles = makeStyles({
  btn: {
    background: '#1d73be',
    border: 'solid 3px #1d73be',
    width: '230px',
    height: '80px',
    borderRadius: '50px',
    color: 'White',
    padding: '0 30px',
    cursor: 'pointer',
    margin: '15px',
    fontFamily: 'Poppins',
    fontWeight: 300,
    transition: 'all .3s',
    '&:hover':{
      background: 'white',
      color: '#1d73be',
    }
  },
  invert:{ 
    background: 'white',
    border: 'solid 3px #1d73be',
    width: '230px',
    height: '80px',
    borderRadius: '50px',
    color: 'black',
    padding: '0 30px',
    cursor: 'pointer',
    margin: '15px',
    fontFamily: 'Poppins',
    fontWeight: 300,
    transition: 'all .3s',
    '&:hover':{
      background: '#1d73be',
      color: 'white',
    }
    
  }
});

export default function Button(props) {
  const classes = useStyles();
  return <input className={props.type == 1 ? classes.btn : classes.invert} type='submit' value='SEND MESSAGE'></input>;
}