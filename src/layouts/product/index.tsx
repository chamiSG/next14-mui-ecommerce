'use client'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { Box, Grid, Stack, Typography, Divider } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { CONSTANT } from '@/utils/constants'
import { useState } from 'react'
import { Product } from '@/types'
import { getProducts } from '@/utils/apis'

const ProductCard = dynamic(() => import('@/components/product/card'))

const limit = 30

const Products = ({ initialProducts, total, skip }: { initialProducts: Product[], total: number, skip: number }) => {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadMore, setIsLoadMore] = useState(true)
  const [offset, setOffset] = useState(skip)
  const [products, setProducts] = useState<Product[]>(initialProducts)

  const loadMore = async () => {
    setIsLoading(true)

    if (offset > total) {
      setIsLoadMore(false)
      setIsLoading(false)
      return
    }
    const result = await getProducts(offset, limit)
    setProducts([...products, ...result.products])
    setOffset(offset + limit)
    setIsLoading(false)
  }

  return (
    <>
      <Box component={'section'} maxWidth={{ sm: "720px", md: "1148px" }} marginX={"auto"} px={{ xs: '2rem', md: '1rem' }} py={'80px'}>
        {pathname === "/" ? (
          <Stack gap={1.25} textAlign={'center'} mb={3}>
            <Typography variant='h5' color={'secGray.light'} sx={{ fontWeight: 400 }}>{CONSTANT.TEXT.FEATURED_PRODUCTS}</Typography>
            <Typography variant='h4' color={'secGray.main'}>{CONSTANT.TEXT.BESTSELLER_PRODUCTS}</Typography>
            <Typography variant='h6' color={'secGray.light'} sx={{ fontWeight: 400 }}>{CONSTANT.TEXT.BESTSELLER_PRODUCTS_SUBTITLE}</Typography>
          </Stack>
        ) : (
          <Box px={{ xs: 3, md: 4 }} >
            <Stack gap={1.25} mb={3}>
              <Typography variant='h4' color={'secGray.main'}>{CONSTANT.TEXT.BESTSELLER_PRODUCTS}</Typography>
            </Stack>
            <Divider />
          </Box>
        )}
        <Grid container columns={{ xs: 1, md: 5 }} gap={3.75} justifyContent={'center'} p={{ xs: 3, md: 4 }}>
          {products?.map((product: any, i: number) => <ProductCard key={i} data={product} />)}
        </Grid>
        {isLoadMore && pathname === "/" &&
          <Box display={'flex'} justifyContent={'center'}>
            <LoadingButton loading={isLoading} variant="outlined" onClick={loadMore}>
              {CONSTANT.TEXT.LOAD_MORE_PRODUCTS}
            </LoadingButton>
          </Box>
        }
      </Box>
    </>
  )
}

export default Products
