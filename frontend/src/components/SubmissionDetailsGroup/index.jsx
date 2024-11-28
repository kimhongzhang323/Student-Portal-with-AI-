import { Heading, Text } from "@chakra-ui/react"
import { CiPen,CiChat1,CiFileOn } from "react-icons/ci";

export default function SubmissionDetailsGroup(){
    return(
        <div className="submissionDetailsGroup">
            <Heading style={{textAlign:'left',margin:'10px'}} size={'lg'}>
                Submission 1
            </Heading>
            <div style={{display:'flex',margin:'10px', alignItems: "center"}}>
                <CiFileOn size='20px'/>
                <Text style={{margin:'auto 10px'}} size={{ base: "sm", sm: "md"}} textAlign={"start"}><strong>Files Submitted:</strong> 1.pdf,2.png.3.doc</Text>
            </div>
            <div style={{display:'flex',margin:'10px', alignItems: "center"}}>
                <CiPen size='20px'/>
                <Text style={{margin:'auto 10px'}} size={{ base: "sm", sm: "md"}} textAlign={"start"}><strong>Grading:</strong> Ungraded</Text>
            </div>
            <div style={{display:'flex',margin:'10px', alignItems: "center"}}>
                <CiChat1 size='20px'/>
                <Text style={{margin:'auto 10px'}} size={{ base: "sm", sm: "md"}} textAlign={"start"}><strong>Remarks:</strong> Lorem ipsum dolor sit amet</Text>
            </div>
        </div>

    )
}