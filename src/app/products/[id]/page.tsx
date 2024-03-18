import { getProductById, getProducts } from "@/utils/apis";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Box, Link, Stack } from '@mui/material'
import { FaAws, FaHooli, FaLyft, FaPiedPiperHat, FaRedditAlien, FaStripe } from "react-icons/fa";

const Layout = dynamic(() => import('@/layouts'))
const Breacrumbs = dynamic(() => import('@/components/breadcrumb'))
const Products = dynamic(() => import('@/layouts/product'))
const Footer = dynamic(() => import('@/layouts/footer'))
const BuyWidget = dynamic(() => import('@/components/product/buy-widget'))
const ProductCarousel = dynamic(() => import('@/components/product/carousel'))
const ProductDescription = dynamic(() => import('@/components/product/description'))

export default async function ProductDetail({
  params: { id },
}: {
  params: { id: string }
}) {
  const { products, total } = await getProducts(0, 15)
  const product = await getProductById(id)

  return (
    <Layout active="shop">
      <>
        <Box component={'section'} bgcolor={'#FAFAFA'}>
          <Stack maxWidth={{ sm: "720px", md: "1148px" }} mx={'auto'} px={{ xs: '2rem', md: '1rem' }} >
            <Breacrumbs page='shop' />
            <Stack direction={{ xs: 'column', md: 'row' }} width={"100%"} gap={10} mb={5}>
              <ProductCarousel data={product?.images} />
              <BuyWidget product={product} />
            </Stack>
          </Stack>
        </Box>
        <Box component={'section'}>
          <Stack maxWidth={{ sm: "720px", md: "1148px" }} mx={'auto'} px={{ xs: '2rem', md: '1rem' }} >
            <ProductDescription product={product} />
          </Stack>
        </Box>
        <Suspense fallback={<div>Loading...</div>}>
          <Products initialProducts={products} total={total} skip={15} />
        </Suspense>
        <Box component={'section'} bgcolor={'#FAFAFA'}>
          <Stack maxWidth={{ sm: "720px", md: "1148px" }} mx={'auto'} px={{ xs: '2rem', md: '1rem' }} py={'80px'} >
            <Stack direction={{ xs: 'column', md: 'row' }} gap={3} justifyContent={'space-between'} alignItems={'center'}>
              <Link href="#" sx={{fontSize:'6rem'}} color="secGray.light">
                <FaHooli />
              </Link>
              <Link href="#" sx={{fontSize:'6rem'}} color="secGray.light">
                <FaLyft />
              </Link>
              <Link href="#" sx={{fontSize:'6rem'}} color="secGray.light">
                <FaPiedPiperHat />
              </Link>
              <Link href="#" sx={{fontSize:'6rem'}} color="secGray.light">
                <FaStripe />
              </Link>
              <Link href="#" sx={{fontSize:'6rem'}} color="secGray.light">
                <FaAws />
              </Link>
              <Link href="#" sx={{fontSize:'6rem'}} color="secGray.light">
                <FaRedditAlien />
              </Link>
            </Stack>
          </Stack>
        </Box>
        <Footer />
      </>
    </Layout>
  );
}

export async function generateMetadata(
  { params: { id } }: {
    params: { id: string }
  }): Promise<Metadata> {
  const product = await getProductById(id)
  return {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} | ${product.title}`,
  }
}

