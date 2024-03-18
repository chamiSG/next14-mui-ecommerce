'use client'
import dynamic from 'next/dynamic'
import { Box, Stack, Typography, Divider, Rating, Chip, Button, Snackbar, Alert } from '@mui/material'
import { StyledRoundedIconButton } from '@/theme/styled';
import { LineItem, Product } from '@/types'
import { formartPrice } from '@/utils'
import { CONSTANT } from '@/utils/constants'
import { useCartStateManager } from "@/state/cart/hooks";
import { useState } from 'react';
import { useWishlistStateManager } from '@/state/wishlist/hooks';

const CartIcon = dynamic(() => import('@/assets/icons/cart.svg'))
const WishlistIcon = dynamic(() => import('@/assets/icons/wishlist.svg'))
const EyeIcon = dynamic(() => import('@/assets/icons/eye.svg'))

const BuyWidget = ({ product }: { product: Product }) => {
  const { checkAlreadyCart, addCartPreference } = useCartStateManager()
  const { checkAlreadyWishList, addWishListPreference } = useWishlistStateManager()
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState('');

  const preparelineItem = (product: Product): LineItem => {
    return {
      pId: product.id,
      name: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity: 1
    }
  } 

  const addCart = (product: Product) => {
    const lineItem = preparelineItem(product)
    addCartPreference(lineItem)
    setFlag('cart')
    setOpen(true)
  }

  const addWishlist = (product: Product) => {
    const lineItem = preparelineItem(product)
    addWishListPreference(lineItem)
    setFlag('wishlist')
    setOpen(true)
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Stack justifyContent={'space-between'}>
        <Stack mb={'118ox'} gap={2}>
          <Typography variant='h5' color={'secGray.light'} sx={{ fontWeight: 400 }}>{product.title}</Typography>
          <Box display={'flex'} gap={1}>
            <Rating name="read-only" value={product.rating} precision={0.1} readOnly />
            <Typography variant='h6' component={'p'} color={'secGray.light'}>10 Reviews</Typography>
          </Box>
          <Typography variant='h4' color={'secGray.main'}>{formartPrice(product.price)}</Typography>
          <Box display={'flex'} gap={1}>
            <Typography variant='h6' color={'secGray.light'}>{CONSTANT.TEXT.PRODUCT.AVAILABILITY}</Typography>
            <Typography variant='h6' color={'primary.main'}>{product.stock === 0 ? CONSTANT.TEXT.PRODUCT.OUT_STOCK : CONSTANT.TEXT.PRODUCT.IN_STOCK}</Typography>
          </Box>
        </Stack>
        <Box>
          <Divider />
          <Stack direction="row" spacing={1} mt={'30px'}>
            <Chip sx={{ width: '30px', height: '30px', bgcolor: "primary.main" }} />
            <Chip sx={{ width: '30px', height: '30px', bgcolor: "brand.light" }} />
            <Chip sx={{ width: '30px', height: '30px', bgcolor: "orange.main" }} />
            <Chip sx={{ width: '30px', height: '30px', bgcolor: "secGray.main" }} />
          </Stack>
          <Stack direction={{ xs: 'column', md: 'row' }} mt={'60px'} gap={3} alignItems={'center'}>
            <Button variant="contained">{CONSTANT.TEXT.BUTTON.SELECT_OPTION}</Button>
            <Stack direction="row" spacing={1.25}>
              <StyledRoundedIconButton aria-label="whishlist" color="primary" onClick={() => addWishlist(product)} disabled={checkAlreadyWishList(product.id)}>
                <WishlistIcon />
              </StyledRoundedIconButton>
              <StyledRoundedIconButton aria-label="whishlist" color="primary" onClick={() => addCart(product)} disabled={checkAlreadyCart(product.id)}>
                <CartIcon />
              </StyledRoundedIconButton>
              <StyledRoundedIconButton aria-label="whishlist" color="primary">
                <EyeIcon />
              </StyledRoundedIconButton>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Snackbar open={open} autoHideDuration={1000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} onClose={handleClose} >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {flag === 'cart' && CONSTANT.TEXT.ALERT.ADD_CART}
          {flag === 'wishlist' && CONSTANT.TEXT.ALERT.ADD_WISHLIST}
        </Alert>
      </Snackbar>
    </>
  )
}

export default BuyWidget
