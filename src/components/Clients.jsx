import Topbar from './Topbar';
import Top from './Top';
import Clientscontent from './Clients-content';
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

function Clients() {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <Top pagename='clients'/>
      <Clientscontent/>
      <Footer/>
    </div>
  );
}

export default Clients;
