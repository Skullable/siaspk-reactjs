import Topbar from './Topbar';
import Top from './Top';
import Ourprocesscontent from './Our-process-content';
import { makeStyles } from '@mui/styles';
import Footer from './Footer';

const useStyles = makeStyles({
  about:{
    overflowX: 'hidden',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  }
})

function Ourprocess() {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <Top pagename='process'/>
      <Ourprocesscontent/>
      <Footer/>
    </div>
  );
}

export default Ourprocess;
