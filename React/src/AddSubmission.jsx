import { NavigationLayout } from './components/NavigationLayout'
import AssignmentDetailsGroup from './components/AssignmentDetailsGroup';
import {Heading } from '@chakra-ui/react';
import { MdOutlineFileUpload } from "react-icons/md";
import UploadInterface from './components/UploadInterface';

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
                    <Heading style={{margin:'auto 20px'}} size='3xl'>Add Submission</Heading>
                </div>
                <UploadInterface />
            </div>
        </NavigationLayout>
    )
}