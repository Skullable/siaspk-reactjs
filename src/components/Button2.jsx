import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

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
        backgroundColor: 'white',
        color: 'Black',
    }
  },
  invert:{ 
    marginTop: '30px',
    display: 'flex',
    background: 'White',
    border: 'solid 4px #1d73be',
    width: '250px',
    height: '60px',
    borderRadius: '50px',
    color: 'Black',
    padding: '0 30px',
    cursor: 'pointer',
    margin: '15px',
    fontFamily: 'Poppins',
    fontWeight: 300,
    transition: 'all .3s',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover':{
        backgroundColor: '#1d73be',
        color: 'White',
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

export default function Button2(props) {
  const classes = useStyles();
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };
  const value = <div className={classes.text}>{props.txt}</div>
  return <Link to={props.a} className={props.type == 1 ? classes.btn : classes.invert}   style={{textDecoration: 'none'}} onClick={handleClick} >{value}</Link>;
}