import { makeStyles } from "@mui/styles"
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    menu:{
        width: '300px',
        height: '100vh',
        backgroundColor: '#1f2732',
        position: 'fixed',
        top: 0,
        transform: 'translateX(-100%)',
        zIndex: 1101,
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.2s ease',
    },
    menuopen:{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#1f2732',
        position: 'fixed',
        top: 0,
        transform: 'translateX(0%)',
        zIndex: 1101,
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.2s ease',
    },
    list:{
        paddingTop: '100px',
    },
    item:{
        top: '100px',
        padding: '15px',
        display: 'flex',
        flexDirection: 'row',
        color: '#5ea3ce',
        fontSize: '12px',
        lineHeight: '0px',
        cursor: 'pointer',
        transition: 'all .5s',
        fontFamily : 'Poppins',
        fontSize: '14px',
        textDecoration: 'none',
        fontWeight: 600,
    
        '&:hover':{
          color: '#fe4973',
          textDecoration: 'underline'
        }
    
    
      },
      anchor:{
        top: '100px',
        color: '#5ea3ce',
        textDecoration: 'none',
        letterSpacing: '3px',
        '&:hover':{
          color: '#fe4973',
          textDecoration: 'underline'
        }
      },
})

export default function Menu({menuOpen,setMenuOpen}) {

    const classes = useStyles()
    return (
      <div className={menuOpen? classes.menuopen : classes.menu} onClick={()=>setMenuOpen(false)}>
          <ul className={classes.list} >
           <div className={classes.item} ><Link onClick={()=>setMenuOpen(false)} className={classes.anchor} to="/">Home </Link></div>
           <div className={classes.item} ><Link onClick={()=>setMenuOpen(false)} className={classes.anchor} to="/about">About </Link></div>
           <div className={classes.item} ><Link onClick={()=>setMenuOpen(false)} className={classes.anchor} to="/services">Services </Link></div>
           <div className={classes.item} ><Link onClick={()=>setMenuOpen(false)} className={classes.anchor} to="/clients">Clients </Link></div>
           <div className={classes.item} ><Link onClick={()=>setMenuOpen(false)} className={classes.anchor} to="/ourprocess">Our Process </Link></div>
           <div className={classes.item} ><Link onClick={()=>setMenuOpen(false)} className={classes.anchor} to="/contact">Contact Us </Link></div>
          </ul>
      </div>
    )
  }