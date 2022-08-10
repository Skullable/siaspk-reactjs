import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    infocontain: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      justifyContent: 'center',  
    },
    info:{
        marginTop: '50px',
        padding: '50px',
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
    },
    h32:{
        fontFamily: 'roboto',
        fontSize: '42px',
        fontWeight: 300,
        lineHeight: '42px',
    },
    '@media (max-width:780px)':{
      info:{
        width: '100%',
      }
    }
})

export default function Info(props) {
    const classes = useStyles();
  return (
    <div className={classes.infocontain}>
      <div className={classes.info}>
        <h3 className={classes.h3}>
          {props.page == 1
            ? "“We aspire to help build a reliable and consistent lead generation system. Functioning as your virtual sales department we deliver results by employing unique tools and strategies, and a very passionate team.”"
            : "We take care of every aspect of developing your product, enabling you to focus on the growth, impact, and scaling of your organization."}
        </h3>
      </div>
    </div>
  );
}

