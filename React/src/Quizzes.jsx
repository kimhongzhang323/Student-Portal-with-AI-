import { NavigationLayout } from './components/NavigationLayout'
import { CiFolderOn } from "react-icons/ci";
import { Heading } from '@chakra-ui/react';
import { FaFolderTree } from "react-icons/fa6";
import { FaRegFolderOpen } from "react-icons/fa";
import { FileTreeItem } from './components/FileTreeItem';

export default function LectureNotes(props){
    return(
        <NavigationLayout>
            <div className='folderTitle'>
                <CiFolderOn size='70px'/>
                <Heading style={{marginLeft:'10px'}}>
                    Quizzes
                </Heading>
            </div>
            <div className='filesContainer'>
                <FaRegFolderOpen  size='40px'  style={{marginLeft:'30px', marginTop:'20px', backgroundColor:'white',marginBottom:'8px'}}/>
                <div style={{display:'flex', height:'fit-content'}}>
                    <div style={{width:'100%',alignContent:'center',alignItems:'center',height:'100%',position:'relative'}}>
                        <FileTreeItem fileName='ericdoods.pdf'/>
                        <FileTreeItem fileName='ericdoods.pdf'/>
                        <FileTreeItem fileName='ericdoods.pdf'/>
                        <FileTreeItem fileName='ericdoods.pdf'/>
                        <FileTreeItem fileName='ericdoods.pdf'/>
                        <FileTreeItem fileName='ericdoods.pdf'/>
                    </div>
                </div>
            </div>
        </NavigationLayout>
    )
}