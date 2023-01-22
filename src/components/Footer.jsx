import React from 'react'
import {Box, Button, Heading, HStack, Stack, VStack, Input, Text} from "@chakra-ui/react";
import {AiOutlineSend} from "react-icons/ai"
const Footer = () => {
  return (
  <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={"white"}>

    <Stack direction={['column', 'row']}>
    <VStack alignItems={"stretch"} w="full" px="4">
        <Heading size={"md"} textAlign={['center', 'left']}  textTransform={"uppercase"}>Subscribe to get more updates</Heading>
    <HStack borderBottom={"2px solid white "} py="2">
        <Input placeholder="enter email here..."  border={"none"} borderRadius="none" outline="none" focusBorderColor='none'/>
        <Button p={"0"} colorScheme={'purple'} variant={"ghost"}
        borderRadius={"0 200px 200px 0"}>
            <AiOutlineSend size={20}/>
        </Button>
    </HStack>

    </VStack>

    <VStack w="full" borderLeft={["none" , "solid 1px white"]} borderRight={["none", "1px solid white"]}>
        <Heading textTransform={"uppercase"} textAlign={"center"}>VIDEO HUB</Heading>
        <Text>ALL rights reserved</Text>
    </VStack>

    <VStack w="full"> 
        <Heading size={"md"}>Socail Media</Heading>

        <Button variant={"link"} colorScheme={"whiteAlpha"}>
            <a target={"_blank"} href='https://github.com/vikas-bha'>Github</a>
        </Button>
        
        <Button variant={"link"} colorScheme={"whiteAlpha"}>
            <a target="_blank" href='https://www.linkedin.com/in/vikas-bhardwaj-535203175/'>Linkdin</a>
        </Button>

    </VStack>
    </Stack>
    
  </Box>
  )
}

export default Footer