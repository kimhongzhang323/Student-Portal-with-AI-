import {Tabs,Heading} from '@chakra-ui/react'
import { MaterialsFolder } from '../MaterialsFolder'

export function TabsContent(props){
    return(
        <Tabs.Content value={props.value} className='grayBorder'>
            <Heading style={{textAlign:'left',paddingLeft:'20px'}}>
                Materials
            </Heading>
            <div className='materialsContainer'>
                <MaterialsFolder folderName='Lecture Notes'/>
                <MaterialsFolder folderName='Assignments'/>
                <MaterialsFolder folderName='Quizzes'/>
            </div>
        </Tabs.Content>
    )
}