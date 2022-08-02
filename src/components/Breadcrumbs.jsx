import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as Reactlink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  link:{
    textDecoration: 'none',
    color: '#72aed4',
    transition: 'all .5s',

    '&:hover':{
      color: 'gray'
    }

  }
})

function handleClick(event) {
  event.preventDefault();
  console.log('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs(props) {
  const classes = useStyles();
        const breadcrumbs = [
        <Link
          underline="hover"
          key="2"
          color="#5ea3ce"
          href=""
          onClick={handleClick}
        >
          <Reactlink className={classes.link} to='/'>HOME</Reactlink>
        </Link>,
        <Typography key="3" color="text.primary" fontFamily="poppins" fontSize="small" >
          {props.name}
        </Typography>,
      ];
    
      return (
        <Stack spacing={5}>
          <Breadcrumbs separator="​•" 
          aria-label="breadcrumb"
          fontFamily="poppins"
          fontSize="small"
          spacing='5' >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      );
    }