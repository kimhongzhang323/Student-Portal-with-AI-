import {Tabs,Heading} from '@chakra-ui/react'
import { MaterialsFolder } from '../MaterialsFolder'
import { WeeklyContainer } from '../WeeklyContainer'

export function TabsContent(props){
    return(
        <Tabs.Content value={props.value} className='grayBorder'>
            <Heading style={{textAlign:'left',paddingLeft:'20px'}}>
                Materials
            </Heading>
            <div className='materialsContainer'>
                <MaterialsFolder folderName='Lecture Notes' link="/lectureNotes"/>
                <MaterialsFolder folderName='Assignments' link="/assignments"/>
                <MaterialsFolder folderName='Quizzes' link="/quizzes"/>
            </div>
            {/* make loop here for  each week */}
            <WeeklyContainer week='Week 1'/>
            <WeeklyContainer week='Week 2'/>
            <WeeklyContainer week='Week 3'/>            
        </Tabs.Content>
    )
}