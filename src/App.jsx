import Services from "./components/Services";
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
      <Services/>
    </div>
  );
}

export default App;
