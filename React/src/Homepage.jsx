import './App.css'
import { Box, Heading, HStack, Link, SimpleGrid, Text } from '@chakra-ui/react'
import { NavigationBar } from './components/NavigationBar'
import AssignmentComponent from './components/Assignment'
import EnrolledComponent from './components/Enrolled'
import EnrolledLogo from './assets/courses.svg'
import AssignmentLogo from './assets/assignments.svg'
import { SideBar } from './components/Sidebar'
import { NavigationLayout } from './components/NavigationLayout'

export default function Homepage() {
  const getSomething = async () => {
    try {
      const response = await fetch('/api/random/'); // Replace with your API endpoint
      const result = await response.json();
      setData(JSON.stringify(result));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
     <NavigationLayout>
        <Heading textAlign={"start"} size={"2xl"}>Welcome back, Choong Jia Xuen!</Heading>
        <Heading marginTop={"10"} marginBottom={"3"} textAlign={"start"}>
          <HStack>
            <img src={EnrolledLogo} alt="" />
            Enrolled Courses
          </HStack>
        </Heading>
        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3}} 
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
          columns={{ base: 1, md: 2, xl: 3 }} 
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
       </NavigationLayout>
    </>
  )
}