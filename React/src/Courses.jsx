import { Heading } from '@chakra-ui/react'
import { NavigationLayout } from './components/NavigationLayout'
import { FaRegBell } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";

export default function Courses(){
    return(
        <NavigationLayout>
            <div className='centeredContainer'>
                <div className='subjectTitle'>
                    <Heading size='6xl' style={{width:'80%',textAlign:'left',textWrap:'unset'}}>Object Oriented Programming</Heading>
                    <div className='shortAnnouncement'>
                        <FaRegBell style={{height:'30px',width:'30px',margin:'5px 10px'}}/>
                        <strong>Announcement: Lorem Ipsum Dolor sit Amet</strong>
                        <TbHandClick className='handClickIcon'/>
                    </div>
                </div>
            </div>
        </NavigationLayout>
    )
}