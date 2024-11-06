// import './App.css'
import { Box, HStack, Spacer } from '@chakra-ui/react'
import MessageLogo from '../../assets/message.svg'
import BellLogo from '../../assets/bell.svg'
import MyPortalLogo from '../../assets/MyPortal.svg'
import HamburgerLogo from '../../assets/hamburger.svg'
import { Avatar } from '../ui/avatar'

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
					<Box display={{ base: "block", lg: "none" }}>
					<img src={HamburgerLogo} width="28" alt="" style={{ marginRight: "15px" }} />
					</Box>
					<img src={MyPortalLogo} width={"120"} alt="React logo" />
					<Spacer />
						<HStack gap="8">
							<img src={MessageLogo} width="28" alt="Message logo" />
							<img src={BellLogo} width="28" alt="Notification logo" />
							<Avatar variant="solid" name="Sage Adebayo" width="10" height="10" />
						</HStack>
					</HStack>
				</Box>
			</>
    )
}