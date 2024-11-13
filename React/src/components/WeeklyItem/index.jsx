import { Heading } from "@chakra-ui/react";
import { CiGlobe } from "react-icons/ci";

export function WeeklyItem(props){
    return(
        <div className='weeklyItem'>
            <div className="itemTitle">
                <div className="generalAnnouncement">
                    <CiGlobe style={{height:'50px',width:'50px',padding:'5px'}}/>
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