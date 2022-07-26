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
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({

  toolbar:{
    justifyContent: 'space-between',
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    height: '100px',


  },
  logo:{
    paddingLeft: '2%'
  },

  list:{
    display: 'flex',
    alignItems: 'center',
    paddingRight: '20%',
    fontFamily : 'Poppins',
    fontSize: '14px',
    fontWeight: 600,

    
    
  },
  item:{
    marginRight: '15%',
    display: 'flex',
    flexDirection: 'row',
    color: '#5ea3ce',
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
  }


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

export default function Topbar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.topbar}>
        <Toolbar className={classes.toolbar}>
         <img className={classes.logo} src="../images/logo.png" alt="" />
         <ul className={classes.list}>
           <div className={classes.item}><a>Home</a></div>
           <div className={classes.item}><a>About</a></div>
           <div className={classes.item}><a>Services</a></div>
           <div className={classes.item}><a>Clients</a></div>
           <div className={classes.item}><a>Our Process</a></div>
           <div className={classes.item}><a>Contact Us</a></div>
         </ul>
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

