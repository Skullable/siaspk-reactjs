import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    services:{
        backgroundColor: 'white',
        width: '100%',
        top: '40px',
        overflowX: 'hidden',
        position: 'relavtive',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    service1:{
        display: 'flex',
        maxWidth: '1140px',
        position: 'relative',
        overflow: 'hidden',
        justifyContent: 'center',
        margin: '20px',

    },
    service2:{
        display: 'flex',
        maxWidth: '1140px',
        position: 'relative',
        overflow: 'hidden',
        justifyContent: 'center',
        margin: '20px',
    },

    left:{
        flex: 1,
        padding: '50px',

    },

    right:{
        flex : 1,
        display: 'flex',
        overflow: "hidden",
        alignItems: 'center',
        justifyContent: 'center',
    },
    h3:{
        textAlign: 'left',
        fontFamily: 'roboto',
        fontSize: '42px',
        lineHeight: '42px',
        fontWeight: 600,
        color: '#54595f',
        paddingBottom: '2%',
    },
    info:{
        textAlign: 'left',
        fontFamily: 'roboto',
        fontSize: '16px',
        lineHeight: '30px',
        fontWeight: 400,
        color: '#7a7a7a',

    },
    img:{
        padding: '10px',
        objectFit: 'contain',
        height: 'auto',
        width: '80%',
        zIndex: 3
    },
    h4:{
        fontSize:'36px',
        lineHeight:'36px',
        fontWeight:'600',
        color: '#54595f',
        margin: '20px'


    },
    coretechnologies:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: '100px',
    },
    wrapper:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        maxWidth: '1400px',
        padding: '40px',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    imgcontainer:{
        height: '200px',
        width: '220px',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '15px'
    },
    img2:{
        height: '150px',
        width: '150px',
        objectFit: 'contain'
    },
    h6:{
        textAlign: 'center',
        display: 'flex',
        fontSize: '23px',
        lineHeight: '24px',
        fontWeight: 700,
        color: '#54595f',
        margin: '10px'
    },
    textcontainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    '@media (max-width:955px)':{
        service1: {
            maxWidth: '800px',
        },
        service2:{
            maxWidth: '800px',
        },
        img:{
            objectFit: 'contain',
            height: 'auto',
            width: '80%',
            padding: '5px'
        },
        img2:{
            height: '120px',
            width: '110px',
        },
        h6:{
            fonSize: '22px',
        },
    },
    '@media (max-width:770px)':{
        service1: {
            flexDirection: 'column',
            maxWidth: '470px',
        },
        service2:{
            flexDirection: 'column-reverse',
            maxWidth: '470px',
        },
        img:{
            objectFit: 'contain',
            height: 'auto',
            width: '80%',
            padding: '5px'
        },
        img2:{
            height: '120px',
            width: '110px',
        }
    }

})
function Imagecontainer(props) {
    const classes = useStyles();
    return (
      <div className={classes.imgcontainer}>
        <img className={classes.img2} src={props.path} alt="" />
        <h6 className={classes.h6}>{props.text}</h6>
      </div>
    );
}

export default function Servicescontent() {
        const classes = useStyles();
      return (
        <div className={classes.services}>
            <div className={classes.service1}>
                    <div className={classes.left}>
                     <div className={classes.textcontainer}>
                        <h3 className={classes.h3}>Philosophy</h3>
                        <p className={classes.info}>We offer a scalable, robust suite of web and mobile app development services to help you get your project going and build your business. We leverage a wide array of technologies to develop web and mobile applications, design digital experiences that delight, and rescue projects that have stalled out. Whatever your needs, our process will help to propel your mission forward through digital innovation.</p>
                     </div>
                    </div>
                    <div className={classes.right}>
                        <img className={classes.img}  src="Images/philosophy.png" alt="" />
                    </div>
            </div>
            <div className={classes.service2}>
                    <div className={classes.right}>
                    <img className={classes.img}  src="Images/product-consulting.jpg" alt="" />
                    </div>
                    <div className={classes.left}>
                     <div className={classes.textcontainer}>
                        <h3 className={classes.h3}>Product Consulting & Strategy</h3>
                        <p className={classes.info}>We solve business problems. UX/UI design and software development are merely tools we will use to scale your operation and increase your impact. We create a path to success by understanding your vision, studying your customers, and researching the ecosystem in which you operate. We then proceed to help define product requirements and present a product roadmap that aligns with your constraints and business goals.</p>
                     </div>
                    </div>
            </div>
            <div className={classes.service1}>
                    <div className={classes.left}>
                     <div className={classes.textcontainer}>
                        <h3 className={classes.h3}>Project Rescue</h3>
                        <p className={classes.info}>It can be demoralizing to invest time and resources only to see your project stall out or fail to find footing in the market. Goji Labs has a dedicated project rescue service that has successfully helped our clients get their projects back on track, ready for launch, and recognized in the marketplace. Our highly skilled team will quickly salvage what’s usable and rebuild your project exactly as you envisioned it. Let us help you reach your business goals.</p>
                     </div>
                    </div>
                    <div className={classes.right}>
                        <img className={classes.img}  src="Images/project-rescue.png" alt="" />
                    </div>
            </div>
            <div className={classes.service2}>
                    <div className={classes.right}>
                       <img className={classes.img}  src="Images/app-development.jpg" alt="" />
                    </div>
                    <div className={classes.left}>
                     <div className={classes.textcontainer}>
                       <h3 className={classes.h3}>App Development & Testing</h3>
                       <p className={classes.info}>Technology is at the core of our app development services. We are experts in a variety of web, mobile, and IoT languages and frameworks. We are not in the business of building prototypes; we aim to lay the technical foundation of your company. We take great care to match our technical approach to your vision and develop scalable and maintainable codebases. We are obsessed with code quality and prefer to engineer a robust testing suite for every web and mobile application we build. Testing and quality assurance are an integral part of our process. Testing our work is not your job; it’s our job. </p>
                     </div>
                    </div>
            </div>
            <div className={classes.service1}>
                    <div className={classes.left}>
                     <div className={classes.textcontainer}>
                        <h3 className={classes.h3}>Website Development & Design</h3>
                        <p className={classes.info}>How you tell your story matters. Whether you are a brand looking to increase sales, or a nonprofit trying to grow your impact, you need a strong online presence that boosts engagement, conversions, and revenue. Our web design and development team is here to promote your business and spread your message to broader audiences.</p>
                     </div>
                    </div>
                    <div className={classes.right}>
                        <img className={classes.img}  src="Images/web-development.png" alt="" />
                    </div>
            </div>
            <div className={classes.service2}>
                    <div className={classes.right}>
                       <img className={classes.img}  src="Images/custom-software.jpg" alt="" />
                    </div>
                    <div className={classes.left}>
                     <div className={classes.textcontainer}>
                       <h3 className={classes.h3}>Custom Software Development</h3>
                       <p className={classes.info}>When you think of software development, what comes to mind? Goji Labs thinks of designing customized software solutions that are tailored to the various business problems our clients present us with. We find the technical issues specific to your business idea, perform a thorough analysis in order to find solutions, and execute through a transparent, collaborative process. The final product is a piece of software that will address your business needs efficiently and elegantly. </p>
                     </div>
                    </div>
            </div>
            <div className={classes.service1}>
                    <div className={classes.left}>
                     <div className={classes.textcontainer}>
                        <h3 className={classes.h3}>IoT Development</h3>
                        <p className={classes.info}>Integrate smart devices to expand your value proposition with our Internet of Things (IoT) development services. We’ve designed and implemented IoT enterprise systems for hospitals and manufacturers. We’ll keep your data safe and your users happy with intuitive and innovative digital products.</p>
                     </div>
                    </div>
                    <div className={classes.right}>
                        <img className={classes.img} src="Images/iot.png" alt="" />
                    </div>
            </div>
            <h4 className={classes.h4}>Core Technologies</h4>
              <div className={classes.coretechnologies}>
                <div className={classes.wrapper}>
                    <Imagecontainer path='Images/Android-java.jpg' text='Java - Android'/>
                    <Imagecontainer path='Images/Node-js.jpg' text='Node JS' />
                    <Imagecontainer path='Images/laravel.jpg' text='Laravel'/>
                    <Imagecontainer path='Images/Reaacr-Native.jpg' text='React JS'/>
                    <Imagecontainer path='Images/ios-swift.jpg' text='iOS -Swift/Objective C'/>
                    <Imagecontainer path='Images/flutter.jpg' text='Flutter'/>
                    <Imagecontainer path='Images/django.jpg' text='Python/Django'/>
                    <Imagecontainer path='Images/wordpress.png' text='WordPress'/>
                    <Imagecontainer path='Images/bootstrap.png' text='Bootstrap'/>
                    <Imagecontainer path='Images/dot_net.png' text='ASP.NET'/>
                </div>
            </div>
        </div>
      )
    }
    