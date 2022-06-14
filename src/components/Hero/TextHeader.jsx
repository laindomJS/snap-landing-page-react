import React from 'react';
import { Text, Heading, Button } from '@chakra-ui/react';

export default function TextHeader() {
  return (
    <>
      <Heading fontSize={82} mb={8}>Make <br /> remote work</Heading>
      <Text w={390} lineHeight="1.5" color="gray.600" fontSize={18} fontWeight="semibold" mb={8}>Get your team in sync, no matter you location. Streamline processes, create team rituals, and watch productivity soar.</Text>
      <Button bg="black" color="white" border="1px" borderColor="black" fontWeight="bold" fontSize={18} borderRadius="8px" w={150} h={55} _hover={ {color:"black", background:"white"} }>Learn more</Button>
    </>
  )
}
