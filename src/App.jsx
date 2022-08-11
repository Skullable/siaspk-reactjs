import About from "./components/About";
import Home from "./components/Home";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Ourprocess from "./components/Our-process";
import { makeStyles } from "@mui/styles";
import Topbar from "./components/Topbar";
import Menu from "./components/Menu";
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from "react";

const useStyles = makeStyles({
  app:{
    overflowX: 'hidden'
  },
  content: {
  }
})

function App() {
  const classes = useStyles();
  const [menuOpen,setMenuOpen] = useState (false)
  return (
    <div className={classes.app}>
      <Router>
        <Topbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Switch>
          <div className={classes.content}>
          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/clients">
              <Clients />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/ourprocess">
              <Ourprocess />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
