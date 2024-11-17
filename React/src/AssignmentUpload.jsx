import { NavigationLayout } from './components/NavigationLayout'
import { Box, Heading } from '@chakra-ui/react';
import { MdOutlineFileUpload } from "react-icons/md";
import AssignmentDetailsGroup from './components/AssignmentDetailsGroup';
import {Button} from '@chakra-ui/react';
import SubmissionDetailsGroup from './components/SubmissionDetailsGroup';
import { useNavigate } from 'react-router-dom';

export default function LectureNotes(props){
    const navigate = useNavigate();
    
    function handleClick(){
        navigate('/addSubmission');
    }
    return(
        <NavigationLayout>
            <Box className='folderTitle' mb="20px">
                <MdOutlineFileUpload size='30px'/>
                <Heading ml="10px">
                    Assignment Upload
                </Heading>
            </Box>
            <Box className='filesContainer'>
                <div className='centeredContainer'>
                    <AssignmentDetailsGroup />
                </div>
                <Box style={{display:'flex'}} alignItems={{ base:'flex-start', sm:'center'}} flexDir={{ base: "column", sm: "row"}} marginTop="6" marginBottom={{ base: "5", sm: "3"}}>
                    <Heading size={{ lg: "3xl", md: "2xl", base: "xl"}} marginRight={"4"} >Submissions</Heading>
                    <Button style={{color:'white',fontSize:'0.9em',borderRadius:'5px'}} bgColor={'rgb(52,147,255)'} onClick={handleClick}>Add Submission</Button>
                </Box>
                <div className="centeredContainer">
                    <SubmissionDetailsGroup />
                </div>
            </Box>
        </NavigationLayout>
    )
}