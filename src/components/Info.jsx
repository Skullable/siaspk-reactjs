import { makeStyles } from "@mui/styles"
import Pagename from "./Pagename";

const useStyles = makeStyles({
    info:{
        position: 'relative',
        justifyContent: 'center',
        width: '60%',
        textAlign: 'center',

    },

    h3:{
        fontFamily: 'roboto',
        fontSize: '30px',
        fontWeight: 300,
        lineHeight: '36px',
    }
})

export default function Info() {
    const classes = useStyles();
  return (
    <div className={classes.info}>
        <h3 className={classes.h3}>“We aspire to help build a reliable and consistent lead generation system. Functioning as your virtual sales department we deliver results by employing unique tools and strategies, and a very passionate team.”</h3>
    </div>
  )
}

