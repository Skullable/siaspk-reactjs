import Topbar from './Topbar';
import Top from './Top';
import Info from './Info';
import Aboutcontent from './About-content';
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

function About() {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <Topbar/>
      <Top/>
      <Info/>
      <Aboutcontent/>
      <Footer/>
    </div>
  );
}

export default About;
