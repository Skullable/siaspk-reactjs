
import Topbar from './Topbar';
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

function Page() {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <Topbar/>
      <Contactcontent/>
      <Footer/>
    </div>
  );
}

export default Page;