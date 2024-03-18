'use client'
import { Box, Card, CardContent, CardMedia, Typography, Link } from '@mui/material'

const ProductCard = ({ data }: { data: any }) => {
  return (
    <Card sx={{ maxWidth: { xs: '100%', md: 184 }, width: '100%' }}>
      <Link href={`/products/${data.id}`} sx={{ display: 'block' }}>
        <CardMedia
          sx={{ height: 236 }}
          image={data.thumbnail}
          title={data.title}
        />
        <CardContent sx={{ textAlign: 'center', py: 3 }}>
          <Typography component="p" fontSize={'1rem'} fontWeight={700} mb={1.25} color={'secGray.main'} >
            {data.title}
          </Typography>
          <Typography variant="h6" color={'secGray.light'} textTransform={'capitalize'} mb={1.25}>
            {data.category}
          </Typography>
          <Box display="flex" gap={0.5} justifyContent={'center'} mb={1.25}>
            <Typography component="p" fontSize={'1rem'} fontWeight={700} color={'secGray.light'} >
              ${data.price}
            </Typography>
            <Typography component="p" fontSize={'1rem'} fontWeight={700} color={'brand.main'} >
              ${data.price}
            </Typography>
          </Box>

        </CardContent>
      </Link>
    </Card>
  )
}

export default ProductCard
