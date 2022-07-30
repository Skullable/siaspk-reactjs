import Page from "./components/Contact";r
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
