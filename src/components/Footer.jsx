import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  footer:{
    display: 'flex',
    textAlign: 'center',
    width: '100%',
    height: '10%',
    borderTop: 'solid black 1px',
    position: 'relative',
    bottom: '30px',
    justifyContent: 'center'
  },
  footer2:{
    textAlign: 'center',
    width: '100%',
    height: '100px',
    position: 'relative',
    bottom: '30px',
  },

  h5:{
    fontSize: '12px',
    lineHeight: '30px',
    fontWeight: 600,
    letterSpacing: '3px',
    paddingTop: '3.5%',
    color: '#ff497c',
    fontFamily: 'Poppins'
  }

})

export default function Footer(props) {
  const classes = useStyles();
  return (
    <div className={props.variant == 1 ? classes.footer2 : classes.footer }>
        <h5 className={classes.h5}>SMART A&I SOLUTIONS @ ALL RIGHT RESERVED</h5>
    </div>
  )
}
