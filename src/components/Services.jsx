import Topbar from './Topbar';
import Top from './Top';
import Info from './Info';
import Servicescontent from './Services-content';
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

function Services() {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <Top pagename='services'/>
      <Info/>
      <Servicescontent/>
      <Footer/>
    </div>
  );
}

export default Services;
