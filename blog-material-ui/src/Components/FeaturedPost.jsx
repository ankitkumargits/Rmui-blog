import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system';

const Title = styled('div')({
    fontSize: 40,
    fontFamily: 'Montserrat',
    });

const Cover = styled('div')({
    backgroundImage: `url(https://images.unsplash.com/photo-1693761935441-ad0ffad6905b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)`,
    backgroundPosition: 'center',
    padding: "35px 25px",
});

const btn = styled('text')({

});

const FeaturedPost = () => {
    return (
        <>
        <Card variant='div'>
        <Cover>
                <CardContent>
                    <Typography variant='div' gutterBottom>
                        <Title>Title of a longer featured blog post</Title>
                    </Typography>
                    <Typography variant='h5'> Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents</Typography>
                </CardContent>
                <CardActions>
                    <Button variant='text'>Read More.</Button>
                </CardActions>
        </Cover>
        </Card>
        </>
    )
}

export default FeaturedPost