import { NavigationLayout } from './components/NavigationLayout'
import { Heading } from '@chakra-ui/react';
import { MdOutlineFileUpload } from "react-icons/md";
import AssignmentDetailsGroup from './components/AssignmentDetailsGroup';
import {Button} from '@chakra-ui/react';
import SubmissionDetailsGroup from './components/SubmissionDetailsGroup';

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
                <div style={{display:'flex',alignItems:'center'}}>
                    <Heading style={{margin:'auto 20px'}} size='3xl'>Submissions</Heading>
                    <Button style={{color:'white',fontSize:'0.9em',borderRadius:'10px'}} bgColor={'rgb(52,147,255)'}>Add Submission</Button>
                </div>
                <div className="centeredContainer">
                    <SubmissionDetailsGroup />
                </div>
            </div>
        </NavigationLayout>
    )
}