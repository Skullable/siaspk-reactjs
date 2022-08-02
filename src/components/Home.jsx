
import Topbar from './Topbar';
import Homecontent from './Home-content';
import { Link } from 'react-router-dom';
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

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <Homecontent/>
      <Footer variant='1'/>
    </div>
  );
}

export default Home;