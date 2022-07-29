import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/joy/TextField";
import Hook from "./Button";
import Box from '@mui/joy/Box'
import { fontSize, lineHeight } from "@mui/system";
//import { Map, TileLayer } from 'react-leaflet';
//import { useState } from "react";
//import osm from "./osm";
//import { useRef } from "react";
//import 'leaflet/dist/leaflet-src.esm'



const useStyles = makeStyles({
    contact:{
        alignItems: 'center'
    },
    h2:{
        fontFamily: 'Poppins',
    },
    contactfield:{
        display: "flex",
        alignItems: 'center',
    },
    span:{
        fontFamily: 'poppins',
        fontWeight: 500,
        color: '#202833',
        fontSize: '36px',
        lineHeight: '36px',
    },
    userinput:{
        display: 'flex',
        flexDirection: "column",
        alignItems: 'left',
        justifyContent: 'space-around',
        flex:2,
        width: '80%'
    },
    contactinfo:{
        flex: 1
    },
    nameinput:{
        backgroundColor:'#efefef',
        borderRadius: '1px',
        height: '40px',
        width: '600px',
        textTransform: 'uppercase',
        margin: '10px',

        '&::placeholder':{
            fontFamily: 'Poppins',
            textTransform: 'uppercase',
        }


    },

    
    msginput:{
        backgroundColor:'#efefef',
        borderRadius: '1px',
        height: '300px',
        width: '600px',

    }
})


export default function Contactcontent() {
    const classes = useStyles();
//  let mapOptions ={
    //        zoom: 13,
    //        center: [31.50357, 74.31905],
//    }
//    let map = new Window.L.map('map', mapOptions);
//    let layer = new Window.L.TileLayer('http://{s}.title.openstreetmap.org/{z}/{x}/{y}.png');
//    map.addLayer(layer)

    return (
        <div className={classes.contact}>
           <div className={classes.contactfield}>
            <div className={classes.userinput}>
             <span className={classes.span}>Contact Form</span>
             <TextField className={classes.nameinput} placeholder='FULL NAME' variant="solid"/>
             <TextField className={classes.nameinput} placeholder='PHONE NUMBER' variant="solid"/>
             <TextField className={classes.nameinput} placeholder='EMAIL ADDRESS' variant="solid"/>
             <TextField className={classes.msginput} placeholder='YOUR MESSAGE' variant="solid"/>
             <Hook/>
            </div>
            <div className={classes.contactinfo}></div>
          </div> 
        </div>
    )
}


//function ClientContainer(props) {
//    const classes = useStyles();
 //   return <>
 //       <div className={props.containterNumber == 1 ? classes.client1 : classes.client2}>
  //          <img className={classes.img} src={props.path} alt="" />
   //         <h6 className={classes.h6}>{props.text}</h6>
  //      </div>
//    </>

//const BasicMap = () => {
//    const [center, setCenter] = useState({ lat:74.31903879 ,lng:31.50359603 });
//    const ZOOM_LEVEL = 9;
 //   const mapRef = useRef();
  //  const classes = useStyles();
  //  return(
  //  <div className={classes.mapcontain}>
  //      <Map center={center}
  //       zoom={ZOOM_LEVEL}>
 ////           <TileLayer 
  //          url={osm.maptiler.url} 
  //          attribution={osm.maptiler.attribution}/>
 ////       </Map>
 //////    </div> 
 //    ) 
//} 

//<TextField className={classes.nameinput} placeholder='Full Name' variant="solid"/>
//<TextField className={classes.nameinput} placeholder="Phone Number" variant="solid"/>
//<TextField className={classes.nameinput} placeholder="Email Address" variant="solid"/>
//<TextField className={classes.msginput} placeholder="Your Message" variant="solid"/>