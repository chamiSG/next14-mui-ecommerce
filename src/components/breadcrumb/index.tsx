'use client'
import { Stack, Breadcrumbs, Link } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Breadcrumb = ({ page }: { page: string }) => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link underline="hover" key="1" color="inherit" textTransform={'capitalize'} href={`/${page}`}>
      {page}
    </Link>,
  ];

  return (
    <Stack py={'34px'} justifyContent={'center'}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{minHeight: '44px', display: 'flex', alignItems: 'center'}}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  )
}

export default Breadcrumb
