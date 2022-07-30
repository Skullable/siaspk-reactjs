import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/joy/TextField";
import Hook from "./Button";
import * as L from "leaflet"
import Box from '@mui/joy/Box'
import { color, fontSize, margin, padding } from "@mui/system";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
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
        width: '90%',
        justifyContent: 'space-between'
    },
    span:{
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'poppins',
        fontWeight: 500,
        color: '#202833',
        fontSize: '36px',
        lineHeight: '36px',
        padding: '20px'
    },
    textcontainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '10px',
    },

    p:{
        fontFamily: 'poppins',
        fontSize: '16px',
        fontWeight: 300,
        lineHeight: '21px',
        paddingLeft: '10px',
        color: '#7f7f7f',
    },
    userinput:{
        flexDirection: "column",
        alignItems: 'left',
        justifyContent: 'space-around',
        flex:3,
        width: '80%',
        margin: '20px',
    },
    contactdata:{
        flex: 3
    },
    contactinfo:{
        display: 'flex',
        flexDirection: "column",
        alignItems: 'left',
        justifyContent: 'space-around',
        width: '80%',
        margin: '20px',
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
            fontWeight: 300,
            textTransform: 'uppercase',
        }


    },

    
    msginput:{
        backgroundColor:'#efefef',
        borderRadius: '1px',
        height: '300px',
        width: '600px',

    },
    icons:{
        color: '#1d73be'
    }
})


export default function Contactcontent() {
    const classes = useStyles();
/*--    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '© OpenStreetMap'
    }).addTo(map);
    var marker = L.marker([51.5, -0.09]).addTo(map); --*/

    return (
        <div className={classes.contact}>
           <div id="map">
            <map></map>
           </div>
           <div className={classes.contactfield}>
            <div className={classes.userinput}>
             <span className={classes.span}>Contact Form</span>
             <TextField className={classes.nameinput} placeholder='FULL NAME' variant="solid"/>
             <TextField className={classes.nameinput} placeholder='PHONE NUMBER' variant="solid"/>
             <TextField className={classes.nameinput} placeholder='EMAIL ADDRESS' variant="solid"/>
             <TextField className={classes.msginput} placeholder='YOUR MESSAGE' variant="solid"/>
             <Hook/>
            </div>
            <div className={classes.contactdata}>
                <div className={classes.contactinfo}>
                 <span className={classes.span}>Contact Info</span>
                 <div className={classes.textcontainer}> <LocationOnIcon className={classes.icons} fontSize='12'/> <p className={classes.p}> FF 11 Center point plaza, Main Blvd, Block E 2 Gulberg III, Lahore, Punjab</p> </div>
                 <div className={classes.textcontainer}> <CallIcon className={classes.icons} fontSize='12'/> <p className={classes.p}>	+92 311 1555082</p> </div>
                 <div className={classes.textcontainer}> <EmailIcon className={classes.icons} fontSize='12'/> <p className={classes.p}> info@saispk.com</p> </div>
                </div>
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

//<TextField className={classes.nameinput} placeholder='Full Name' variant="solid"/>
//<TextField className={classes.nameinput} placeholder="Phone Number" variant="solid"/>
//<TextField className={classes.nameinput} placeholder="Email Address" variant="solid"/>
//<TextField className={classes.msginput} placeholder="Your Message" variant="solid"/>