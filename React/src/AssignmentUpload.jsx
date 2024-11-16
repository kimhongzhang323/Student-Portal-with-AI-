import { NavigationLayout } from './components/NavigationLayout'
import { Heading } from '@chakra-ui/react';
import { MdOutlineFileUpload } from "react-icons/md";
import AssignmentDetailsGroup from './components/AssignmentDetailsGroup';

export default function LectureNotes(props){
    return(
        <NavigationLayout>
            <div className='folderTitle'>
                <MdOutlineFileUpload size='70px'/>
                <Heading style={{marginLeft:'10px'}}>
                    Assignment Upload
                </Heading>
            </div>
            <div className='filesContainer'>
                <div className='centeredContainer'>
                    <AssignmentDetailsGroup />
                </div>
                
            </div>
        </NavigationLayout>
    )
}