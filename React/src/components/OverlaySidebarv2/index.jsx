import { useState } from 'react'
import './sidebar.css';
import HamburgerLogo from '../../assets/hamburger.svg'
import MyPortalLogo from '../../assets/MyPortal.svg'
import CoursesPageSVG from '../../assets/CoursesPage.svg'
import GeminiPageSVG from '../../assets/GeminiPage.svg'
import HomePageSVG from '../../assets/HomePage.svg'
import PagesPageSVG from '../../assets/PagesPage.svg'
import SettingsPageSVG from '../../assets/SettingsPage.svg'
import CalendarPageSVG from '../../assets/calendar.svg'

import { Button } from '@chakra-ui/react';

export function OverlaySidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
    <div>
      <Button className="open-btn" onClick={toggleSidebar}>
        <img src={HamburgerLogo} width="28" alt="" style={{"marginRight": "15px"}} />
      </Button>

      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>

      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <button className="close-btn" style={{"color":"black"}} onClick={toggleSidebar}>
          &times;
        </button>
        <img src={MyPortalLogo} width="120px" alt="" />
        <ul style={{"marginTop": "25px"}}>
          <li>
            <img src={HomePageSVG} alt="" />
            <a href="/" style={{"color":"black"}}>Dashboard</a>
          </li>
          <li>
            <img src={CalendarPageSVG} alt="" />
            <a href="/calendar" style={{"color":"black"}}>Calendar</a>
          </li>
          <li>
            <img src={PagesPageSVG} alt="" />
            <a href="/pages" style={{"color":"black"}}>Pages</a>
          </li>
          <li>
            <img src={GeminiPageSVG} alt="" />
            <a href="/gemini" style={{"color":"black"}}>Gemini</a>
          </li>
          <li>
            <img src={CoursesPageSVG} alt="" />
            <a href="/courses" style={{"color":"black"}}>Courses</a>
          </li>
          <li>
            <img src={SettingsPageSVG} alt="" />
            <a href="/settings" style={{"color":"black"}}>Settings</a>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}
