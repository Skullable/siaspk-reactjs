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

export default function Slider() {
  // const classes = useStyles();
  return (
      <Carousel fade>
        <Carousel.Item interval={3000} touch="true">
          <img
            height= '100%'
            className="d-block w-100"
            src="Images/slider1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{fontSize:'80px', fontFamily: 'Poppins', fontWeight: '100', paddingBottom: '500px'}}>Smart Automation</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="Images/development.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 style={{fontSize:'80px', fontFamily: 'Poppins', fontWeight: '100', paddingBottom: '500px'}}>Custom Software Development Company</h3>
            <p>We provide turn-key software development services that add value to your business. Contact us today and transform your ideas into solutions!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="Images/technicalAdvisory.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 style={{fontSize:'80px', fontFamily: 'Poppins', fontWeight: '100', paddingBottom: '500px'}}>Technical Advisory</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
