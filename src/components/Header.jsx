import React from 'react'
import {Drawer, DrawerBody , DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure, DrawerHeader, Stack} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import {BiMenuAltLeft} from "react-icons/bi"
import {  HStack, VStack } from '@chakra-ui/react'
const Header = () => {

    const {isOpen, onOpen, onClose}= useDisclosure()
  return( <>
    <Button zIndex={'overlay'} pos={'fixed'} left={'4'} top={'4'} p={'0'} w={'10' } h={'10' } borderRadius={'full'} onClick={onOpen} colorScheme="purple">
        <BiMenuAltLeft  size={'20'}/>
    </Button>

    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>

       <DrawerOverlay/>
       <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>Videos</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'}>
                <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/'}>Home</Link>
                </Button>
                <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
                </VStack>

                <HStack pos={'absolute'} bottom={'10' } left={'0'}  w={'full'} justifyContent={'space-evenly'}>
                    <Button colorScheme={'purple'}>
                        <Link to={'/login'}>Login</Link>
                    </Button>
                    <Button colorScheme={'purple'}>
                        <Link to={'/signup'}>   SignUp</Link>
                    </Button>
                </HStack >
            </DrawerBody>
       </DrawerContent>
    </Drawer>
  </>
  );
}

export default Header