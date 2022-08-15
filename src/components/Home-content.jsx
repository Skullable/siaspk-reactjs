import React from "react";
import { makeStyles } from "@mui/styles";
import Slider from "./Slider";
import Button from "./Button";
import Button2 from "./Button2";
import TextField from "@mui/joy/TextField";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


const useStyles = makeStyles({
  Home: {
    width: '100vw',
    top: "100px",
    alignItems: 'center',
    marginBottom: "30px",
  },
  ourprocess:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  processcontainer: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '1500px',
    justifyContent: 'center',

  },
  processheading: {
    textAlign: 'center',
    paddingTop: '100px',
    margin: '3%',
    fontFamily: 'Poppins',
    fontSize: '48px',
    fontWeight : 500,
    lineHeight: '43px',
    color: '#1f2732'
  },
  processbox:{
    maxWidth: '190px',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  processline1:{
    paddingTop: '150px'
  },
  processline2:{
    paddingTop: '50px'
  },
  processimg:{
    width: '190px',
    height: '190px',
  },
  infoheading: {
    fontFamily: 'Poppins',
    fontSize: '23px',
    lineHeight: '30px',
    fontWeight: 500,
    color: '#1f2732',
    marginTop: '14px'
  },
  processinfo:{
    maxWidth: '300px',
    color: '#7f7f7f',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: '24px',
  },
  '@media (max-width:1069px)':{
    processline1:{ 
      display: 'none',
    },
    processline2:{ 
      display: 'none',
    },
    processbox:{
      maxWidth: '300px',
      margin: '20px',
    },
    processcontainer:{
      justiifyContent: 'space-around'
    },
  },
  '@media (max-width:800px)':{
    processcontainer:{
      flexDirection: 'column',
    },
  },

  /*-- Industries --*/

  industries:{ 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f2732',
    backgroundImage: "url(/images/texture.png)",
    backgroundAttachment: 'fixed',
  },
  industriesHeading: {
    paddingTop: '100px',
    margin: '3%',
    fontFamily: 'Poppins',
    fontSize: '42px',
    fontWeight : 500,
    lineHeight: '42px',
    color: '#ffff'
  },
  industriescontainer: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-around',
    marginBottom: '100px',

  },
  industriesbox: {
    width: '300px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '40px',
    
  },
  industriesimg:{
    height: '60px',
    width:'60px',  
  },
  industriesboxheading:{
    display: 'flex',
    marginTop: '10px',
    textAlign: 'center',
    fontFamily: 'poppins',
    fontSize: '23px',
    lineHeight: '30px',
    fontWeight: 500,
    color: 'white',

  },

  /*-- who we are --*/

  weare: {
    display: 'flex',
    width: '100%',

  },
  weareleft: {
    backgroundColor: 'none',
    width: '50%',
    display: 'flex',
    flex: 1,
  },
  weareimg:{
    width: '100%',
  },
  weareright: {
    alignItems: 'center',
    backgroundColor: '#f4f4f5',
    width: '50%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center'
  },
  wearetxt:{
    paddingTop: '180px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    maxWidth: '660px',
    marginRight: '50px',
    marginBottom: '250px',
    marginLeft: '50px',
  },
  weareheading: {
    fontSize: '54px',
    lineHeight: '48px',
    fontWeight: 500,
    fontFamily: 'poppins',
    marginBottom: '10px',
    color: '#1f2732',
  },
  wearesubheading:{
    fontSize: '20px',
    lineHeight: '30px',
    fontWeight: 300,
    fontFamily: 'poppins',
    marginTop: '30px',
    marginBottom: '30px',
    color: '#1f2732'    
  },
  weareinfo:{
    fontSize: '16px',
    lineHeight: '30px',
    fontWeight: 300,
    fontFamily: 'poppins',
    margin: '5px',
    color: '#7f7f7f'
  },
  '@media (max-width:1175px)':{
    weareleft:{
      backgroundSize: '100% 100%',
    },
  },
  '@media (max-width:1050px)':{
    weare:{
      flexDirection: 'column'
    },
    weareleft:{
      width: '100%'
    },
    weareright:{
      width: '100%'
    },
  },


/*--software--*/
software:{
  width: '100%',
  backgroundImage: 'url(Images/bgimage.jpg)',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

},
softwarecontainer: {
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',

},
infocard: {
  marginTop: '150px',
  marginBottom: '150px',
  maxWidth: '28%',
  height: '600px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',

},
softwareheading: {
  paddingLeft: '35px',
  paddingRight: '35px',
  paddingTop: '35px',
  textAlign: 'center',
  fontSize: '23px',
  lineHeight: '30px',
  fontWeight: 500,
  fontFamily: 'poppins',
},
softwareinfo: {
  marginTop: '5%',
  marginRight: '20%',
  marginLeft: '20%',
  textAlign: 'center',
  fontSize: '16px',
  lineHeight: '30px',
  fontWeight: 300,
  fontFamily: 'poppins',
  color:'#7f7f7f',
},
'@media (max-width:1010px)':{
  softwarecontainer: {
    flexDirection: 'column',
  },
  infocard:{
    height: '550px',
    maxWidth: '720px',
    margin: '50px',
    paddingTop: '10px',
  },
},
'@media (max-width:769px)':{
  infocard:{
    maxWidth: '500px'
  },
},

/*-- Products --*/
productsimg:{
  objectFit: 'scale-down',
  height: '120px',
  width:'120px',  
},

/*-- Contact Us --*/

contactus:{
  display: 'flex',
  width: '100%',
  backgroundColor: '#f4f4f5',
  alignItems: 'center',
  justifyContent: 'center'

},
span:{
  display: 'flex',
  fontFamily: 'poppins',
  fontWeight: 500,
  color: '#202833',
  fontSize: '54px',
  lineHeight: '48px',
  paddingBottom: '40px'
},
inputmsgcontain:{
  display: 'flex'
},
userinput:{
  width: '25%',
  display: 'flex',
  flexDirection: "column",
  marginTop: '100px',
},
nameinput:{
  backgroundColor:'#ffff',
  borderRadius: '1px',
  height: '40px',
  width: '300px',
  textTransform: 'uppercase',
  margin: '10px',
  fontFamily: 'Poppins',
  fontWeight: 300,


},
nameinput2:{
  backgroundColor:'#ffff',
  borderRadius: '1px',
  height: '40px',
  width: '140px',
  textTransform: 'uppercase',
  margin: '10px',
  fontFamily: 'Poppins',
  fontWeight: 300,


},


msginput:{
  backgroundColor:'#ffff',
  borderRadius: '1px',
  height: '200px',
  width: '300px',
  margin: '10px',

},
mapcontainer:{
  height: '600px',
  width: '40%',
  margin: '100px',
  border: 'solid 2px black'
},
btn:{
  float: 'left'
},
'@media (max-width:1000px)':{
  contactus:{
    flexDirection: 'column',
  },
  userinput:{
    width:'90%'
  },
  inputmsgcontain:{
    flexDirection: 'column',
  },
  nameinput:{
    width: '90%',
  },
  nameinput2:{
    width: '90%',
  },
  msginput:{
    width: '90%',
  },
  mapcontainer:{
    marginBottom:'100px',
    width: '90%',
    marginTop: '100px',
  },
},


});

function Ourprocess(){
  const classes = useStyles();

  return (
    <div className={classes.ourprocess}>
      <span className={classes.processheading}>Our Process</span>
      <div className={classes.processcontainer}>
        <img
          className={classes.processline1}
          src="Images/our-process-line1.png"
          alt=""
        />
        <div className={classes.processbox}>
          <div className={classes.imgcontain}>
            <img
              className={classes.processimg}
              src="Images/strategy2.png"
              alt=""
            />
          </div>
          <div className={classes.processinfo}>
            <h5 className={classes.infoheading}>Strategy</h5>
            Strategy takes your idea and creates a plan of action to make it a
            reality. Lean, multidisciplinary teams work alongside you in a
            series of engaging activities and workshops to uncover strategic
            opportunities for a new business, or an addition to an existing one.
          </div>
        </div>
        <img
          className={classes.processline2}
          src="Images/our-process-line2.png"
          alt=""
        />
        <div className={classes.processbox}>
          <div className={classes.imgcontain}>
            <img
              className={classes.processimg}
              src="Images/discovery.png"
              alt=""
            />
          </div>
          <h5 className={classes.infoheading}>Discovery</h5>
          <div className={classes.processinfo}>
            In discovery, a team of designers will take a deep dive into user
            research, create wireframes, build designs, and perform rapid user
            testing to ensure that users love your product before we write a
            single line of code.
          </div>
        </div>
        <img
          className={classes.processline1}
          src="Images/our-process-line3.png"
          alt=""
        />
        <div className={classes.processbox}>
          <div className={classes.imgcontain}>
            <img
              className={classes.processimg}
              src="Images/development.png"
              alt=""
            />
          </div>
          <h5 className={classes.infoheading}>Development</h5>
          <div className={classes.processinfo}>
            Development is where we turn your designs into a reality using best
            practices, over the course of several sprints. At the end, you’ll
            have a live product ready for your team or your customers to use.
          </div>
        </div>
        <img
          className={classes.processline2}
          src="Images/our-process-line4.png"
          alt=""
        />
      </div>
      <Button2 a='/about' className={classes.btn} type='1' txt='KNOW MORE'/>
    </div>
  );
}

function Industries(){
  const classes = useStyles();

  return (
    <div className={classes.industries}>
      <span className={classes.industriesHeading}>Industries</span>
      <div className={classes.industriescontainer}>
        <div className={classes.industriesbox}>
          <img
            className={classes.industriesimg}
            src="Images/fleet-management.png"
            alt=""
          />
          <h5 className={classes.industriesboxheading}>Fleet management</h5>
        </div>
        <div className={classes.industriesbox}>
          <img
            className={classes.industriesimg}
            src="Images/delivery.png"
            alt=""
          />
          <h5 className={classes.industriesboxheading}>Delivery Compliance</h5>
        </div>
        <div className={classes.industriesbox}>
          <img
            className={classes.industriesimg}
            src="Images/green-house.png"
            alt=""
          />
          <h5 className={classes.industriesboxheading}>Green House & Tunnel Farming</h5>
        </div>
        <div className={classes.industriesbox}>
          <img
            className={classes.industriesimg}
            src="Images/agriculture.png"
            alt=""
          />
          <h5 className={classes.industriesboxheading}>Agriculture Equipment</h5>
        </div>
        <div className={classes.industriesbox}>
          <img
            className={classes.industriesimg}
            src="Images/transport.png"
            alt=""
          />
          <h5 className={classes.industriesboxheading}>Transportation Routing</h5>
        </div>
        <div className={classes.industriesbox}>
          <img
            className={classes.industriesimg}
            src="Images/E-commerce.png"
            alt=""
          />
          <h5 className={classes.industriesboxheading}>E-commerence</h5>
        </div>
      </div>
    </div>
  );
};

function Weare(){
  const classes = useStyles();
  
  return(
    <div className={classes.weare}>
      <div className={classes.weareleft}><img className={classes.weareimg} src="Images/bussinessman.jpg" alt="" /></div>
      <div className={classes.weareright}>
        <div className={classes.wearetxt}>
          <span className={classes.weareheading}>Who We Are</span>
          <span className={classes.wearesubheading}>Full suite software house focusing on IoT based/Custom Solutions to problems faced by businesses daily.</span>
          <div className={classes.weareinfo}>Smart A&I Solutions offers our customers a wealth of technical and business expertise. We create diverse, complex, web and mobile solutions for any business need. Our knowledge and experience translate to added value and peace of mind for our customers. With Smart A&I Solutions you get quality software and perfect service every time.</div>
        </div>
      </div>
    </div>
  )
};

function Software() {
  const classes = useStyles();

  return(
    <div className={classes.software}>
      <div className={classes.softwarecontainer}>
        <div className={classes.infocard}>
          <img src="Images/app-dev.png" alt="" />
          <h5 className={classes.softwareheading}>Application Development</h5>
          <div className={classes.softwareinfo}>We engineer digital solutions of any complexity, combining and multidisciplinary tech expertise with industry experience.</div>
          <Button2 a='/about' type='2' txt='READ MORE'/>
        </div>
        <div className={classes.infocard}>
          <img src="Images/agriculture.png" alt="" />
          <h5 className={classes.softwareheading}>Application Development</h5>
          <div className={classes.softwareinfo}>We engineer digital solutions of any complexity, combining and multidisciplinary tech expertise with industry experience.</div>
          <Button2 a='/about' type='2' txt='READ MORE'/>
        </div>
        <div className={classes.infocard}>
          <img src="Images/transport.png" alt="" />
          <h5 className={classes.softwareheading}>Application Development</h5>
          <div className={classes.softwareinfo}>We engineer digital solutions of any complexity, combining and multidisciplinary tech expertise with industry experience.</div>
          <Button2 a='/about' type='2' txt='READ MORE'/>
        </div>
      </div>
    </div>
  )
};

function Ourproducts(){
  const classes = useStyles();

  return (
    <div className={classes.industries}>
      <span className={classes.industriesHeading}>Our Products</span>
      <div className={classes.industriescontainer}>
        <div className={classes.industriesbox}>
          <img
            className={classes.industriesimg}
            src="Images/cart.png"
            alt=""
          />
          <h5 className={classes.industriesboxheading}>Packages Cart Solutions</h5>
        </div>
        <div className={classes.industriesbox}>
          <img
            className={classes.industriesimg}
            src="Images/diagnostics.png"
            alt=""
          />
          <h5 className={classes.industriesboxheading}>Smart Diagnostics</h5>
        </div>
        <div className={classes.industriesbox}>
          <img
            className={classes.industriesimg}
            src="Images/tubewell.png"
            alt=""
          />
          <h5 className={classes.industriesboxheading}>Smart Tubewell</h5>
        </div>
        <div className={classes.industriesbox}>
          <img
            className={classes.industriesimg}
            src="Images/smart-iot.png"
            alt=""
          />
          <h5 className={classes.industriesboxheading}>Smart IoT Solutions</h5>
        </div>
        <div className={classes.industriesbox}>
          <img
            className={classes.industriesimg}
            src="Images/delivery-pcb.png"
            alt=""
          />
          <h5 className={classes.industriesboxheading}>PBC Delivery Compliance</h5>
        </div>
        <div className={classes.industriesbox}>
          <img
            className={classes.industriesimg}
            src="Images/fleet.png"
            alt=""
          />
          <h5 className={classes.industriesboxheading}>Smart Fleet (Fleet and Asset Management)</h5>
        </div>
        <div className={classes.industriesbox}>
          <img
            className={classes.productsimg}
            src="Images/real_estate.png"
            alt=""
          />
          <h5 className={classes.industriesboxheading}>Real Estate online Biding Platform</h5>
        </div>
      </div>
    </div>
  );
};

function Contactus (){
  const classes = useStyles();

  return (
    <div className={classes.contactus}>
      <div className={classes.userinput}>
        <span className={classes.span}>Contact Us</span>
        <div className={classes.inputmsgcontain}>
          <TextField
            className={classes.nameinput2}
            placeholder="FULL NAME"
            variant="solid"
          />
          <TextField
            className={classes.nameinput2}
            placeholder="PHONE NUMBER"
            variant="solid"
          />
        </div>
        <TextField
          className={classes.nameinput}
          placeholder="EMAIL ADDRESS"
          variant="solid"
        />
        <TextField
          className={classes.msginput}
          placeholder="YOUR MESSAGE"
          variant="solid"
        />
        <Button txt='SEND MESSAGE' type='1'/>
      </div>
      <Map
        className={classes.mapcontainer}
        center={[31.5036, 74.31906]}
        zoom={17}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[31.5036, 74.31906]}>
          <Popup>
            Smart A&I solutions <br /> FF 11 Center point plaza, Main Blvd
          </Popup>
        </Marker>
      </Map>
    </div>
  );
}




export default function Homecontent() {
  const classes = useStyles();

  return (
    <div className={classes.Home}>
      <Slider/>
      <Ourprocess/>
      <Industries/>
      <Weare/>
      <Software/>
      <Ourproducts/>
      <Contactus/>
    </div>
  );
}
