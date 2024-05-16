import { Grid, Link, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

const SidebarAboutBox = styled('div')({
        
    });

const SidebarSection = styled('div')({

});


const Sidebar = ({archives, description, social, title}) => {

    return (
        <>
        <Grid item xs={12} md={4}>
            <Paper elevation={0}>
                <SidebarAboutBox>
                    <Typography variant='h6' gutterBottom>
                        {title}
                    </Typography>
                    <Typography>{description}</Typography>
                </SidebarAboutBox>
            </Paper>
            <Typography>
                <SidebarSection>
                    Archives    
                </SidebarSection>
            </Typography>
            {archives.map((archive) => (
                <Link
                display='block'
                variant='body1'
                href={archive.url}
                key={archive.title}
                >{archive.title}</Link>
            ))}

            <Typography variant='h6' gutterBottom>
            <SidebarSection>
                Social
            </SidebarSection>
            </Typography>
            {social.map((network)=> (
                    <Link display="block" variant='body1' href="#" key={network.name}>
                        <Grid container direction='row' spacing={1} alignItems="center">
                            <Grid item >
                                <network.icon/>
                            </Grid>
                            <Grid item>{network.name}</Grid>
                        </Grid>
                    </Link>
                ))}
        </Grid>
        </>
    )
}

export default Sidebar