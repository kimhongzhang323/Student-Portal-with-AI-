import React from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import { Box, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import MessageLogo from './assets/message.svg'
import BellLogo from './assets/bell.svg'
import MyPortalLogo from './assets/MyPortal.svg'
import HamburgerLogo from './assets/hamburger.svg'
import { Avatar } from './components/ui/avatar'
import { NavigationBar } from './components/NavigationBar'
import AssignmentComponent from './components/Assignment'
import EnrolledComponent from './components/Enrolled'
import EnrolledLogo from './assets/courses.svg'
import AssignmentLogo from './assets/assignments.svg'

export default function Homepage() {

  return (
    <>
    <NavigationBar />
    <Box margin={"10"}>
      <Heading textAlign={"start"} size={"2xl"}>Welcome back, Choong Jia Xuen!</Heading>
      <Heading marginTop={"10"} marginBottom={"3"} textAlign={"start"}>
        <HStack>
          <img src={EnrolledLogo} alt="" />
          Enrolled Courses
        </HStack>
      </Heading>
      <SimpleGrid 
        columns={{ base: 1, md: 2, lg: 4 }} 
        gap={'5'}
      >
        <EnrolledComponent />
        <EnrolledComponent />
        <EnrolledComponent />
        <EnrolledComponent />
        <EnrolledComponent />
        <EnrolledComponent />
        <EnrolledComponent />
        <EnrolledComponent />
      </SimpleGrid>
      <Heading marginTop={"10"} textAlign={"start"}>
        <HStack>
          <img src={AssignmentLogo} alt="" />
          Assignments
        </HStack>
      </Heading>
      <Text textAlign={"start"} marginBottom={"5"} color={"blackAlpha.600"} fontWeight={"medium"}>Not submitted assignments are shown here.</Text>
      <SimpleGrid 
        columns={{ base: 1, md: 2, lg: 3 }} 
        gap={'5'}
      >
        <AssignmentComponent/>
        <AssignmentComponent/>
        <AssignmentComponent/>
        <AssignmentComponent/>
        <AssignmentComponent/>
        <AssignmentComponent/>
        <AssignmentComponent/>
        <AssignmentComponent/>
      </SimpleGrid>
      
    </Box>
    
    </>
  )
}