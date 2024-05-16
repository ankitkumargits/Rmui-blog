import {Card, CardActionArea, CardContent, CardMedia, Grid, Hidden, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system';

const Cart = styled('div')({
        display: 'flex',
    });

const CardDetails = styled('div')({
    flex: 1,
});

const CartMedia = styled('div')({
    width: 160,
});

const PostCard = ({post}) => {
    return (
        <>
        <Grid item xs={12} md={6}>
        <CardActionArea component='a' href='#'>
            <Card>
                <Cart>
                <CardDetails variant='div'>
                    <CardContent>
                        <Typography component='h2' variant='h5'>
                            {post.title}
                        </Typography>
                        <Typography variant='subtitle1' color='textSecondary'>
                            {post.date}
                        </Typography>
                        <Typography variant='subtitle1' paragraph>
                            {post.description}
                        </Typography>
                        <Typography variant='subtitle1' style={{color: "skyblue"}}>
                            Continue reading...
                        </Typography>
                    </CardContent>
                </CardDetails>
                <Hidden xsDown>
                    <CardMedia
                    image={post.image}
                    title={post.imageText}
                    >
                        <CartMedia></CartMedia>
                    </CardMedia>
                </Hidden>
                </Cart>
            </Card>
        </CardActionArea>
        </Grid>
        </>
    )
}

export default PostCard