import { Menu, AccountCircle, Notifications,  } from '@mui/icons-material'
import { Badge, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system';
import SideDrawer from './SideDrawer';

// import { makeStyles } from '@mui/styles';
// const useStyles = makeStyles((theme)=> ({
//     title: {
//         flexGrow: 1,
//     },
//     tagline: {
//         fontSize: 20,
//         textTransform: 'uppercase',
//         justifyContent: 'center',
//         fontFamily: 'Montserrat',
//     }
// }))

const Title = styled('div')({
    flexGrow: 1,
  });
  
  const Tagline = styled('div')({
    fontSize: 20,
    textTransform: 'uppercase',
    justifyContent: 'center',
    fontFamily: 'Montserrat',
  });
const Header = () => {

    // const classes = useStyles();

    return (
        <>
            <Toolbar>
                <SideDrawer>
                <IconButton color='inherit'>
                    <Menu/>
                </IconButton>
                </SideDrawer>
                {/* <Typography variant='h6' className={classes.title}>
                    Blogging Website
                </Typography> */}
                <Typography variant='h6'>
                    <Title>Blogging Website</Title>
                </Typography>
                <IconButton color='inherit'>
                    <Badge badgeContent={4} color='error'>
                        <Notifications/>
                    </Badge>
                </IconButton>
                <IconButton color='inherit'>
                    <AccountCircle/>
                </IconButton>
            </Toolbar>
            <Divider/>
            {/* <Toolbar className={classes.tagline}>Express your emotions through words.</Toolbar> */}
            <Toolbar><Tagline>Express your emotions through words.</Tagline></Toolbar>
        </>
    )
}

export default Header