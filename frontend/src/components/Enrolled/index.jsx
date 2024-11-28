import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import ProfileLogo from '../../assets/profile.svg'
import CalendarLogo from '../../assets/calendar.svg'
import ClockLogo from '../../assets/clock.svg'
import LocationLogo from '../../assets/location.svg'


export default function EnrolledComponent() {
  return (
    <>
      <Box
        minW="240px"
        borderWidth="1px"
        borderRadius="xl"
        borderColor="blue.100"
        p={7}
        bg="white"
      >
        <VStack align="stretch" spacing={6}>
          <Heading size="lg" textAlign={"start"}>
            Graphic Fundamentals - ART101
          </Heading>
          <hr style={{"marginTop": "5px", "marginBottom": "5px"}}/>
          <HStack spacing={4}>
            <img src={ProfileLogo} alt="" />
            <Text fontSize="sm">Prof. Smith</Text>
          </HStack>

          <HStack spacing={4}>
            <img src={CalendarLogo} alt="" />
            <Text fontSize="sm">Monday & Wednesday</Text>
          </HStack>

          <HStack spacing={4}>
            <img src={ClockLogo} alt="" />
            <Text fontSize="sm">9:00 AM - 10:30 AM</Text>
          </HStack>

          <HStack spacing={4}>
            <img src={LocationLogo} alt="" />
            <Text fontSize="sm">Design Studio A</Text>
          </HStack>
        </VStack>
      </Box>
    </>
  )
}