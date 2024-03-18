'use client'
import { Box, Stack, Typography, Tabs, Tab, useMediaQuery, useTheme } from '@mui/material'
import { Product } from '@/types'
import { useState } from 'react';
import { CONSTANT } from '@/utils/constants';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  product: Product
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const DescriptionTabPanel = (props: TabPanelProps) => {
  const { children, value, index, product, ...other } = props;
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} py={5} gap={4}>
          <Stack gap={3.75} maxWidth={{xs: '100%', md: 512}}>
            <Typography variant='h5' color={'secGray.main'}>{CONSTANT.TEXT.TEMP.TITLE}</Typography>
            <Typography variant='h6' color={'secGray.light'} sx={{ fontWeight: 400 }}>{CONSTANT.TEXT.TEMP.DESCRIPTION}</Typography>
            <Typography variant='h6' color={'secGray.light'} sx={{ fontWeight: 400, borderLeft: '3px solid #23856D', paddingLeft: '14px' }}>{CONSTANT.TEXT.TEMP.DESCRIPTION}</Typography>
            <Typography variant='h6' color={'secGray.light'} sx={{ fontWeight: 400 }}>{CONSTANT.TEXT.TEMP.DESCRIPTION}</Typography>
          </Stack>
          <Box
            borderRadius={'10px'}
            width={'100%'}
            maxWidth={412}
            height={isMobile ? 278 : 412}
            sx={{
              backgroundImage: `url('${product.thumbnail}')`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}  >
          </Box>
        </Stack>
      )}
    </div>
  );
}


const Description = ({ product }: { product: Product }) => {

  const [index, setIndex] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setIndex(newValue);
  };

  return (
    <>
      <Stack justifyContent={'space-between'}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={index} onChange={handleChange} centered aria-label="product description tabs">
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Additional Information" {...a11yProps(1)} />
            <Tab label="Reviews (0)" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <DescriptionTabPanel value={index} product={product} index={0} />
        <DescriptionTabPanel value={index} product={product} index={1} />
        <DescriptionTabPanel value={index} product={product} index={2} />
      </Stack>
    </>
  )
}

export default Description
