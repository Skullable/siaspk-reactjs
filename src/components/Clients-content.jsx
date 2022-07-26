import { makeStyles } from "@mui/styles"
import { borderRadius, height, margin } from "@mui/system";

const useStyles = makeStyles({
    clients:{
        backgroundColor: 'white',
        width: '100%',
        top: '40px',
        position: 'relavtive',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        margin:'6%',
    },
    client1:{
        display: 'flex',
        flexDirection: 'column',
        height: '',
        width: '75%',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '10px',
        backgroundColor: '#efefef'
    },
    client2:{
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        position: 'relative',
        overflow: 'hidden',
        margin: '3%',
        borderRadius: '10px',
        backgroundColor: '#ffffff'
    },

    h6:{
        textAlign: 'left',
        fontFamily: 'poppins',
        fontSize: '23px',
        lineHeight: '24px',
        fontWeight: 500,
        color: '#54595f',
        padding: '2%',
    },
    p:{
        textAlign: 'left',
        fontFamily: 'roboto',
        fontSize: '16px',
        lineHeight: '30px',
        fontWeight: 400,
        color: '#7a7a7a',

    },
    img:{
        objectFit: 'scale-down',
        height: '200px'
        

    }
})

export default function Clientscontent() {
    const classes = useStyles();
    return (
        <div className={classes.clients}>
            <div className={classes.client1}>
                 <img className={classes.img} src="Images/pepsi.png" alt="" />
                 <h6 className={classes.h6}>As one of the largest food and beverage companies in the world, our mission is to provide consumers around the world with delicious, affordable, convenient and complementary foods and beverages from wholesome breakfasts to healthy and fun daytime snacks and beverages to evening treats. We are committed to investing in our people, our company and the communities where we operate to help position the company for long-term, sustainable growth.</h6>
            </div>
            <div className={classes.client2}>
                <img className={classes.img} src="Images/packages.png" alt="" />
                <h6 className={classes.h6}>To be the market Leaders we serve our clientele by providing quality products and services, while encouraging feedback to ensure even higher standards. To be a Company that relies on continuous enhancements of its technological competence to seek innovative solutions for customer needs. To be an organization that attracts and retains outstanding professionals by maintaining a culture of openness and innovation, by promoting individual growth and by rewarding initiatives and performance.</h6>
            </div>
            <div className={classes.client1}>
                <img className={classes.img} src="Images/AAG-Logos.png" alt="" />
                <h6 className={classes.h6}>Ali Akbar Group is a conglomerate operating in diverse industries including agriculture, energy and textile sectors providing modern techniques and newer technologies to the Pakistan’s economy through quality products, technological expertise and diversified field services.</h6>
            </div>
            <div className={classes.client2}>
                <img className={classes.img} src="Images/FFLM.jpg" alt="" />
                <h6 className={classes.h6}>The First Fidelity Leasing Modaraba is a perpetual, multipurpose and multi-dimensional Modaraba incorporated under the Modaraba Companies and Modaraba (Floatation and Control) Ordinance, 1980.</h6>
            </div>
        </div>
      )
    }
    
