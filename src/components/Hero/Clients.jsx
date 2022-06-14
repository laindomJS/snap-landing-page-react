import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import clientOne from '../../assets/client-databiz.svg';
import clientTwo from '../../assets/client-audiophile.svg'; 
import clientThree from '../../assets/client-meet.svg';
import clientFour from '../../assets/client-maker.svg';

export default function Clients() {
  return(
    <Flex alignItems="center" justifyContent="space-around" mt="4rem">
      <Image src={clientOne} w="6rem" />

      <Image src={clientTwo} w="6rem" />

      <Image src={clientThree} w="6rem" />

      <Image src={clientFour} w="6rem" />
  </Flex>
  )
}
