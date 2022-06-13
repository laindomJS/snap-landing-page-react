import React from "react";
import { Flex, Image, Button } from '@chakra-ui/react';
import logo from '../../assets/logo.svg';
import Navigation from './Navigation';

export default function Navbar() {
  return (

    <Flex justifyContent="space-around" alignItems="center">

      <Image src={logo} w={140} />

      <Navigation />

      <Flex>

        <Button mr={10} variant="ghost" color="gray.600" fontWeight="semibold" _hover={ {color:"black"} }>
          Login
        </Button>

        <Button fontWeight="semibold" border="2px" borderRadius="10px" color="gray.600" bg="transparent" borderColor="gray.600" p={5} _hover={ {color:"black", borderColor:"black"} }>
          Register 
        </Button>
      
      </Flex>


    </Flex>

   
  )
}