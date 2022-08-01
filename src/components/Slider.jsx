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


export default function Slider() {
  return (
      <Carousel fade>
        <Carousel.Item interval={1600} touch="true">
          <img
            height= '100%'
            className="d-block w-100"
            src="Images/slider1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1600}>
          <img
            className="d-block w-100"
            src="Images/development.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1600}>
          <img
            className="d-block w-100"
            src="Images/technicalAdvisory.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
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
