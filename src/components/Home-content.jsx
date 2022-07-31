import React from "react";
import { makeStyles } from "@mui/styles";
import ReactDOM from "react-dom";
import Slider from "./Slider";


const useStyles = makeStyles({
  Home: {
    top: "100px",
    alignItems: "center",
    marginBottom: "100px",
  },
});

export default function Homecontent() {
  const classes = useStyles();

  return (
    <div className={classes.Home}>
      <Slider className={classes.slider} />
    </div>
  );
}
