import { IoLockOpenOutline,IoLockClosedOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";

export default function AssignmentDetailsGroup(){
    return(
        <div className="assignmentDetailsGroup">
            <div style={{borderRight:'3px solid black', justifyContent:'center',textAlign:'center',padding:'10px'}}>
                <div className="assignmentDetail">
                    <IoLockOpenOutline size='30px'/>
                    <p className="assignmentDetailsText">Submission Opens: 06/09/2069</p>
                </div>
                <div className="assignmentDetail">
                    <IoLockClosedOutline size='30px'/>
                    <p className="assignmentDetailsText">Submission Closes: 06/09/2420</p>
                </div>
            </div>
            <div style={{justifyContent:'left',padding:'10px',flexDirection:'column',alignItems:'flex-start'}}>
                <div className="assignmentDetail">
                    <CiClock2 size='30px'/>
                    <p className="assignmentDetailsText">Time Remaining: 69 days</p>
                </div>
                <div className="assignmentDetail">
                    <MdOutlineFileUpload size='30px'/>
                    <p className="assignmentDetailsText">Submission status: No Submissions</p>
                </div>
            </div>
        </div>
    )
}