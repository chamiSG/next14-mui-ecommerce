'use client'
import { Box, Stack, Typography, ImageList, ImageListItem, useMediaQuery, useTheme, Avatar, Rating } from '@mui/material'
import { CONSTANT } from '@/utils/constants'
import { imageData } from '@/utils/data'

const AboutUs = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Box component={'section'} maxWidth={{ sm: "720px", md: "1148px" }} marginX={"auto"} px={{xs: '2rem', md: '1rem'}} py={'80px'}>
      <Stack direction={{ xs: 'column', md: 'row' }} gap={10} alignItems={'center'} justifyContent={'center'}>
        <Stack gap={3} textAlign={'center'}>
          <Typography variant='h4' color={'secGray.main'}>{CONSTANT.TEXT.ABOUT_US}</Typography>
          <Stack gap={2.5} alignItems={'center'} py={3.75} px={5}>
            <Avatar alt="Cindy Baker" src="/assets/images/avatar/1.jpg" sx={{ width: 90, height: 90 }} />
            <Rating name="read-only" value={4} readOnly />
            <Typography variant='h6' color={'secGray.light'} sx={{ fontWeight: 400 }}>{CONSTANT.TEXT.TESTIMONIAL_CONTENT}</Typography>
            <Box>
              <Typography variant='h6' color={'primary.light'}>Regina Miles</Typography>
              <Typography variant='h6' color={'secGray.main'}>Designer</Typography>
            </Box>
          </Stack>
        </Stack>
        <Box maxWidth={isMobile ? 366 : 456}>
          <ImageList variant="quilted" cols={3} rowHeight={isMobile ? 112 : 142} gap={15}>
            {imageData.map((item: any, i: number) => {
              return (
                <ImageListItem key={i}>
                  <img src={item.img} alt={item.title} loading="lazy" />
                </ImageListItem>
              )
            })}
          </ImageList>
        </Box>
      </Stack>
    </Box>
  )
}

export default AboutUs
