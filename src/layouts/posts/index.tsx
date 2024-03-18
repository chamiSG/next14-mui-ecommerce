'use client'
import dynamic from 'next/dynamic'
import { Box, Grid, Stack, Typography, Link, Card, CardContent, CardMedia, SvgIcon, useTheme } from '@mui/material'
import { CONSTANT } from '@/utils/constants'
import { postsData } from '@/utils/data'
import { formatDate } from '@/utils'

const ClockIcon = dynamic(() => import('@/assets/icons/clock.svg'))
const ChartIcon = dynamic(() => import('@/assets/icons/chart.svg'))
const ArrowLeftIcon = dynamic(() => import('@/assets/icons/arrow-left.svg'))


const Posts = () => {
  const theme = useTheme()

  return (
    <>
      <Box component={'section'} maxWidth={{ sm: "720px", md: "1148px" }} marginX={"auto"} px={{xs: '2rem', md: '1rem'}} py={'80px'}>
        <Stack gap={1.25} textAlign={'center'} mb={3}>
          <Typography variant='h6' color={'primary.light'} sx={{ fontWeight: 400 }}>{CONSTANT.TEXT.FEATURED_POSTS_SUBTITLE}</Typography>
          <Typography variant='h4' color={'secGray.main'}>{CONSTANT.TEXT.FEATURED_POSTS}</Typography>
        </Stack>
        <Grid container columns={{ xs: 1, md: 3 }} gap={1.25} justifyContent={'center'} alignItems={'center'} py={{ xs: 3, md: 4 }}>
          {postsData.map((item: any, i: number) => (
            <Card key={i} sx={{ maxWidth: { xs: '100%', md: 348 }, width: '100%', boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.1)" }}>
              <CardMedia
                sx={{ height: 300 }}
                image={item.img}
                title={item.title}
              />
              <CardContent sx={{ textAlign: 'start', py: 3 }}>
                <Typography variant="h5" fontWeight={400} mb={1.25} color={'secGray.main'} >
                  {item.title}
                </Typography>
                <Typography variant="h6" fontWeight={400} color={'secGray.light'} mb={1.25}>
                  {item.subtitle}
                </Typography>
                <Box display="flex" justifyContent={'space-between'} mb={2}>
                  <Box display={'flex'} gap={0.5} alignItems={'center'}>
                    <SvgIcon viewBox="0 0 16 16" color='primary' sx={{ fontSize: "0.75rem", fill: theme.palette.primary.light }}>
                      <ClockIcon />
                    </SvgIcon>
                    <Typography component="p" fontSize={'0.75rem'} fontWeight={400} color={'secGray.light'} >
                      {formatDate(item.date)}
                    </Typography>
                  </Box>
                  <Box display={'flex'} gap={0.5} alignItems={'center'}>
                    <SvgIcon viewBox="0 0 16 16" color='primary' sx={{ fontSize: "0.75rem", fill: theme.palette.brand.main }}>
                      <ChartIcon />
                    </SvgIcon>
                    <Typography component="p" fontSize={'0.75rem'} fontWeight={400} color={'secGray.light'} >
                    {item.comment} comments
                    </Typography>
                  </Box>
                </Box>

                <Link href="#">
                  <Typography variant="h6" color={'secGray.light'}>
                    {CONSTANT.TEXT.LERN_MORE}
                  </Typography>
                  <SvgIcon viewBox="0 0 16 16" color='primary' sx={{ fontSize: "1rem", fontWeight: "bold", fill: "#23A6F0" }}>
                    <ArrowLeftIcon />
                  </SvgIcon>
                </Link>

              </CardContent>
            </Card>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Posts
