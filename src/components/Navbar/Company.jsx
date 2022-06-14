import React from 'react';
import { Menu, MenuList, MenuButton, MenuItem, Icon } from '@chakra-ui/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';


export default function Company() {
  return(
    <Menu isLazy="true">
      {({ isOpen }) => (

      <>
        <MenuButton color="gray.600" fontWeight="semibold" _hover={ {color:"black", cursor:"pointer"}}>Features <Icon pt={1} as={isOpen ? FaAngleUp : FaAngleDown}/> </MenuButton>
          <MenuList>
            <MenuItem color="gray.600" fontWeight="semibold" _hover={ {color:"black", cursor:"pointer"}}>History</MenuItem>
            <MenuItem color="gray.600" fontWeight="semibold" _hover={ {color:"black", cursor:"pointer"}}>Our Team</MenuItem>
            <MenuItem color="gray.600" fontWeight="semibold" _hover={ {color:"black", cursor:"pointer"}}>Blog</MenuItem>
          </MenuList>
      </>

    )}
    
    </Menu>
  )
}
