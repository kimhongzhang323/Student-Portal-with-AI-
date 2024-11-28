import { Tabs } from '@chakra-ui/react'
import { NavigationLayout } from './components/NavigationLayout'
import {SubjectTitle} from './components/SubjectTitle'
import {TabTrigger} from './components/TabTrigger'
import { TabsContent } from './components/TabsContent';

export default function Courses(){
    return(
        <NavigationLayout>
            <div className='centeredContainer'>
                <SubjectTitle title='Object Oriented Programming'/> 
            </div>
            <Tabs.Root defaultValue="section1" variant='subtle' style={{justifyContent:'flex-start'}}>
                {/* Add logic here for looping to create tabs */}
                <Tabs.List className='tabsGray'>
                    <TabTrigger value="section1" text="Section 1"/>
                    <TabTrigger value="section2" text="Section 2"/>
                    <TabTrigger value="section3" text="Section 3"/>
                </Tabs.List>
                <TabsContent value="section1" text="This is Section 1"/>
                <TabsContent value="section2" text="This is Section 2"/>
                <TabsContent value="section3" text="This is Section 3"/>
            </Tabs.Root>
        </NavigationLayout>
    )
}