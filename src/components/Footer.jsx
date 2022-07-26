import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  footer:{
    textAlign: 'center',
    width: '100%',
    height: '10%',
    borderTop: 'solid black 1px',
    position: 'relative',
    bottom: '30px',
  },

  h5:{
    paddingTop: '2%',
    color: '#ff497c',
    fontFamily: 'Poppins'
  }

})

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
        <h5 className={classes.h5}>SMART A&I SOLUTIONS @ ALL RIGHT RESERVED</h5>
    </div>
  )
}
