import { Heading } from "@chakra-ui/react"
import { CiPen,CiChat1,CiFileOn } from "react-icons/ci";

export default function SubmissionDetailsGroup(){
    return(
        <div className="submissionDetailsGroup">
            <Heading style={{textAlign:'left',margin:'10px'}} size={'lg'}>
                Submission 1
            </Heading>
            <div style={{display:'flex',margin:'10px'}}>
                <CiFileOn size='30px'/>
                <Heading style={{margin:'auto 10px'}} size='md'>Files Submitted: 1.pdf,2.png.3.doc</Heading>
            </div>
            <div style={{display:'flex',margin:'10px'}}>
                <CiPen size='30px'/>
                <Heading style={{margin:'auto 10px'}} size='md'>Grading: Ungraded</Heading>
            </div>
            <div style={{display:'flex',margin:'10px'}}>
                <CiChat1 size='30px'/>
                <Heading style={{margin:'auto 10px'}} size='md'>Remarks: Lorem ipsum dolor sit amet</Heading>
            </div>
        </div>

    )
}