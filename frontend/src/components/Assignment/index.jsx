import { Box, Heading, Grid, GridItem, Text } from '@chakra-ui/react'

export default function AssignmentComponent() {
  return (
    <Box
			minW="300px"
      borderWidth="1px"
      borderRadius="xl"
      borderColor="blue.100"
      p={5}
      bg="white"
      textAlign={"start"}
    >
			<Heading 
				size="md" 
				lineHeight="1.2" 
			>
				Advanced Web Design
			</Heading>
			<hr style={{"marginTop": "15px", "marginBottom": "15px"}}/>
			<Text>
				<span style={{"fontWeight": "bold", fontSize: "14px"}}>Assignment: </span> 
				Responsive Website Project
			</Text>
			<Text>
				<span style={{"fontWeight": "bold", fontSize: "14px"}}>Due Date: </span> 
				March 5, 2024
			</Text>
    </Box>
  )
}