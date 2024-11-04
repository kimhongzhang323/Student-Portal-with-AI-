import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from "@/components/ui/button"
import Calendar from 'react-calendar'

export default function Homepage(){
  return (
    <>
    <div>
      <Calendar />
    </div>
      
      <Button onClick={() => window.location.href = '/courses'} colorPalette = "red">
        Go to Courses
      </Button>
      <Button onClick={() => window.location.href = '/login'} colorPalette = "blue">
        Login
      </Button>
    </>
  )
}