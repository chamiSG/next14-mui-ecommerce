'use client'
import { useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'

const ProductCarousel = ({ data }: { data: any }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Carousel autoPlay={false} animation="slide" navButtonsAlwaysVisible={true} sx={{ width: {xs: '100%', md: 450}, height: {xs: '278px', md: 450} }} fullHeightHover={false} indicators={false}>
      {data?.map((item: any, i: number) =>
        <Image
          key={i}
          style={{width: isMobile ? '100%' : 450}}
          width={450}
          height={isMobile ? 278 : 450}
          src={item} 
          alt={`products_${i}`}
        />
      )}
    </Carousel>
  )
}

export default ProductCarousel
