import { Box } from "@chakra-ui/react";
import { NavigationBar } from "../NavigationBar";
import { SideBar } from "../Sidebar";

export function NavigationLayout(props) {
  return (
    <>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <NavigationBar />
        <Box display="flex" flex="1">
          <Box display="flex" flex="1">
            <Box margin={"40px"} width="100%">
              {props.children}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}