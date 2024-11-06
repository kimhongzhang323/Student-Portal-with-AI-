import React from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import { Box, HStack, Spacer } from '@chakra-ui/react'
import MessageLogo from './assets/message.svg'
import BellLogo from './assets/bell.svg'
import MyPortalLogo from './assets/MyPortal.svg'
import HamburgerLogo from './assets/hamburger.svg'
import { Avatar } from './components/ui/avatar'
import { NavigationBar } from './components/NavigationBar'

export default function Homepage() {

  return (
    <>
      <NavigationBar />
    </>
  )
}