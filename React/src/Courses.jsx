import { Heading,Tabs,For } from '@chakra-ui/react'
import { NavigationLayout } from './components/NavigationLayout'
import { FaRegBell } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import {SubjectTitle} from './components/SubjectTitle'

export default function Courses(){
    return(
        <NavigationLayout>
            <div className='centeredContainer'>
                <SubjectTitle title='Object Oriented Programming'/> 
            </div>

            <Tabs.Root defaultValue="members" variant='subtle' style={{justifyContent:'flex-start'}}>
                <Tabs.List className='tabsGray'>
                    <Tabs.Trigger value="members">

                        Members
                    </Tabs.Trigger>
                    <Tabs.Trigger value="projects">
                        Projects
                    </Tabs.Trigger>
                    <Tabs.Trigger value="tasks">
                        Settings
                    </Tabs.Trigger>
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