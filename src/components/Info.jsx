import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    info:{
        position: 'relative',
        justifyContent: 'center',
        width: '80%',
        textAlign: 'center',

    },

    h3:{
        fontFamily: 'roboto',
        fontSize: '42px',
        fontWeight: 500,
        lineHeight: '42px',
    }
})

export default function Info() {
    const classes = useStyles();
  return (
    <div className={classes.info}>
        <h3 className={classes.h3}>We take care of every aspect of developing your product, enabling you to focus on the growth, impact, and scaling of your organization.</h3>
    </div>
  )
}

