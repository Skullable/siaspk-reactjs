import { makeStyles } from '@mui/styles'
import BasicBreadcrumbs from './Breadcrumbs'

const useStyles = makeStyles({
  top:{
    position: 'relative',
    alignItems: 'center',
    width: '100vw',
    height: '40%',
    marginBottom: '20%',
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
    marginTop: '25px'
  },

  imgcontain:{
    position: 'absolute',
  },

  img:{
    width: '100vw'
  }

})

export default function Top() {
  const pagename = 'Our Process'
  const classes = useStyles();
  return (
    <div className={classes.top} id="top">
        <div className={classes.textcontain}>
              <h1 className={classes.heading}>{pagename}</h1>
              <ul className={classes.breadcrumbs}><BasicBreadcrumbs/></ul>
        </div>
        <div className={classes.imgcontain}><img className={classes.img} src="Images/mid.jpeg" alt="" /></div>
    </div>
  )
}
