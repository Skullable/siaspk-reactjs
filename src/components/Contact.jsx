import Top from './Top';
import Contactcontent from './Contact-content';
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

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <Top pagename='contact'/>
      <Contactcontent/>
      <Footer/>
    </div>
  );
}

export default Contact;