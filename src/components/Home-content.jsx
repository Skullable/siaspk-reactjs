import React from "react";
import { makeStyles } from "@mui/styles";
import ReactDOM from "react-dom";
import Slider from "./Slider";
import Button2 from "./Button2";


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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  processcontainer: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    width: '70%',
    marginRight: '60px'

  },
  processheading: {
    paddingTop: '100px',
    margin: '3%',
    fontFamily: 'Poppins',
    fontSize: '48px',
    fontWeight : 500,
    lineHeight: '43px',
    color: '#1f2732'
  },
  processbox:{
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  processline1:{
    paddingTop: '150px'
  },
  processline2:{
    paddingTop: '50px'
  },
  processimg:{
    width: '190px',
    height: '190px',
  },
  infoheading: {
    fontFamily: 'Poppins',
    fontSize: '23px',
    lineHeight: '30px',
    fontWeight: 500,
    color: '#1f2732',
    marginTop: '14px'
  },
  processinfo:{
    width: '100%',
    color: '#7f7f7f',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: '24px',
  }
});

function Ourprocess(){
  const classes = useStyles();

  return (
    <div className={classes.ourprocess}>
      <span className={classes.processheading}>Our Process</span>
      <div className={classes.processcontainer}>
        <img
          className={classes.processline1}
          src="Images/our-process-line1.png"
          alt=""
        />
        <div className={classes.processbox}>
          <div className={classes.imgcontain}>
            <img
              className={classes.processimg}
              src="Images/strategy.png"
              alt=""
            />
          </div>
          <div className={classes.processinfo}>
            <h5 className={classes.infoheading}>Strategy</h5>
            Strategy takes your idea and creates a plan of action to make it a
            reality. Lean, multidisciplinary teams work alongside you in a
            series of engaging activities and workshops to uncover strategic
            opportunities for a new business, or an addition to an existing one.
          </div>
        </div>
        <img
          className={classes.processline2}
          src="Images/our-process-line2.png"
          alt=""
        />
        <div className={classes.processbox}>
          <div className={classes.imgcontain}>
            <img
              className={classes.processimg}
              src="Images/discovery.png"
              alt=""
            />
          </div>
          <h5 className={classes.infoheading}>Discovery</h5>
          <div className={classes.processinfo}>
            In discovery, a team of designers will take a deep dive into user
            research, create wireframes, build designs, and perform rapid user
            testing to ensure that users love your product before we write a
            single line of code.
          </div>
        </div>
        <img
          className={classes.processline1}
          src="Images/our-process-line3.png"
          alt=""
        />
        <div className={classes.processbox}>
          <div className={classes.imgcontain}>
            <img
              className={classes.processimg}
              src="Images/development.png"
              alt=""
            />
          </div>
          <h5 className={classes.infoheading}>Development</h5>
          <div className={classes.processinfo}>
            Development is where we turn your designs into a reality using best
            practices, over the course of several sprints. At the end, you’ll
            have a live product ready for your team or your customers to use.
          </div>
        </div>
        <img
          className={classes.processline2}
          src="Images/our-process-line4.png"
          alt=""
        />
      </div>
      <Button2/>
    </div>
  );
}

function Industries(){
  const classes = useStyles();
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
