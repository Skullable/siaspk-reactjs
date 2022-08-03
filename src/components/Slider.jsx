import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import {  makeStyles } from "@mui/material";

/*const Carouselwrapper = styled.div`
  width: 100%;
  .carousel-control.left,
  .carousel-control.right {
    background: none;
  }
`;*/

// const useStyles = makeStyles({

//   caption:{
//     fontSize: '20px'
//   }
// })
const Img = styled.img`
  @keyframes zoom {
    0%{
      transform: scale(1);
    }
    100%{
      transform: scale(1.3);
    }
  }
  animation: zoom 6.3s infinite;
  trasnsition: 'all smooth',
`;

export default function Slider() {
  // const classes = useStyles();
  return (
      <Carousel fade>
        <Carousel.Item interval={3000} touch="true">
          <Img
            height= '100%'
            className="d-block w-100"
            src="Images/slider1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{fontSize:'80px', fontFamily: 'Poppins', fontWeight: '100', paddingBottom: '100px'}}>Smart Automation</h3>
            <p style={{fontFamily:'Poppins', fontSize: '20px' ,paddingBottom: '300px', fontWeight: '100',}}>We consult on and implement intelligent software for businesses looking to upgrade their digital ecosystems with more powerful and scalable solutions designed to fit their particular processes. In each of the areas below, we offer access to the latest technologies and our expert assistance in integrating them seamlessly for use by internal users or consumers.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <Img
            className="d-block w-100"
            src="Images/development.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 style={{fontSize:'80px', fontFamily: 'Poppins', fontWeight: '100', paddingBottom: '100px'}}>Custom Software Development Company</h3>
            <p style={{fontFamily:'Poppins', fontSize: '20px' ,paddingBottom: '300px', fontWeight: '100',}}>We provide turn-key software development services that add value to your business. Contact us today and transform your ideas into solutions!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Img
            className="d-block w-100"
            src="Images/technicalAdvisory.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 style={{fontSize:'80px', fontFamily: 'Poppins', fontWeight: '100', paddingBottom: '100px'}}>Technical Advisory</h3>
            <p style={{fontFamily:'Poppins', fontSize: '20px' ,paddingBottom: '300px', fontWeight: '100',}}>
             A recognized partner of market-leading technology vendors and innovators, Itransition is well-equipped to provide expert-level consulting to help you decide on your next move towards digitalization. This includes technology and product roadmapping, legacy software audit, workflow formalization, and implementation.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

  );
}
/*import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    slides:{
        
    }
})


export default function Slider() {
    const classes = useStyles();
  return (
    <ul class={classes.slides}>
      <li>
        <img src="1.jpg" alt="" />
      </li>
      <li>
        <img src="2.jpg" alt="" />
      </li>
      <li>
        <img src="3.jpg" alt="" />
      </li>
    </ul>
  );
}
*/
