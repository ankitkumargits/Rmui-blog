
import { Container, Grid, ThemeProvider, createTheme } from '@mui/material'
import './App.css'
import Header from './Components/Header'
import FeaturedPost from './Components/FeaturedPost';
import { featuredPosts, sidebar } from './data/Data';
import PostCard from './Components/PostCard';
import { styled } from '@mui/system';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';

const MainGrid = styled('div')({
      marginTop: 55
    });



function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header/>
        <FeaturedPost/>
        <br/>
        <Grid container spacing={4}>
          {
            featuredPosts.map((post)=> (
              <PostCard post={post} key={post.title}/>
            ))
          }
        </Grid>
        <Grid container spacing={5}>
          <MainGrid>
            <Main title="From the Firehose"/>
            <Sidebar title={sidebar.title} description={sidebar.description} archives={sidebar.archives} social={sidebar.social}/>
          </MainGrid>
        </Grid>
      </Container>
      <Footer
      title="Footer"
      description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  )
}

export default App
