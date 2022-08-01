import React from "react";
import { makeStyles } from "@mui/styles";
import ReactDOM from "react-dom";
import Slider from "./Slider";


const useStyles = makeStyles({
  Home: {
    width: '100vw',
    top: "100px",
    alignItems: 'center',
    marginBottom: "100px",
  },
  slider: {
    height: '30%',
  },
  ourprocess:{
    justifyContent: 'center',
    alignItems: 'center !important',
    width: '100%'
  },
  processcontainer: {
    display: 'flex',
    width: '70%'

  },
  processheading: {
    fontFamily: 'Poppins',
    fontSize: '48px',
    fontWeight : 500,
    lineHeight: '43px',
    color: '#1f2732'
  },
  left:{
    display: 'flex',
  },
  processimg:{
    width: '190px',
    height: '190px',
  }
});

function Ourprocess(){
  const classes = useStyles();

  return (
    <div className={classes.ourprocess}>
      <span className={classes.processheading}>Our Process</span>
      <div className={classes.processcontainer}>
        <div className={classes.left}>
          <div className={classes.imgcontain}>
            <img src="Images/our-process-line1.png" alt='' />
            <img className={classes.processimg} src="Images/strategy.png" alt=""/>
          </div>

        </div>
        <div className={classes.mid}></div>
        <div className={classes.right}></div>
      </div>
    </div>
  );
}

export default function Homecontent() {
  const classes = useStyles();

  return (
    <div className={classes.Home}>
      <Slider className={classes.slider} />
      <Ourprocess/>
    </div>
  );
}
