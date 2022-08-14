import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import {  makeStyles } from "@mui/styles";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles   
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";


// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";


const Carouselwrapper = styled.div`
  width: 100%;
  .carousel-control.left,
  .carousel-control.right {
    background: none;
  }
`;

 const useStyles = makeStyles({

   slide:{
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    
   },
   img:{
    width: '100vw',
    trasnsition: 'all smooth',
    objectFit: 'fill',
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
    fontSize: "20px",
    paddingBottom: "30%",
    fontWeight: "100",
   },
   '@media (max-width:1150px)':{
    h1:{
      paddingBottom:'5%',
    },
    p:{
      paddingBottom: '5%',
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
      width: 'auto',
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

const Div = styled.div`
 display: flex;
 justify-content: center;
 `

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
const Img2 = styled.img`
  width: 1920;
  height: 1080px;
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
  trasnsition: 'all smooth',
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
/*    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[EffectFade, Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide> <div className={classes.slide} > <Img className={classes.img} src="Images/slider1.jpg" alt="" /> <h1 className={classes.h1}> Smart Solutions</h1></div> </SwiperSlide>
      <SwiperSlide><Img className={classes.img} src="Images/development.jpg" alt="" /></SwiperSlide>
      <SwiperSlide> <Img className={classes.img} src="Images/technicalAdvisory.jpg" alt="" /></SwiperSlide>
    </Swiper>*/

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
      <Carousel.Item>
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
