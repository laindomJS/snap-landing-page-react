import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import TextHeader from './TextHeader';
import srcImage from '../../assets/image-hero-desktop.png'
import Clients from './Clients';

export default function Header() {
  return(
    <Flex p={10} alignItems="center" justifyContent="space-around">
      
      <Box p={2} w={650}>
        
        <TextHeader />

        <Clients />
     
      </Box>
    
      <Image src={srcImage} alt="image of a guy with a phone" w={420} />
    </Flex>
  )
}