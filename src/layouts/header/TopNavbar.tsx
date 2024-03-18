import { Stack, Box, Link, Typography, SvgIcon } from '@mui/material';
import { CONSTANT } from '@/utils/constants';
import PhoneIcon from '@/assets/icons/phone.svg';
import EmailIcon from '@/assets/icons/email.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import YoutubeIcon from '@/assets/icons/youtube.svg';
import FacebookIcon from '@/assets/icons/facebook.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';

const TopNavbar = () => {
  const socialLinks = [
    { href: "https://www.instagram.com/", icon: <InstagramIcon /> },
    { href: "https://www.youtube.com/", icon: <YoutubeIcon /> },
    { href: "https://www.facebook.com/", icon: <FacebookIcon /> },
    { href: "https://twitter.com/", icon: <TwitterIcon /> }
  ]

  return (
    <Stack height={"58px"} direction="row" bgcolor={'brand.main'} color={'white'} display={{xs: 'none', md: "flex"}}>
      <Stack direction="row" alignItems="center" justifyContent={'space-between'} px={'1rem'} width={"100%"} maxWidth={{ sm: "720px", md: "1148px" }} marginX={"auto"} marginY={0}>
        <Stack direction="row" spacing={3.5}>
          <Link href="#" underline="none" color={"white"}>
            <SvgIcon viewBox="0 0 16 16" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
              <PhoneIcon />
            </SvgIcon>
            {CONSTANT.TEXT.HEADERS.PHONE_NUMBER}
          </Link>

          <Link href="#" underline="none" color={"white"}>
            <SvgIcon viewBox="0 0 16 16" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
              <EmailIcon />
            </SvgIcon>
            {CONSTANT.TEXT.HEADERS.EMAIL}
          </Link>
        </Stack>
        <Box>
          <Typography variant="h6">{CONSTANT.TEXT.HEADERS.FOLLOW_US.DESCRIPTION}</Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Typography variant="h6">{CONSTANT.TEXT.HEADERS.FOLLOW_US.TITLE} :</Typography>
          {socialLinks.map((item: any, i: number) => (
            <Link key={i} href={item.href} underline="none" color={"white"} target="_blank" rel="noopener">
              <SvgIcon viewBox="0 0 16 16" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                {item.icon}
              </SvgIcon>
            </Link>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
export default TopNavbar;