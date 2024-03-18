'use client'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', color: 'text.primary', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container xs={12} justifyContent="space-between">
          <Typography variant="h4" gutterBottom>
            Bandage
          </Typography>
          <Box sx={{ display: { md: 'block' } }}>
            {/* Social icons for desktop */}
            <IconButton aria-label="Facebook" color="primary">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Instagram" color="primary">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="Twitter" color="primary">
              <TwitterIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid container spacing={5} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Company Info
          </Typography>
          <Link href="#" color="inherit">About Us</Link><br />
          <Link href="#" color="inherit">Carrier</Link><br />
          <Link href="#" color="inherit">We are hiring</Link><br />
          <Link href="#" color="inherit">Blog</Link>
          </Grid>
          <Grid item xs={10} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Link href="#" color="inherit">About Us</Link><br />
            <Link href="#" color="inherit">Carrier</Link><br />
            <Link href="#" color="inherit">We are hiring</Link><br />
            <Link href="#" color="inherit">Blog</Link>
          </Grid>
          <Grid item xs={10} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Features
            </Typography>
            <Link href="#" color="inherit">Business Marketing</Link><br />
            <Link href="#" color="inherit">User Analytic</Link><br />
            <Link href="#" color="inherit">Live Chat</Link><br />
            <Link href="#" color="inherit">Unlimited Support  </Link>
          </Grid>
          <Grid item xs={10} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Link href="#" color="inherit">IOS & Android</Link><br />
            <Link href="#" color="inherit">Watch a Demo</Link><br />
            <Link href="#" color="inherit">Customers</Link><br />
            <Link href="#" color="inherit">API</Link>
          </Grid>

          <Grid item xs={10} sm={6} md={2} justifyContent="center">
            <Typography variant="h6" gutterBottom>
              Get In Touch
            </Typography>
            <TextField fullWidth placeholder="Your Email" />
            <Button variant="contained" sx={{ mt: 1, width: '100%' }}>
              Subscribe
            </Button>
          </Grid>
        </Grid>


        <Typography variant="subtitle1" align="left" sx={{ mt: 3 }}>
          Made With Love By Finland All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

