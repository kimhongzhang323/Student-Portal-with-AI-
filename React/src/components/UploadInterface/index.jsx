import { CiChat1 } from "react-icons/ci";
import { MdOutlineUploadFile,MdDriveFolderUpload } from "react-icons/md";
import {Button,Input } from '@chakra-ui/react';
import UploadInner from "../UploadInner";

export default function UploadInterface(){
    return(
        <div className='uploadInterface'>
            <div style={{display:'flex',padding:'10px',alignContent:'center'}}>
                <MdOutlineUploadFile size='40px'style={{margin:'0 10px'}}/>
                <MdDriveFolderUpload size='43px'/>
            </div>
            <UploadInner />
            <div style={{width:'78%',textAlign:'left',justifySelf:'center',fontSize:'0.8em'}}>
                Accepted file types: .doc .docx .epub .gdoc .odt .oth .ott .pdf .rtf
            </div>
            <div className='addRemarks'>
                <CiChat1 size='30px'/>
                <Input placeholder='Add Remarks' style={{marginLeft:'10px',backgroundColor:'white',width:'50%'}}/>
            </div>
            <div style={{display:'flex',justifyContent:'flex-start',gap:'10px',width:'10%',margin:'0 20px'}}>
                <Button style={{color:'white',fontSize:'0.9em',borderRadius:'10px',margin:'10px auto',justifySelf:'left'}} bgColor={'rgb(52,147,255)'}>Submit</Button>
                <Button style={{fontSize:'0.9em',borderRadius:'10px',margin:'10px auto',justifySelf:'left',color:'black'}} bgColor={'rgb(210,210,210)'}>Cancel</Button>
            </div>
        </div>
    )
}