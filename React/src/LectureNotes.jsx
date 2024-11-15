import { NavigationLayout } from './components/NavigationLayout'
import { CiFolderOn } from "react-icons/ci";
import { Heading } from '@chakra-ui/react';
import { FaFolderTree } from "react-icons/fa6";
import { FaRegFolderOpen } from "react-icons/fa";

export default function LectureNotes(props){
    return(
        <NavigationLayout>
            <div className='folderTitle'>
                <CiFolderOn size='70px'/>
                <Heading style={{marginLeft:'10px'}}>
                    Lecture Notes
                </Heading>
            </div>
            <div className='filesContainer'>
                <FaRegFolderOpen  size='40px'  style={{marginLeft:'30px', marginTop:'20px'}}/>
                <div style={{display:'flex', height:'100%', alignItems:'stretch'}}>
                    <div style={{height:'70%'}} className='grayRightBorder'>
                        
                    </div>
                </div>
            </div>
        </NavigationLayout>
    )
}