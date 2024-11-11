import { TbHandClick } from "react-icons/tb";
import { Heading,Tabs,For } from '@chakra-ui/react'
import { FaRegBell } from "react-icons/fa";

export  function SubjectTitle(props){
    return(
        <div className='subjectTitle'>
            <Heading size='6xl' style={{width:'80%',textAlign:'left',textWrap:'unset'}}>{props.title}</Heading>
        </div>
    )
}