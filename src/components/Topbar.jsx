import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({

  toolbar:{
    justifyContent: 'space-between',
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    height: '100px',
    zIndex: 5,


  },
  logo:{
    paddingLeft: '2%'
  },

  list:{
    paddingTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily : 'Poppins',
    fontSize: '14px',
    fontWeight: 600,

    
    
  },
  item:{
    padding: '15px',
    display: 'flex',
    flexDirection: 'row',
    color: '#5ea3ce',
    fontSize: '12px',
    lineHeight: '0px',
    cursor: 'pointer',
    transition: 'all .5s',

    '&:hover':{
      color: '#fe4973',
      textDecoration: 'underline'
    }


  },
  box:{
    zIndex: 4,
    opacity: 0.5,
    transition: 'all .8s',
    '&:hover':{
      opacity: 1,
      bottom: '14px',
      
    }
  },
  anchor:{
    color: '#5ea3ce',
    textDecoration: 'none',
    letterSpacing: '3px',
    '&:hover':{
      color: '#fe4973',
      textDecoration: 'underline'
    }
  },
  toggle: {
    width: '60px',
    height: '60px',
    cursor: 'pointer',
    display: 'none',
  },
  '@media (max-width:990px)':{
    list:{
        display: 'none',
    },
    toggle:{
      display: 'block',
    }
  },


})

function ScrollTop(props) {
  const classes = useStyles();
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

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

  return (
    <Fade in={trigger}>
      <Box
        className={classes.box}
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Topbar({props,menuOpen,setMenuOpen}) {
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
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar className={classes.toolbar}>
         <Link to='/'><img className={classes.logo} src="Images/logo.png" alt="" onClick={handleClick} /></Link>
         <ul className={classes.list}>
           <div className={classes.item}><Link className={classes.anchor} onClick={handleClick} to="/">Home </Link></div>
           <div className={classes.item}><Link className={classes.anchor} onClick={handleClick} to="/about">About </Link></div>
           <div className={classes.item}><Link className={classes.anchor} onClick={handleClick} to="/services">Services </Link></div>
           <div className={classes.item}><Link className={classes.anchor} onClick={handleClick} to="/clients">Clients </Link></div>
           <div className={classes.item}><Link className={classes.anchor} onClick={handleClick} to="/ourprocess">Our Process </Link></div>
           <div className={classes.item}><Link className={classes.anchor} onClick={handleClick} to="/contact">Contact Us </Link></div>
         </ul>
         <img className={classes.toggle} src="Images/toggle.jpeg" alt="" onClick={()=>setMenuOpen(!menuOpen)}  />
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

