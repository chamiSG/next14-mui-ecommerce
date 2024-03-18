'use client'
import React from 'react';
import dynamic from 'next/dynamic'
import { AppBar, Toolbar } from '@mui/material';

const TopNavbar = dynamic(() => import('./TopNavbar'))
const Navbar = dynamic(() => import('./Navbar'))

const Header = ({ active, open, toggle }: { active: string, open: boolean, toggle: () => void }) => {
  return (
    <AppBar position="relative">
      <TopNavbar />
      <Toolbar>
        <Navbar active={active} open={open} toggle={toggle} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;