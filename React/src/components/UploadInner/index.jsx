import FileData from '../FileData';
import { MdOutlineFileUpload } from "react-icons/md";
import { Heading } from '@chakra-ui/react';

export default function UploadInner(props){
    return(
        <div className='uploadInner'>
            <div className='innerLeft'>
                <MdOutlineFileUpload  size='50px' style={{justifySelf:'center'}}/>
                <p>Drag and drop to upload your files.</p>
            </div>
            <div className='innerRight'>
                <Heading size={'lg'}>Files Uploaded</Heading>
                <FileData fileName='ericdoods.pdf' size='24px' margin='5px'/>
                <FileData fileName='ericdoods.pdf' size='24px' margin='5px'/>
                <FileData fileName='ericdoods.pdf' size='24px' margin='5px'/>
            </div>
        </div>
    )
}