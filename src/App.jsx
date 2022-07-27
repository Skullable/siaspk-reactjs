import Clients from "./components/Clients";
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
      <Clients/>
    </div>
  );
}

export default App;
