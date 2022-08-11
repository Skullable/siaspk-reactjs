import { makeStyles} from "@mui/styles"

const useStyles = makeStyles({
    processes: {
        backgroundColor: 'white',
        width: '100%',
        top: '40px',
        position: 'relavtive',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '6%',
    },
    process1: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        position: 'relative',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: '30px'
    },
    process2:{
        display: 'flex',
        flexDirection: 'row-reverse',
        maxWidth: '1200px',
        position: 'relative',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: '30px'
    },
    left:{
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        margin: '20px'
    },
    mid:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    right:{
        display: 'block',
        maxHeight: '600px',
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    h2: {
        display: 'flex',
        position: 'relative',
        fontFamily: 'poppins',
        fontSize: '48px',
        lineHeight: '48px',
        fontWeight: 500,
        color: '#1f2732',
        paddingBottom: '15%',
        paddingLeft: '9.7%',
        margin: 'auto',
        textAlign: 'right',
        zIndex: 2,
    },
    h22: {
        display: 'flex',
        position: 'relative',
        fontFamily: 'poppins',
        fontSize: '48px',
        lineHeight: '48px',
        fontWeight: 500,
        color: '#1f2732',
        paddingBottom: '15%',
        paddingLeft: '9.7%',
        margin: 'auto',
        textAlign: 'left',
        zIndex: 2,
    },
    info:{
        fontFamily: 'poppins',
        fontSize: '16px',
        lineHeight: '30px',
        fontWeight: 300,
        color: '#7f7f7f',

    },

    img: {
        objectFit: 'scale-down',
        height: '200px',
        width: '300px',
        border: 'solid 10px #e8e9ea',
        borderRadius: '50%'


    },
    img2:{
        width: '30%',
        height: '5%',
    },
    h01:{
        opacity: 1,
        top: '80px',
        position: 'relative',
        padding: '30px',
        fontSize:'200px',
        lineHeight: '48px',
        fontFamily: 'poppins',
        fontWeight: 600,
        color:'#1d73be',
        zIndex: 1,

    },
    h02:{
        top: '80px',
        position: 'relative',
        fontSize:'200px',
        lineHeight: '48px',
        fontFamily: 'poppins',
        fontWeight: 600,
        color:'#a1ce4e',
        padding: '50px'

    },
    h03:{
        top: '80px',
        position: 'relative',
        fontSize:'200px',
        lineHeight: '48px',
        fontFamily: 'poppins',
        fontWeight: 600,
        color:'#30bea4'
    },
    h04:{
        top: '80px',
        position: 'relative',
        fontSize:'200px',
        lineHeight: '48px',
        fontFamily: 'poppins',
        fontWeight: 600,
        color:'#f1894c',
        padding: '50px'

    },
    h05:{
        top: '80px',
        position: 'relative',
        fontSize:'200px',
        lineHeight: '98px',
        fontFamily: 'poppins',
        fontWeight: 600,
        color:'#1d73be',
    },
    none:{
        opacity: 0,
        position: "absolute",
    },
    '@media (max-width:1080px)': {
        img:{
            marginBottom: '40px',
        },
        img2:{
            display: 'none'
        },
        process1:{
            flexDirection: 'column',
            maxWidth: '800px',
            margin: '50px',
        },
        process2:{
            flexDirection: 'column',
            maxWidth: '800px',
            margin: '50px',
        },
    },
    '@media (max-width:990px)':{
        process1:{
            flexDirection: 'column',
            maxWidth: '400px',
            margin: '50px',
        },
        process2:{
            flexDirection: 'column',
            maxWidth: '400px',
            margin: '50px',
        },
        img:{
            marginBottom: '40px',
            height: '150px',
            width: '250px',
        },
        img2:{ 
            display: 'none',
        },
        h01:{
            fontSize:'100px',
        },
        h02:{
            fontSize:'100px',
        },
        h03:{
            fontSize:'100px',
            padding: '30px',
        },
        h04:{
            fontSize:'100px',
        },
        h05:{
            fontSize:'100px',
        },
        h2:{
            fontSize:'36px',
        },
        h22:{
            fontSize:'36px',
        },
        left:{
            justifyContent: 'center',
        },
        info:{
            textAlign: 'center',
        }

    }, 
})


function ProcessContainer(props) {
    const classes = useStyles();
    return <>
        <div className={props.containernumber == 2? classes.process2 : classes.process1}>
            <div className={classes.left}>
                <h1 className={props.index == 1 ? classes.h01 : classes.none}>0{props.index == 1 ? 1 : undefined}</h1>
                <h1 className={props.index == 2 ? classes.h02 : classes.none}>0{props.index == 2 ? 2 : undefined}</h1>
                <h1 className={props.index == 3 ? classes.h03 : classes.none}>0{props.index == 3 ? 3 : undefined}</h1>
                <h1 className={props.index == 4 ? classes.h04 : classes.none}>0{props.index == 4 ? 4 : undefined}</h1>
                <h1 className={props.index == 5 ? classes.h05 : classes.none}>0{props.index == 5 ? 5 : undefined}</h1>
                <div className={props.containernumber == 1 ? classes.h2 : classes.h22}>{props.title}</div>
            </div>
            <div className={classes.mid}>
             <img className={classes.img}  src={props.path} alt="" />
             <img className={props.img == 1 ? classes.img2 : classes.none} src={props.containernumber == 1 ? 'Images/currly-arrow-flipped.png' : 'Images/currly-arrow.png'} alt=''/>
            </div>
            <div className={classes.right}>
             <div className={classes.info}>{props.info}</div>
            </div>
        </div>
    </>
}

export default function Ourprocesscontent() {
    const classes = useStyles();

    return (
        <div className={classes.processes}>
            <ProcessContainer index='1' img='1' title='Philosophy' path='Images/philosophy2.png' info='Smart A&I Solution Labs will take your project from ideation to launch. We’ll cultivate a deep understanding of your industry, help you define your product, and build, launch, and maintain it. We are transparent and communicative throughout our development process, and take great pride in the quality of our work. Our goal is not simply to build software but to solve your business problems through technology. We mitigate risk by leaving nothing to the imagination, reducing miscommunication to virtually zero so you know exactly what we’re building for you.' containernumber='1'/>
            <ProcessContainer index='2' img='1' title='Product Strategy & Research' path='Images/product-research.png' info='We begin our product strategy process with research into your vision, your pain points, and the ecosystem in which you operate. Then we converge on the required product specifications, distill a clear set of features and functional requirements, and develop a clear timeline for implementation. The path to success must be well-defined. For that, we’ll create a product roadmap as well as a clear schedule for the design and development stages. Lastly, we’ll explore and vet third-party sources and open-source libraries to accelerate our timeline and ensure the scalability and quality of your application. With product strategy finalized, we can begin the app and software development process.' containernumber= '2'/>
            <ProcessContainer index='3' img='1' title='UX & UI Implementation' path='Images/UX&UI.png' info='We take an iterative, revision-based approach to wireframing and visual design to capture your brand and create an intuitive user experience. We begin by defining the information architecture and translating functional requirements into an array of user flows and interactions. This array is illustrated through a set of grayscale, high-fidelity wireframes for both web and mobile. Finally, we establish a cohesive set of brand guidelines and inject them into our wireframes, delivering a pixel-perfect, high-fidelity prototype of your application.' containernumber='1'/>
            <ProcessContainer index='4' img='1' title='App Development & Testing' path='Images/app-development2.jpg' info='With our high-fidelity design ready, we can implement our feature set in code. We create a “development pod” for your project, which will consist of expert engineers in each of the skill sets required to deliver the product. The pod develops the front-end and server-side of your project in parallel. An easy-to-use staging environment will provide your team with the ability to track our progress and demo the product as it is being built. Once the full product has been developed, we execute a final round of acceptance testing before going live. We’ve crafted our app and software development process specifically to reduce product and technical risk, and to provide as much visibility and transparency as possible to avoid common pitfalls.'containernumber= '2'/>
            <ProcessContainer index='5' title='Launch & Iteration' path='Images/launch.png' info='Once we’re ready to launch, our team will deploy your application to a production environment and submit it to the relevant app stores. After launch, we continue to repeat our process, iterating through our design, development, and testing cycles. We are here to support your venture as it scales and build on the foundation we created together to achieve your business goals and propel your mission forward.' containernumber='0'/>
        </div>
    )
}
