import dynamic from "next/dynamic"
const CartDrawer = dynamic(() => import("./cart-drawer"))
const WishlistDrawer = dynamic(() => import("./wishlist-drawer"))

const drawers: any = {
  CART_DRAWER: CartDrawer,
  WISHLIST_DRAWER: WishlistDrawer,
}

export default drawers
