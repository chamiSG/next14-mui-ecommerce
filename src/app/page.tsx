import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Box, Button, Stack, Typography } from '@mui/material'
import { getProducts } from "@/utils/apis";
import { CONSTANT } from "@/utils/constants";

const Layout = dynamic(() => import('@/layouts'))
const Banner = dynamic(() => import('@/layouts/banner'))
const Products = dynamic(() => import('@/layouts/product'))
const Service = dynamic(() => import('@/layouts/service'))
const Posts = dynamic(() => import('@/layouts/posts'))
const AboutUs = dynamic(() => import('@/layouts/about-us'))
const Footer = dynamic(() => import('@/layouts/footer'))

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Home`,
};

export default async function Home() {
  const { products, total } = await getProducts(0, 15)

  return (
    <Layout active="home">
      <>
        <Banner />
        <Suspense fallback={<div>Loading...</div>}>
          <Products initialProducts={products} total={total} skip={15} />
        </Suspense>
        <Service />
        <Posts />
        <AboutUs />

        <Box component={'section'} pt={'80px'} sx={{backgroundImage: `url('/assets/images/bg.jpg')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <Stack gap={3.75} textAlign={'center'} maxWidth={{xs: '100%', md: '600px'}} mx={'auto'} py={'80px'} px={{xs: '2rem'}}>
            <Typography variant='h6' color={'primary.main'}>{CONSTANT.TEXT.DESIGIN_EXPERIENCE}</Typography>
            <Typography variant='h2' color={'secGray.main'}>{CONSTANT.TEXT.PROBLEMS_TRYING}</Typography>
            <Typography variant='h6' color={'secGray.light'} sx={{ fontWeight: 400 }}>{CONSTANT.TEXT.PROBLEMS_TRYING_SUB}</Typography>
            <Typography variant='h4' color={'brand.main'}>$16.48</Typography>
            <Stack alignItems={'center'}>
              <Button variant="contained">{CONSTANT.TEXT.BUTTON.ADD_CALL}</Button>
            </Stack>
          </Stack>
        </Box>
        <Footer />
      </>
    </Layout>

  );
}
