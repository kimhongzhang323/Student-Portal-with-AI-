import { Heading } from "@chakra-ui/react";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


export function WeeklyItem(props){
    const navigate = useNavigate();
    let icon,color;
    
    const handleClick = () => {
        if (props.type === 'assignmentUpload') {
            navigate('/assignmentUpload');
        }
    };

    if (props.type === 'general'){
        icon = <CiGlobe style={{height:'50px',width:'50px',padding:'5px'}}/>
        color = "rgb(0,140,255)"
    }
    else if (props.type === 'assignmentUpload'){
        icon = <MdOutlineFileUpload style={{height:'50px',width:'50px',padding:'5px'}}/>
        color = "rgb(255,159,63)"
    }
    return(
        <div className='weeklyItem' onClick={handleClick}>
            <div className="itemTitle">
                <div className="itemIcon" style={{backgroundColor: color}}>
                    {icon}
                </div>
                <Heading style={{textAlign:'left',paddingLeft:'10px'}}>
                    {props.title}
                    <p style={{fontSize:'0.6em',lineHeight:'1.2em'}}>
                        {props.content}
                    </p>
                </Heading>
            </div>
        </div>
    )
}