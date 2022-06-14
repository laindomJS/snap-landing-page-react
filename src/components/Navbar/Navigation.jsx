import React from "react";
import { Breadcrumb, BreadcrumbItem, Text} from '@chakra-ui/react';
import Features from './Features';
import Company from './Company';

export default function Navigation() {
  return (
    <Breadcrumb separator=" ">

    <BreadcrumbItem mr={8}>
      <Features />
    </BreadcrumbItem>

    <BreadcrumbItem mr={8}>
      <Company />
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