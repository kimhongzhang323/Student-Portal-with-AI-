// import './App.css'
import { Box, HStack, Image, Spacer } from '@chakra-ui/react'
import MessageLogo from '../../assets/message.svg'
import BellLogo from '../../assets/bell.svg'
import MyPortalLogo from '../../assets/MyPortal.svg'
import { Avatar } from '../ui/avatar'
import { OverlaySidebar } from '../OverlaySidebarv2'

export function NavigationBar() {
    return (
			<>
				<Box 
					bg="white" 
					px={10} 
					py={3} 
					w="100%" 
					h="80px" 
					borderBottom="sm" 
					borderBottomColor="blackAlpha.200"
				>
					<HStack h="100%" alignItems="center">
					<Box>
						<OverlaySidebar />
					</Box>
					<Image src={MyPortalLogo} width={{ base:"110px", md: "130px", lg:"150px"}} alt="React logo" />
					<Spacer />
						<HStack gap="8" display={{ base: "none", sm: "flex" }}> 
							<img src={MessageLogo} width="28" alt="Message logo" />
							<img src={BellLogo} width="28" alt="Notification logo" />
							<Avatar variant="solid" name="Sage Adebayo" width="10" height="10" />
						</HStack>
					</HStack>
				</Box>
			</>
    )
}