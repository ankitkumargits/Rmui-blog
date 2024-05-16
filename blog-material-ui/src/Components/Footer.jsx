import { Container, Link, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system';


const footerStyles = styled('div')({
    
});


const Footer = ({ title, description}) => {
    return (
        <>
        <footer>
            <Container maxWidth='lg'>
                <Typography variant='h6' align='center' gutterBottom>{title}</Typography>
                <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>{description}</Typography>
                <Typography variant='body2' color="textSecondary" align='center'>Copyright @{" "}</Typography>
                <Typography align='center'>
                <Link color='inherit' href='https://material-ui.com/'>Your Website 2023</Link>
                </Typography>
            </Container>
        </footer>
        </>
    )
}

export default Footer