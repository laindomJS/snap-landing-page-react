import React from 'react';
import { Menu, MenuList, MenuButton, MenuItem, Icon } from '@chakra-ui/react';
import { FaAngleDown, FaAngleUp, FaCalendar, FaList, FaBell, FaClock } from 'react-icons/fa';


export default function Features() {
  return(
    <Menu isLazy="true">
      {({ isOpen }) => (
        <>
          <MenuButton color="gray.600" fontWeight="semibold" _hover={ {color:"black", cursor:"pointer"}}>Features <Icon pt={1} as={isOpen ? FaAngleUp : FaAngleDown} /> </MenuButton>
          <MenuList>
            <MenuItem fontSize={17} fontWeight="semibold" color="gray.600"> <Icon mr={3} color="purple.600" as={FaList}/> Todo List</MenuItem>
            <MenuItem fontSize={17} fontWeight="semibold" color="gray.600"> <Icon mr={3} color="teal.300" as={FaCalendar} /> Calendar</MenuItem>
            <MenuItem fontSize={17} fontWeight="semibold" color="gray.600"> <Icon mr={3} color="yellow.400" as={FaBell} /> Reminders</MenuItem>
            <MenuItem fontSize={17} fontWeight="semibold" color="gray.600"> <Icon mr={3} color="purple.700" as={FaClock}/> Planning</MenuItem>
          </MenuList>
        </>
      )}
  
    </Menu>
  )
}