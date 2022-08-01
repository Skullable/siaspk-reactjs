import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { lineHeight } from '@mui/system';

const useStyles = makeStyles({
  btn: {
    marginTop: '30px',
    display: 'flex',
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
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover':{
        background: 'white',
        color: 'Black',
    }
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: '14px',
    lineHeight: '12px',
    fontWeight: 700,
    textDecoration: 'none',
    letterSpacing: '3px',
  },
});

export default function Button2() {
  const classes = useStyles();
  const value = <div className={classes.text}>KNOW MORE</div>
  return <a href='' className={classes.btn} style={{textDecoration: 'none'}} >{value}</a>;
}