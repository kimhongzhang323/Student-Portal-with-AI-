import { Heading,Tabs,For } from '@chakra-ui/react'
import { NavigationLayout } from './components/NavigationLayout'
import { FaRegBell } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import {SubjectTitle} from './components/SubjectTitle'
import {TabTrigger} from './components/TabTrigger'

export default function Courses(){
    return(
        <NavigationLayout>
            <div className='centeredContainer'>
                <SubjectTitle title='Object Oriented Programming'/> 
            </div>
            <Tabs.Root defaultValue="members" variant='subtle' style={{justifyContent:'flex-start'}}>
                {/* Add logic here for looping to create tabs */}
                <Tabs.List className='tabsGray'>
                    <TabTrigger value="section1" text="Section 1"/>
                    <TabTrigger value="section2" text="Section 2"/>
                    <TabTrigger value="section3" text="Section 3"/>
                </Tabs.List>
                <Tabs.Content value="members" className='grayBorder'>
                Manage your team members
                </Tabs.Content>
                <Tabs.Content value="projects" className='grayBorder'>Manage your projects</Tabs.Content>
                <Tabs.Content value="tasks" className='grayBorder'>
                Manage your tasks for freelancers
                </Tabs.Content>
            </Tabs.Root>
        </NavigationLayout>
    )
}