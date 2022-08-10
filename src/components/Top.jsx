import { makeStyles } from '@mui/styles'
import BasicBreadcrumbs from './Breadcrumbs'

const useStyles = makeStyles({
  top:{
    position: 'relative',
    alignItems: 'center',
    width: '100vw',
    height: '40%',
    marginBottom: '250px',
    display: 'flex',
    flexDirection: 'column',
    top: '40px',
  },

  textcontain:{
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent:'center',
    zIndex: 2,
    width: '400px',
    top: '50px',
  },

  heading:{
    fontSize: '52px',
    fontWeight: 500,
    lineHeight: '54px',
    zIndex: 2,
    color: '#1f2732',
    fontFamily: 'Poppins',

  },

  breadcrumbs:{
    marginTop: '25px',
    paddingRight: '25px'
  },

  imgcontain:{
    position: 'absolute',
  },

  img:{
    width: '100vw',
    height: 'auto',
    '@media (max-width:1400px)':{
      height: '216px',
      width: 'auto'
   },
  }

})

export default function Top(props) {
  if (props.pagename == 'about'){
    var renderpagename = 'About'
    var breadcrumbname = 'ABOUT'
  };
  if (props.pagename == 'services'){
    var renderpagename = 'Services'
    var breadcrumbname = 'SERVICES'
  };
  if (props.pagename == 'clients'){
    var renderpagename = 'Clients'
    var breadcrumbname = 'CLIENTS'
  };
  if (props.pagename == 'process'){
    var renderpagename = 'Our Process'
    var breadcrumbname = 'OUR PROCESS'
  };
  if (props.pagename == 'contact'){
    var renderpagename = 'Contact'
    var breadcrumbname = 'CONTACT'
  };
  const classes = useStyles();
  return (
    <div className={classes.top} id="top">
        <div className={classes.textcontain}>
              <h1 className={classes.heading}>{renderpagename}</h1>
              <ul className={classes.breadcrumbs}><BasicBreadcrumbs name={breadcrumbname}/></ul>
        </div>
        <div className={classes.imgcontain}><img className={classes.img} src="Images/mid.jpeg" alt="" /></div>
    </div>
  )
}
