'use client'
import { Stack, Typography, SvgIcon, useTheme } from '@mui/material'
import { ServiceCardType } from '@/types';

const ServiceCard = ({title, subtitle, icon}: ServiceCardType) => {
  const theme = useTheme()

  return (
      <Stack gap={2.5} justifyContent={'center'} alignItems={'center'} textAlign={'center'} py={4} px={2} maxWidth={'315px'}>
        <SvgIcon viewBox="0 0 72 72" color='primary' sx={{ fontSize: "72px", fontWeight: "bold", fill: theme.palette.primary.main }}>
          {icon}
        </SvgIcon>
        <Typography component="p" fontSize={'1rem'} fontWeight={700} color={'secGray.light'} >
          {title}
        </Typography>
        <Typography component="p" fontSize={'1rem'} fontWeight={700} color={'secGray.light'} >
          {subtitle}
        </Typography>
      </Stack>
  )
}

export default ServiceCard
