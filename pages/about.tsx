import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const cards = [1, 2, 3, 4, 5, 6];

const theme = createTheme();

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              About Page
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Pellentesque massa placerat duis ultricies 
            lacus sed turpis tincidunt id. Bibendum est ultricies 
            integer quis auctor elit sed. Potenti nullam ac tortor 
            vitae purus faucibus ornare. Volutpat consequat mauris 
            nunc congue. In tellus integer feugiat scelerisque varius. 
            Pellentesque habitant morbi tristique senectus et netus et 
            malesuada fames. In ante metus dictum at tempor. Nulla 
            pellentesque dignissim enim sit amet. Nisi quis eleifend 
            quam adipiscing. Cras semper auctor neque vitae. In nisl
            nisi scelerisque eu ultrices.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}