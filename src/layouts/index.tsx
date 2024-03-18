'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { LayoutProps } from '@/types';
import { Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const Header = dynamic(() => import('./header'))

const drawerHeight = 329
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginTop: 0,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginTop: `${drawerHeight}px`,
  }),
}));


const Layout = (props: LayoutProps) => {
  const { children, active } = props
  const theme = useTheme()
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(prevState => !prevState);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > theme.breakpoints.values.md)
        setOpen(false)
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
      <div id='root'>
        <Header active={active} open={open} toggle={toggleDrawer} /> 
        <Main open={open}>
          <Box>
            {children}
          </Box>
        </Main>
      </div>
    </>
  );
};

export default Layout;


