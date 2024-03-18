'use client'
import { Stack, Box, Link, Typography, SvgIcon, Drawer, List, ListItem } from '@mui/material';
import { CONSTANT } from '@/utils/constants';
import { getActiveRouteColor } from '@/utils';
import { PageType } from '@/types';
import { useModal } from '@/state/modal/hooks';

import UserIcon from '@/assets/icons/user.svg';
import SearchIcon from '@/assets/icons/search.svg';
import CartIcon from '@/assets/icons/cart.svg';
import WishlistIcon from '@/assets/icons/wishlist.svg';
import MenuIcon from '@/assets/icons/menu.svg';
import { useCartStateManager } from '@/state/cart/hooks';
import { useWishlistStateManager } from '@/state/wishlist/hooks';

const MainNavBar = ({ pages, active, toggle }: { pages: PageType[], active: string, toggle: () => void }) => {
  const { openModal } = useModal()
  const { total: cartTotal } = useCartStateManager()
  const { total: wishlistTotal } = useWishlistStateManager()

  return (
    <Stack direction="row" alignItems="center" justifyContent={'space-between'} px={'1rem'} my={{ xs: 3, md: 0 }} width={"100%"} maxWidth={{ sm: "720px", md: "1148px" }} marginX={"auto"} marginY={0}>
      <Typography variant="h4" noWrap component="a" href="/" color={'secGray.main'}>
        {CONSTANT.TEXT.LOGO}
      </Typography>
      <Box display={"flex"} alignItems="center" justifyContent={'space-between'} gap={{ sm: 16, md: 25 }} >
        <Box display={{ xs: "none", md: "flex" }} gap={2.5}>
          {pages.map((page: any, i: number) => (
            <Link key={i} href={page.href} color={getActiveRouteColor(active, page.name)}>
              {page.name}
            </Link>
          ))}
        </Box>
        <Box display="flex" gap={2.5}>
          <Link href="#" display={{ xs: "none", md: "flex" }}>
            <SvgIcon viewBox="0 0 16 16" color='primary' sx={{ fontSize: "1rem", fontWeight: "bold", cursor: 'pointer', fill: "#23A6F0" }}>
              <UserIcon />
            </SvgIcon>
            {CONSTANT.TEXT.HEADERS.LOGIN_REGISTER}
          </Link>

          <Link>
            <SvgIcon viewBox="0 0 16 16" sx={{ fontSize: { xs: "1.25rem", md: "1rem" }, fontWeight: "bold", cursor: 'pointer', fill: { xs: "#737373", md: "#23A6F0" } }}>
              <SearchIcon />
            </SvgIcon>
          </Link>
          <Link>
            <SvgIcon
              viewBox="0 0 16 16"
              sx={{ fontSize: { xs: "1.25rem", md: "1rem" }, fontWeight: "bold", cursor: 'pointer', fill: { xs: "#737373", md: "#23A6F0" } }}
              onClick={() => openModal({ id: "CART_DRAWER" })}
            >
              <CartIcon />
            </SvgIcon>
            {cartTotal === 0 ? '' : cartTotal}
          </Link>
          <Link>
            <SvgIcon
              viewBox="0 0 16 16"
              sx={{ fontSize: { xs: "1.25rem", md: "1rem" }, fontWeight: "bold", cursor: 'pointer', fill: { xs: "#737373", md: "#23A6F0" } }}
              onClick={() => openModal({ id: "WISHLIST_DRAWER" })}>
              <WishlistIcon />
            </SvgIcon>
            {wishlistTotal === 0 ? '' : wishlistTotal}
          </Link>
          {/* NavMenu icon */}
          <Link onClick={toggle} display={{ xs: "flex", md: "none" }}>
            <SvgIcon viewBox="0 0 16 16" sx={{ fontSize: { xs: "1.25rem", md: "1rem" }, fontWeight: "bold" }}>
              <MenuIcon />
            </SvgIcon>
          </Link>
        </Box>
      </Box>

    </Stack>
  )
}

const Navbar = ({ active, open, toggle }: { active: string, open: boolean, toggle: () => void }) => {

  const pageLinks: PageType[] = [
    { href: "/", name: "Home" },
    { href: "/shop", name: "Shop" },
    { href: "/about", name: "About" },
    { href: "/blog", name: "Blog" },
    { href: "/contacts", name: "Contacts" },
    { href: "/pages", name: "Pages" },
  ]

  return (
    <>
      <Box width={"100%"}>
        {!open && <MainNavBar pages={pageLinks} active={active} toggle={toggle} />}

        <Drawer anchor='top' variant="persistent" open={open} onClose={toggle}>
          <Box px={3}>
            <MainNavBar pages={pageLinks} active={active} toggle={toggle} />
            <List>
              {pageLinks.map((page: PageType, i: number) => (
                <ListItem key={i} sx={{ justifyContent: 'center' }} >
                  <Link href={page.href} color={getActiveRouteColor(active, page.name)} sx={{ fontSize: '1.5rem', fontWeight: 500 }}>
                    {page.name}
                  </Link>
                </ListItem>
              ))}
              <ListItem sx={{ justifyContent: 'center' }} >
                <Link href="#" sx={{ fontSize: '1.5rem', fontWeight: 500 }}>
                  <SvgIcon viewBox="0 0 16 16" color='primary' sx={{ fontSize: "1.5rem", fill: "#23A6F0" }}>
                    <UserIcon />
                  </SvgIcon>
                  {CONSTANT.TEXT.HEADERS.LOGIN_REGISTER}
                </Link>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>


    </>
  );
};

export default Navbar;