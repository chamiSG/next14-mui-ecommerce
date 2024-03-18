'use client'

import { IconButton, styled } from '@mui/material'

export const StyledRoundedIconButton = styled(IconButton)({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  fill: '#252B42',
  border: '1px solid #737373',
  width: '40px',
  height: '40px',

  '&:disabled': {
    backgroundColor: 'rgba(239, 239, 239, 0.3)',
    color: 'rgba(16, 16, 16, 0.3)',
    fill: 'rgba(16, 16, 16, 0.3)',
    borderColor: 'rgba(118, 118, 118, 0.3)',
  },
})
