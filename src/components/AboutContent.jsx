import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    content:{
        backgroundColor: 'white',
        width: '100%',
        top: '40px',
        overflowX: 'hidden',
        position: 'relavtive',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    containers:{
        display: 'flex',
        width: '60%',
        position: 'relative',
        overflow: 'hidden',
        margin: '4%',
    },
        '@media (max-width:1024px)':{
            containers:{
                flexDirection: 'column',
            }
        },


    left:{
        flex: 1,

    },

    right:{
        flex: 1,
        overflow: "hidden",
    },
    h4:{
        textAlign: 'left',
        fontFamily: 'roboto',
        fontSize: '36px',
        lineHeight: '36px',
        fontWeight: 600,
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
        width: '490px',
        height: '280px',
    }
})

export default function Aboutcontent() {
    const classes = useStyles();
  //  const ourMediaQuery = useMediaQuery('(min-width:400px)');

  return (
    <div className={classes.content}>
            <div className={classes.containers}>
             <div className={classes.left}>
                 <h4 className={classes.h4}>Launch Digital Projects to Propel Your Mission</h4>
                 <p className={classes.p}>Your next great business venture should never be held back by lacking technical execution. Let us handle the technical side of things while you focus on expanding your impact and realizing your mission in the digital space. we’ll be your technical co-founders, a natural extension of your team learning your operation inside and out. Using that understanding, we’ll tailor-make digital products that will drive success in your market.</p>
             </div>
             <div className={classes.right}>
              <img className={classes.img} src="Images/Digital-Marketing-Projects-Page.png" alt="" />
             </div>
            </div>
            <div className={classes.containers}>
                <div className={classes.left}>
                    <img className={classes.img} src="Images/mobile-web.jpg" alt="" />
                </div>
                <div className="right">
                    <h4 className={classes.h4}>Mobile App, Software, and Web Development</h4>
                    <p className={classes.p}>We are tight-knit crew of some of the finest product strategy, UX/UI design, and app development experts in the business. We’re here to help you demystify tech and neatly sidestep risk so you can achieve your goals on time and on budget. We’ll help you navigate strategy, branding, and how to tell your story. From concept to launched product, we’ll build it right the first time using the highest standards for your industry and the best practices of ours.</p>
                </div>
            </div>
            <div className={classes.containers}>
              <div className={classes.left}>
                  <h4 className={classes.h4}>Our Extensive Industry Know-How</h4>
                  <p className={classes.p}>Smart A&I Solutions has assembled an expert team whose members have decades of experience in technical problem-solving, identifying pain points, streamlining workflows, and developing high-performing software applications that spark joy. We help set the standard for development practices, constantly refining and updating our knowledge, skills, and process to provide our clients with the best. Our experience includes a variety of web, mobile, and IoT technologies and frameworks, including python, php, Laravel, JavaScript, PostgreSQL, Flutter, WordPress, React JS, and more across a myriad of verticals and platforms.</p>
              </div>
              <div className={classes.right}>
               <img className={classes.img} src="Images/know-how_1.jpg" alt="" />
              </div>
            </div>
    </div>
  )
}
