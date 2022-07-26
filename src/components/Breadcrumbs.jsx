import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  link:{
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

export default function BasicBreadcrumbs() {
  const classes = useStyles();
        const breadcrumbs = [
        <Link
          className={classes.link}
          underline="hover"
          key="2"
          color="#5ea3ce"
          href=""
          onClick={handleClick}
        >
          HOME
        </Link>,
        <Typography key="3" color="text.primary" fontFamily="poppins" fontSize="small" >
          ABOUT
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