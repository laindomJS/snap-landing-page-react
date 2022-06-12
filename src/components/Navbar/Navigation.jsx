import React from "react";
import { Breadcrumb, BreadcrumbItem, Text, Icon} from '@chakra-ui/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

export default function Navigation() {
  return (
    <Breadcrumb separator="  ">

    <BreadcrumbItem mr={8}>
      <Text display="flex" alignItems="center" color="gray.600" fontWeight="semibold" _hover={ {color:"black", cursor:"pointer"} }>Features <Icon ml={2} as={FaAngleDown}/> </Text>
    </BreadcrumbItem>

    <BreadcrumbItem mr={8}>
      <Text color="gray.600" display="flex" alignItems="center" fontWeight="semibold" _hover={ {color:"black", cursor:"pointer"} }>Company <Icon ml={2} as={FaAngleDown}/> </Text>
    </BreadcrumbItem>

    <BreadcrumbItem mr={8}>
      <Text color="gray.600" fontWeight="semibold" _hover={ {color:"black", cursor:"pointer"} }>Careers</Text>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <Text color="gray.600" fontWeight="semibold" _hover={ {color:"black", cursor:"pointer"} }>About</Text>
    </BreadcrumbItem>

    </Breadcrumb>
  )
}