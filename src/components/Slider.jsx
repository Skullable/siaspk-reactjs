import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import {  makeStyles } from "@mui/styles";

 const useStyles = makeStyles({

   slide:{
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    
   },
   img:{
    width: '100vw',
    trasnsition: 'all smooth',
   },
   h1:{
    zIndex: '2000',
    fontSize: "80px",
    fontFamily: "Poppins",
    fontWeight: "100",
    paddingBottom: '20%',
   },
   p:{
    fontFamily: "Poppins",
    fontSize: "25px",
    paddingBottom: "30%",
    fontWeight: "300",
   },
   '@media (max-width:1350px)':{
    h1:{
      paddingBottom:'7%',
    },
    p:{
      paddingBottom: '7%',
    },
  },
  '@media (max-width:970px)':{
    h1:{
      fontSize:'70px',
    },
    p:{
      fontSize:'20px',
    },
   },
  '@media (max-width:825px)':{
    h1:{
      fontSize:'50px',
    },
    p:{
      fontSize:'13px',
    },
   },
   '@media (max-width:599px)':{
    img:{
      height: '400px',
      objectFit: 'cover',
    },
    h1:{
      fontSize:'35px',
    },
    p:{
      fontSize:'10px',
      paddingBottom: '30px'
    },
   },
 })


const Img = styled.img`
  @keyframes zoom {
    0%{
      transform: scale(1);
    }
    50%{
      transform: scale(1.3);
    }
    100%{
      transform: scale(1);
    }
  }
  animation: zoom 27s infinite;
  trasnsition: 'all smooth';

`;

export default function Slider() {
  const classes = useStyles();
  return (
    <>
    <Carousel fade>
      <Carousel.Item interval={3000} touch="true" className={classes.slide} >
        <Img
          className={classes.img}
          src="Images/slider1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={classes.h1}>
            Smart Automation
          </h3>
          <p className={classes.p} >
            We consult on and implement intelligent software for businesses
            looking to upgrade their digital ecosystems with more powerful and
            scalable solutions designed to fit their particular processes. In
            each of the areas below, we offer access to the latest technologies
            and our expert assistance in integrating them seamlessly for use by
            internal users or consumers.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} touch="true" className={classes.slide} >
          <Img
            className={classes.img}
            src="Images/development.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className={classes.h1}>
              Custom Software Development Company
            </h3>
            <p className={classes.p}>
              We provide turn-key software development services that add value
              to your business. Contact us today and transform your ideas into
              solutions!
            </p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Img
          className={classes.img}
          src="Images/technicalAdvisory.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className={classes.h1} >
            Technical Advisory
          </h3>
          <p className={classes.p} >
            A recognized partner of market-leading technology vendors and
            innovators, Itransition is well-equipped to provide expert-level
            consulting to help you decide on your next move towards
            digitalization. This includes technology and product roadmapping,
            legacy software audit, workflow formalization, and implementation.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
  )
}