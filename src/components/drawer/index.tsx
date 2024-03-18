'use client'
import { Drawer } from '@mui/material'
import { useModal } from '@/state/modal/hooks';
import drawers from "@/components/drawer/drawers"



const RootDrawer = () => {
  const { open, id, anchor, closeModal } = useModal()
  const DrawerComponent = drawers[id];

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={closeModal}
    >
      {typeof DrawerComponent === "function" && <DrawerComponent />}
    </Drawer>
  )
}

export default RootDrawer
