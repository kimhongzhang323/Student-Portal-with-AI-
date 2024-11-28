import { IoLockOpenOutline,IoLockClosedOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";

import "./style.css"
import { Box } from "@chakra-ui/react";

export default function AssignmentDetailsGroup(){
    return(
        <Box className="assignmentDetailsGroup" flexDir={{ base: "column", md: "row"}} Width={"90%"}>
            <Box justifyContent="left" p="10px" borderRight={{ md:'1px solid #e0e0e0'}}>
                <div className="assignmentDetail">
                    <IoLockOpenOutline size='15px'/>
                    <p className="assignmentDetailsText"><strong>Submission Opens:</strong> 06/09/2069</p>
                </div>
                <div className="assignmentDetail">
                    <IoLockClosedOutline size='15px'/>
                    <p className="assignmentDetailsText"><strong>Submission Closes:</strong> 06/09/2420</p>
                </div>
            </Box>
            <Box justifyContent="left" p="10px" flexDir="column" alignItems="flex-start">
                <div className="assignmentDetail">
                    <CiClock2 size='20px'/>
                    <p className="assignmentDetailsText"><strong>Time Remaining:</strong> 69 days</p>
                </div>
                <div className="assignmentDetail">
                    <MdOutlineFileUpload size='20px'/>
                    <p className="assignmentDetailsText"><strong>Submission status:</strong> No Submissions</p>
                </div>
            </Box>
        </Box>
    )
}