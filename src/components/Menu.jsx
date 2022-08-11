import { makeStyles } from "@mui/styles"
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    menu:{
        width: '300px',
        height: '100vh',
        backgroundColor: 'white',
        position: 'fixed',
        top: 0,
        right: '-300px',
        zIndex: 4,
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 1s ease',

        '&:active':{
            right: 0,
        }
    
    },
})

export default function Menu({ menuOpen, setMenuOpen }) {

    const classes = useStyles()
    return (
      <div className={classes.menu + (menuOpen && 'active')}>
          <ul>
           <div className={classes.item} onClick={()=>setMenuOpen(false)}><Link className={classes.anchor} to="/">Home </Link></div>
           <div className={classes.item} onClick={()=>setMenuOpen(false)}><Link className={classes.anchor} to="/about">About </Link></div>
           <div className={classes.item} onClick={()=>setMenuOpen(false)}><Link className={classes.anchor} to="/services">Services </Link></div>
           <div className={classes.item} onClick={()=>setMenuOpen(false)}><Link className={classes.anchor} to="/clients">Clients </Link></div>
           <div className={classes.item} onClick={()=>setMenuOpen(false)}><Link className={classes.anchor} to="/ourprocess">Our Process </Link></div>
           <div className={classes.item} onClick={()=>setMenuOpen(false)}><Link className={classes.anchor} to="/contact">Contact Us </Link></div>
          </ul>
      </div>
    )
  }