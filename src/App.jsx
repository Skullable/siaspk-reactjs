import Page from "./components/About";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  app:{
    overflowX: 'hidden'
  }
})

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Page/>
    </div>
  );
}

export default App;
