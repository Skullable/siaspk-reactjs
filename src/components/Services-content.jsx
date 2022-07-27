import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    services:{
        backgroundColor: 'white',
        height: '500vh',
        width: '100%',
        top: '40px',
        overflowX: 'hidden',
        position: 'relavtive',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    service1:{
        display: 'flex',
        width: '80%',
        position: 'relative',
        overflow: 'hidden',
        justifyContent: 'center'

    },
    service2:{
        display: 'flex',
        width: '80%',
        position: 'relative',
        overflow: 'hidden',
        justifyContent: 'center'
    },

    left:{
        flex: 1,
        padding: '50px'

    },

    right:{
        flex: 1,
        overflow: "hidden",
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
        objectFit: 'contain',
        padding: '10px',
        height: '500px',
        width: '500px',
    },
    h4:{
        fontSize:'36px',
        lineHeight:'36px',
        fontWeight:'600',
        color: '#54595f',


    },
    coretechnologies:{
        alignItems: 'center',
    },
    wrapper:{
        display: 'flex',
        flexDirection: 'row',

    },
    imgcontainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    h6:{
        fontSize: '24px',
        lineHeight: '24px',
        fontWeight: 600,
        color: '#54595f',
    },

})

export default function Servicescontent() {
        const classes = useStyles();
        console.log(classes);
      return (
        <div className={classes.services}>
            <div className={classes.service1}>
                    <div className={classes.left}>
                        <h3 className={classes.h3}>Philosophy</h3>
                        <p className={classes.info}>We offer a scalable, robust suite of web and mobile app development services to help you get your project going and build your business. We leverage a wide array of technologies to develop web and mobile applications, design digital experiences that delight, and rescue projects that have stalled out. Whatever your needs, our process will help to propel your mission forward through digital innovation.</p>
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
                        <h3 className={classes.h3}>Product Consulting & Strategy</h3>
                        <p className={classes.info}>We solve business problems. UX/UI design and software development are merely tools we will use to scale your operation and increase your impact. We create a path to success by understanding your vision, studying your customers, and researching the ecosystem in which you operate. We then proceed to help define product requirements and present a product roadmap that aligns with your constraints and business goals.</p>
                    </div>
            </div>
            <div className={classes.service1}>
                    <div className={classes.left}>
                        <h3 className={classes.h3}>Project Rescue</h3>
                        <p className={classes.info}>It can be demoralizing to invest time and resources only to see your project stall out or fail to find footing in the market. Goji Labs has a dedicated project rescue service that has successfully helped our clients get their projects back on track, ready for launch, and recognized in the marketplace. Our highly skilled team will quickly salvage what’s usable and rebuild your project exactly as you envisioned it. Let us help you reach your business goals.</p>
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
                       <h3 className={classes.h3}>App Development & Testing</h3>
                       <p className={classes.info}>Technology is at the core of our app development services. We are experts in a variety of web, mobile, and IoT languages and frameworks. We are not in the business of building prototypes; we aim to lay the technical foundation of your company. We take great care to match our technical approach to your vision and develop scalable and maintainable codebases. We are obsessed with code quality and prefer to engineer a robust testing suite for every web and mobile application we build. Testing and quality assurance are an integral part of our process. Testing our work is not your job; it’s our job. </p>
                    </div>
            </div>
            <div className={classes.service1}>
                    <div className={classes.left}>
                        <h3 className={classes.h3}>Website Development & Design</h3>
                        <p className={classes.info}>How you tell your story matters. Whether you are a brand looking to increase sales, or a nonprofit trying to grow your impact, you need a strong online presence that boosts engagement, conversions, and revenue. Our web design and development team is here to promote your business and spread your message to broader audiences.</p>
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
                       <h3 className={classes.h3}>Custom Software Development</h3>
                       <p className={classes.info}>When you think of software development, what comes to mind? Goji Labs thinks of designing customized software solutions that are tailored to the various business problems our clients present us with. We find the technical issues specific to your business idea, perform a thorough analysis in order to find solutions, and execute through a transparent, collaborative process. The final product is a piece of software that will address your business needs efficiently and elegantly. </p>
                    </div>
            </div>
            <div className={classes.service1}>
                    <div className={classes.left}>
                        <h3 className={classes.h3}>IoT Development</h3>
                        <p className={classes.info}>Integrate smart devices to expand your value proposition with our Internet of Things (IoT) development services. We’ve designed and implemented IoT enterprise systems for hospitals and manufacturers. We’ll keep your data safe and your users happy with intuitive and innovative digital products.</p>
                    </div>
                    <div className={classes.right}>
                        <img className={classes.img} src="Images/iot.png" alt="" />
                    </div>
            </div>
              <div className={classes.coretechnologies}>
                <h4 className={classes.h4}>Core Technologies</h4>
                <div className={classes.wrapper}>
                 <div className={classes.imgcontainer}>
                  <img className={classes.img2} src="Images/Android-java.jpg" alt="" />
                  <h6 className={classes.h6}>Java - Android</h6>
                 </div>
                 <div className={classes.imgcontainer}>
                  <img className={classes.img2} src="Images/Node-js.jpg" alt="" />
                  <h6 className={classes.h6}>Node JS</h6>
                 </div>
                 <div className={classes.imgcontainer}>
                  <img className={classes.img2} src="Images/laravel.jpg" alt="" />
                  <h6 className={classes.h6}>Laravel</h6>
                 </div>
                 <div className={classes.imgcontainer}>
                  <img className={classes.img2} src="Images/Reaacr-Native.jpg" alt="" />
                  <h6 className={classes.h6}>React JS</h6>
                 </div>
                 <div className={classes.imgcontainer}>
                  <img className={classes.img2} src="Images/ios-swift.jpg" alt="" />
                  <h6 className={classes.h6}>iOS - Swift/Objective C</h6>
                 </div>
                 <div className={classes.imgcontainer}>
                  <img className={classes.img2} src="Images/flutter.jpg" alt="" />
                  <h6 className={classes.h6}>Flutter</h6>
                 </div>
                </div>
            </div>
        </div>
      )
    }
    