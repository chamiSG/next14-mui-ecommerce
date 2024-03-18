'use client'
import { Box, ImageList, ImageListItem, ImageListItemBar, Typography, Link, useMediaQuery, useTheme } from '@mui/material'
import { bannerImageData } from '@/utils/data'
import { CONSTANT } from '@/utils/constants'
import Image from 'next/image'

const Banner = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <>
      <Box component={'section'} py={'80px'} maxWidth={{ sm: "720px", md: "1148px" }} marginX={"auto"} px={{xs: '2rem', md: '1rem'}}>
        <ImageList variant="quilted" cols={isMobile ? 1 : 4} rowHeight={300} gap={15}>
          {bannerImageData.map((item: any, i: number) => {
            return (
              <ImageListItem key={i} cols={isMobile ? 1 : item.cols} rows={isMobile ? 1 : item.rows}>
                <Image src={item.img} alt={item.title} loading="lazy" style={{width: '100%'}} />
                <ImageListItemBar
                  sx={{ background: 'transparent' }}
                  title={
                    <Box>
                      <Typography variant='h6' color={'brand.light'}>{`${item.quantity} Items`}</Typography>
                      <Typography variant={isMobile ? 'h4' : item.variant} color={'secGray.main'}>{item.title}</Typography>
                    </Box>
                  }
                  subtitle={<Link href="#" color={'secGray.main'}>{CONSTANT.TEXT.READ_MORE}</Link>}
                  position="top"
                  actionPosition="left"
                />
              </ImageListItem>
            )
          })}
        </ImageList>
      </Box>
    </>
  )
}

export default Banner
