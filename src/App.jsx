import About from "./components/About";
import Topbar from "./components/Topbar";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";

const useStyles = makeStyles({
  app:{
    overflowX: 'hidden'
  }
})

function App() {
  const classes = useStyles();
  return (
    <div className={ClassNames.app}>
      <About/>
    </div>
  );
}

export default App;
