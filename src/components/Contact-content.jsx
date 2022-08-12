import React from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/joy/TextField";
import Hook from "./Button";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { AccessTimeSharp } from "@mui/icons-material";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'



const useStyles = makeStyles({
    contact:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '100px'
    },
    mapcontainer: {
        alignItems: 'center',
        height: '700px',
        width: '65%',
        margin: '100px',
        border: 'solid 2px #808080'
    },
    h2:{
        fontFamily: 'Poppins',
    },
    contactfield:{
        display: "flex",
        width: '65%',
    },
    span:{
        display: 'flex',
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
        alignItems: 'start',
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
    p2:{
        fontFamily: 'poppins',
        fontSize: '16px',
        fontWeight: 300,
        lineHeight: '21px',
        color: '#7f7f7f',
        paddingLeft: '50px',
    },
    userinput:{
        display: 'flex',
        flexDirection: "column",
        flex:3,
        marginTop: '20px',
        marginRight: '20px',
        marginBottom: '20px',
    },
    contactdata:{
        display: 'flex',
        flexDirection: "column",
        alignItems: 'left',
        flex: 2,
        margin: '10px'
    },
    contactinfo:{
        display: 'flex',
        flexDirection: "column",
        alignItems: 'left',
        margin: '15px',
    },
    openhours:{
        margin: '15px'
    },
    nameinput:{
        backgroundColor:'#efefef',
        borderRadius: '1px',
        height: '40px',
        maxWidth: '740px',
        textTransform: 'uppercase',
        margin: '10px',
        fontFamily: 'Poppins',
        fontWeight: 300,
        textTransform: 'uppercase',

        
    },

    
    msginput:{
        backgroundColor:'#efefef',
        borderRadius: '1px',
        height: '300px',
        maxWidth: '740px',
        paddingRight: '100px',
        margin: '10px',

    },
    icons:{
        margin: '2px',
        color: '#1d73be'
    },
    icons2:{
        margin: '7px',
        color: '#1d73be'
    },
    '@media (max-width:1024px)':{
        contactfield:{
            flexDirection: 'column'
    
        },
    },
    
    '@media (max-width:669px)': {
        mapcontainer:{
            width: '70%',
        },
        p2:{ 
            paddingLeft: '25px'
        }
    }
})


export default function Contactcontent() {
    const classes = useStyles();
    
    return (
        <div className={classes.contact}>
            <Map className={classes.mapcontainer} center={[31.5036, 74.31906]} zoom={17} scrollWheelZoom={false}>
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
           <div className={classes.contactfield}>
            <div className={classes.userinput}>
             <span className={classes.span}>Contact Form</span>
             <TextField className={classes.nameinput} placeholder='FULL NAME' variant="solid" id='fullWidth'/>
             <TextField className={classes.nameinput} placeholder='PHONE NUMBER' variant="solid"/>
             <TextField className={classes.nameinput} placeholder='EMAIL ADDRESS' variant="solid"/>
             <TextField className={classes.msginput} placeholder='YOUR MESSAGE' variant="solid"/>
             <Hook type='1'/>
            </div>
            <div className={classes.contactdata}>
                <div className={classes.contactinfo}>
                 <span className={classes.span}>Contact Info</span>
                 <div className={classes.textcontainer}> <LocationOnIcon className={classes.icons2} fontSize='12'/> <p className={classes.p}> FF 11 Center point plaza, Main Blvd, Block E 2 Gulberg III, Lahore, Punjab</p> </div>
                 <div className={classes.textcontainer}> <CallIcon className={classes.icons} fontSize='12'/> <p className={classes.p}>	+92 311 1555082</p> </div>
                 <div className={classes.textcontainer}> <EmailIcon className={classes.icons} fontSize='12'/> <p className={classes.p}> info@saispk.com</p> </div>
                </div>
                <div className={classes.openhours}>
                 <span className={classes.span}>Open Hours</span>
                 <div className={classes.textcontainer}> <AccessTimeSharp className={classes.icons} fontSize='12'/> <p className={classes.p}>Weekdays</p> <p className={classes.p2}>9:00-18:00</p></div>
                 <div className={classes.textcontainer}> <AccessTimeSharp className={classes.icons} fontSize='12'/> <p className={classes.p}>Call Center</p> <p className={classes.p2}> 24/7</p></div>
                </div>
            </div>
          </div> 
        </div>
    )
}
