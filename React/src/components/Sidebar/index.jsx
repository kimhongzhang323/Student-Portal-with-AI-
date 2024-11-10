import { Box, Link } from "@chakra-ui/react";
import EnrolledLogo from '../../assets/courses.svg'
import CoursesPageSVG from '../../assets/CoursesPage.svg'
import GeminiPageSVG from '../../assets/GeminiPage.svg'
import HomePageSVG from '../../assets/HomePage.svg'
import PagesPageSVG from '../../assets/PagesPage.svg'
import SettingsPageSVG from '../../assets/SettingsPage.svg'
import CalendarPageSVG from '../../assets/calendar.svg'


export function SideBar() {
    return (
        <Box
            display={{ base: "none", lg: "flex" }}  // Hide on smaller screens, show on lg and up
            width="220px"
            flexDirection="column"
            padding="30px"
            borderRightWidth="1px"
            borderRightColor="blackAlpha.100"
            gapY={"5"}
        >
          <Link>
            <img src={HomePageSVG} alt="" />
            Dashboard
          </Link>
          <Link>
            <img src={CalendarPageSVG} alt="" />
            Calendar
          </Link>
          <Link>
            <img src={PagesPageSVG} alt="" />
            Pages
          </Link>
          <Link>
            <img src={GeminiPageSVG} alt="" />
            Gemini
          </Link>
          <Link>
            <img src={CoursesPageSVG} alt="" />
            Courses
          </Link>
          <Link>
            <img src={SettingsPageSVG} alt="" />
            Settings
          </Link>
        </Box>
    )
}