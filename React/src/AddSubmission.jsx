import { NavigationLayout } from './components/NavigationLayout'
import { Heading } from '@chakra-ui/react';
import AssignmentDetailsGroup from './components/AssignmentDetailsGroup';
import {Button,Input } from '@chakra-ui/react';
import { MdOutlineUploadFile,MdDriveFolderUpload,MdOutlineFileUpload } from "react-icons/md";
import { BsFiletypePdf } from "react-icons/bs";
import { CiChat1 } from "react-icons/ci";

export default function LectureNotes(props){
    return(
        <NavigationLayout>
            <div className='folderTitle'>
                <MdOutlineFileUpload size='70px'/>
                <Heading style={{marginLeft:'10px'}}>
                    Assignment Upload
                </Heading>
            </div>
            <div className='filesContainer'>
                <div className='centeredContainer'>
                    <AssignmentDetailsGroup />
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                    <Heading style={{margin:'auto 20px'}} size='3xl'>Add Submission</Heading>
                </div>
                <div className='uploadInterface'>
                    <div style={{display:'flex',padding:'10px',alignContent:'center'}}>
                        <MdOutlineUploadFile size='40px'style={{margin:'0 10px'}}/>
                        <MdDriveFolderUpload size='43px'/>
                    </div>
                    <div className='uploadInner'>
                        <div className='innerLeft'>
                            <MdOutlineFileUpload  size='50px' style={{justifySelf:'center'}}/>
                            <p>Drag and drop to upload your files.</p>
                        </div>
                        <div className='innerRight'>
                            <Heading size={'lg'}>Files Uploaded</Heading>
                            <div style={{display:'flex',alignContent:'center',margin:'5px'}}>
                                <BsFiletypePdf size='24px'/>
                                <div style={{alignItems:'center'}}>
                                    ericdoods.pdf
                                </div>
                            </div>
                            <div style={{display:'flex',alignContent:'center',margin:'5px'}}>
                                <BsFiletypePdf size='24px'/>
                                <div style={{alignItems:'center'}}>
                                    ericdoods.pdf
                                </div>
                            </div>
                            <div style={{display:'flex',alignContent:'center',margin:'5px'}}>
                                <BsFiletypePdf size='24px'/>
                                <div style={{alignItems:'center'}}>
                                    ericdoods.pdf
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width:'78%',textAlign:'left',justifySelf:'center',fontSize:'0.8em'}}>
                        Accepted file types: .doc .docx .epub .gdoc .odt .oth .ott .pdf .rtf
                    </div>
                    <div className='addRemarks'>
                        <CiChat1 size='30px'/>
                        <Input placeholder='Add Remarks' style={{marginLeft:'10px',backgroundColor:'white',width:'50%'}}/>
                    </div>
                    <div style={{display:'flex',justifyContent:'flex-start',gap:'10px',width:'10%',margin:'0 20px'}}>
                        <Button style={{color:'white',fontSize:'0.9em',borderRadius:'10px',margin:'10px auto',justifySelf:'left'}} bgColor={'rgb(52,147,255)'}>Submit</Button>
                        <Button style={{color:'white',fontSize:'0.9em',borderRadius:'10px',margin:'10px auto',justifySelf:'left',color:'black'}} bgColor={'rgb(210,210,210)'}>Cancel</Button>
                    </div>
                </div>
            </div>
        </NavigationLayout>
    )
}