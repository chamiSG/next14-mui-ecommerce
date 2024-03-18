'use client'
import dynamic from 'next/dynamic'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { CONSTANT } from '@/utils/constants'

const StudentIcon = dynamic(() => import('@/assets/icons/student.svg'))
const BookIcon = dynamic(() => import('@/assets/icons/book.svg'))
const GrowIcon = dynamic(() => import('@/assets/icons/grow.svg'))
const ServiceCard = dynamic(() => import('@/components/service-card'))

export const serviceData = [
  {
    title: "Easy Wins",
    subtitle: "Get your best looking smile now!",
    icon: <StudentIcon />,
  },
  {
    title: "Concrete",
    subtitle: "Defalcate is most focused in helping you discover your most beautiful smile",
    icon: <BookIcon />,
  },
  {
    title: "Hack Growth",
    subtitle: "Overcame any hurdle or any other problem.",
    icon: <GrowIcon />,
  },
];

const Service = () => {
  return (
    <>
      <Box component={'section'} maxWidth={{ sm: "720px", md: "1148px" }} marginX={"auto"} px={{xs: '2rem', md: '1rem'}} py={'80px'}>
        <Stack gap={1.25} textAlign={'center'} mb={3}>
          <Typography variant='h5' color={'secGray.light'} sx={{ fontWeight: 400 }}>{CONSTANT.TEXT.FEATURED_SERVICE}</Typography>
          <Typography variant='h4' color={'secGray.main'}>{CONSTANT.TEXT.BESTSELLER_SERVICE}</Typography>
          <Typography variant='h6' color={'secGray.light'} sx={{ fontWeight: 400 }}>{CONSTANT.TEXT.BESTSELLER_SERVICE_SUBTITLE}</Typography>
        </Stack>
        <Grid container columns={{ xs: 1, md: 5 }} gap={3.75} justifyContent={'center'} alignItems={'center'} p={{ xs: 3, md: 4 }}>
          {serviceData.map((item: any, i: number) => (
            <ServiceCard key={i} title={item.title} subtitle={item.subtitle} icon={item.icon} />
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Service
