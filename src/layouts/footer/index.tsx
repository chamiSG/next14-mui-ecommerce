'use client'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import TopNavbar from './TopNavbar';
import { CONSTANT } from '../../utils/constants'
import { Divider, IconButton, InputBase, Paper, Stack } from '@mui/material';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const footerLink = CONSTANT.FOOTER_LINK
  const socialLinks = [
    { href: "https://www.facebook.com/", icon: <FaFacebook /> },
    { href: "https://www.instagram.com/", icon: <FaInstagram /> },
    { href: "https://twitter.com/", icon: <FaTwitter /> }
  ]

  return (
    <>
      <Box component={'section'} maxWidth={{ sm: "720px", md: "1148px" }} mx={'auto'} px={{ xs: '2rem', md: '1rem' }}>
        <Stack direction={{ xs: "column", md: 'row' }} justifyContent={'space-between'} gap={3} py={5} borderBottom={'1px solid #E6E6E6'}>
          <Typography variant="h4" noWrap component="a" href="/" color={'secGray.main'}>
            {CONSTANT.TEXT.LOGO}
          </Typography>
          <Box display={'flex'} gap={3}>
            {socialLinks.map((item: any, i: number) => (
              <Link key={i} href={item.href} underline="none" color={"primary"} target="_blank" rel="noopener" sx={{ fontSize: '24px' }}>
                {item.icon}
              </Link>
            ))}
          </Box>
        </Stack>
        <Stack direction={{ xs: "column", md: 'row' }} justifyContent={'space-between'} gap={3} py={'50px'}>
          {footerLink.map((item: any, i: number) => (
            <Stack key={i}>
              <Typography variant="h5" fontSize={'1rem'} mb={'10px'}>{item.TITLE}</Typography>
              {item.LINKS.map((link: any, j: number) => (
                <Link key={j} href={link.href} color="text.secondary" mt={'10px'}>{link.name}</Link>
              ))}
            </Stack>
          ))}
          <Stack>
            <Typography variant="h5" fontSize={'1rem'} mb={'10px'}>Get In Touch</Typography>
            {/* <Stack direction={'row'}>
              <TextField placeholder="Your Email" variant="outlined" size="medium" sx={{ borderTopRightRadius: 0, borderEndEndRadius: 0 }} />
              <Button variant="contained">Subscribe</Button>
            </Stack> */}
            <Paper
              component="form"
              sx={{ display: 'flex', alignItems: 'center', border: '1px solid #E6E6E6', boxShadow: 'none' }}
            >
              <InputBase
                size='medium'
                sx={{ ml: 1, flex: 1, pl: '20px', py: '15px'}}
                placeholder="Your Email"
                inputProps={{ 'aria-label': 'your email' }}
              />
              <Button
                variant="contained"
                sx={{ py: '15px', px: '22.5px', height: '100%', lineHeight: '32px', borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeft: '1px solid #E6E6E6' }}
                aria-label="directions"
              >
                Subscribe
              </Button>
            </Paper>
            <Typography sx={{ color : '#737373', lineHeight: '28px', fontSize: '12px'}}>
              Lore imp sum dolor Amit
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box component={'section'} bgcolor={'#FAFAFA'}>
        <Stack maxWidth={{ sm: "720px", md: "1148px" }} mx={'auto'} px={{ xs: '2rem', md: '1rem' }} py={'25px'}>
          <Typography variant="subtitle1" align="left">
            Made With Love By Finland All Rights Reserved
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;