import React from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/joy/TextField";
import Button from "./Button";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { AccessTimeSharp } from "@mui/icons-material";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


const useStyles = makeStyles({
    Home:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '100px'
    },
})


export default function Homecontent() {
    const classes = useStyles();

    return (
        <div className={classes.Home}>
        </div>
    )
}

