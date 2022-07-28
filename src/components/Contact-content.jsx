import { makeStyles } from "@mui/styles";
import Button from "@mui/joy/Button";
import TextField from "@mui/joy/TextField";
import Box from '@mui/joy/Box'
//import { Map, TileLayer } from 'react-leaflet';
//import { useState } from "react";
//import osm from "./osm";
//import { useRef } from "react";
//import 'leaflet/dist/leaflet-src.esm'



const useStyles = makeStyles({
    contact:{
        alignItems: 'center'
    },
    button:{
        backgroundColor: '#1e74be'
    },
    userinput:{
        alignItems: 'left',
        width: '80%'
    },
    nameinput:{
        backgroundColor:'#efefef',
        borderRadius: '5px',
        height: '40px',
        width: '600px',

    },
    msginput:{
        backgroundColor:'#efefef',
        borderRadius: '5px',
        height: '300px',
        width: '600px',

    }
})


export default function Contactcontent() {
    const classes = useStyles();
//  let mapOptions ={
//        center: [31.50357, 74.31905],
//        zoom: 13,
//    }
//    let map = new Window.L.map('map', mapOptions);
//    let layer = new Window.L.TileLayer('http://{s}.title.openstreetmap.org/{z}/{x}/{y}.png');
//    map.addLayer(layer)

    return (
        <div className={classes.contact}>
           <div className={classes.contactfield}>
            <div className={classes.userinput}>
             <Box
              sx={{
              py: 2,
              display: 'grid',
              gap: 2,
              alignItems: 'left',
              flexWrap: 'wrap',
             }}
            >
             <TextField className={classes.nameinput} placeholder='Full Name' variant="solid"/>
             <TextField className={classes.nameinput} placeholder="Phone Number" variant="solid"/>
             <TextField className={classes.nameinput} placeholder="Email Address" variant="solid"/>
             <TextField className={classes.msginput} placeholder="Your Message" variant="solid"/>
             <Button Classname={classes.button}>SEND MESSAGE</Button>
            </Box>
           </div>
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
