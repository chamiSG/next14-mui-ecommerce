'use client'
import { useModal } from '@/state/modal/hooks'
import { useWishlistStateManager } from '@/state/wishlist/hooks'
import { LineItem } from '@/types'
import { formartPrice } from '@/utils'
import { Alert, Avatar, Box, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack, TextField, Typography } from '@mui/material'
import { FiX } from 'react-icons/fi'

const WishListDrawer = () => {
  const { lineItems, removeWishlist } = useWishlistStateManager()
  const { closeModal } = useModal()

  return (
    <Box p={3}>
      <Stack gap={3}>
        <Stack direction={'row'} gap={3} alignItems={'center'} justifyContent={'space-between'}>
          <Typography variant='h5' color={'secGray.main'}>Wishlist</Typography>
          <Stack direction={'row'} gap={3} alignItems={'center'}>
            <Typography variant='h6' color={'secGray.main'}>{`${lineItems.length} items`}</Typography>
            <IconButton aria-label="delete" sx={{ fontSize: '16px', borderRadius: '4px', p: 1 }} onClick={closeModal}>
              <FiX />
            </IconButton>
          </Stack>
        </Stack>
        {lineItems.length === 0 ? (
          <Alert severity="info">Your wishlist is empty</Alert>
        ) : (
          <List sx={{ width: '100%', minWidth: 360, maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {lineItems?.map((item: LineItem) => (
              <ListItem key={item.pId} sx={{ borderWidth: 1, borderStyle: 'solid', borderColor: "#e2e2e2", borderRadius: '8px', gap: 3, p: 1, alignItems: 'flex-start' }}>
                <ListItemAvatar>
                  <Avatar alt={item.name} src={item.thumbnail} sx={{ width: '72px', height: "72px", borderRadius: '8px' }} />
                </ListItemAvatar>
                <Stack direction={'row'} gap={3} justifyContent={'space-between'} width={'100%'}>
                  <ListItemText primary={item.name} secondary={`Price: ${formartPrice(item.price)}`} />
                  <Box>
                    <IconButton aria-label="delete" sx={{ fontSize: '16px', borderRadius: '4px', p: 1 }} onClick={() => removeWishlist(item.pId)}>
                      <FiX />
                    </IconButton>
                  </Box>
                </Stack>
              </ListItem>
            ))}
          </List>
        )}
      </Stack>
    </Box>
  )
}

export default WishListDrawer
