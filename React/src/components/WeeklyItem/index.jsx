import { Heading } from "@chakra-ui/react";
import { CiGlobe } from "react-icons/ci";
import { MdFileUpload } from "react-icons/md";

export function WeeklyItem(props){
    let icon,color;
    if (props.type === 'general'){
        icon = <CiGlobe style={{height:'50px',width:'50px',padding:'5px'}}/>
        color = "rgb(0,140,255)"
    }
    else if (props.type === 'assignmentUpload'){
        icon = <MdFileUpload style={{height:'50px',width:'50px',padding:'5px'}}/>
        color = "rgb(255,159,63)"
    }
    return(
        <div className='weeklyItem'>
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