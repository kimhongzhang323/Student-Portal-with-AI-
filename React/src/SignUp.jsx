import {Field,Box,Container,Input,defineStyle,Button,Heading,For,Stack,Group, PinInput, PinInputField, HStack } from '@chakra-ui/react';
import "./styles.css";
import React, {useState} from 'react';
import {
    StepsCompletedContent,
    StepsContent,
    StepsItem,
    StepsList,
    StepsNextTrigger,
    StepsPrevTrigger,
    StepsRoot,
  } from "@/components/ui/steps";

import {
    PasswordInput,
    PasswordStrengthMeter,
  } from "@/components/ui/password-input";

export default function SignUp(){
    const [page, setPage] = useState(0)
    const nextPage = () => setPage((prevPage) => prevPage + 1);

    // Function to go to the previous page
    const prevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 0)); // Prevent going below page 0
  

    return(
        <div className='parentContainer'>
            <Container fluid='true' centerContent='true' className='loginPrompt'>
                <div style={{ overflow:'auto',flexWrap:'wrap', padding:'0',margin:'0'}} className='centeredContainer'>
                    <img src="/logo.svg" alt="logo" className='logo' />
                </div>
                <div style={{justifyContent:'flex-start',display:'flex',width:'80%'}}>
                    <Heading size='lg' style={{padding:'10px',textAlign:'left'}}>Sign Up</Heading>
                </div>
            <StepsRoot defaultValue={1} count={3}>
                <StepsList>
                    <StepsItem index={0} />
                    <StepsItem index={1} />
                    <StepsItem index={2} />
                </StepsList>
                    <StepsContent index={0}>
                    <form className="signUpForm" style={{width:'100%'}}>
                        <div className='loginInputs centeredContainer' style={{flexDirection:'column'}}>
                            <div style={{width:'90%'}}>
                                <Heading size='md' style={{margin:'0 auto',padding:'0',textAlign:'left'}}>Email</Heading>
                                <Input type='text' placeholder='abc@example.com' style={{margin:'5px auto 15px',width:'100%'}}/>
                                <Heading size='md' style={{margin:'0 auto',padding:'0',textAlign:'left'}}>Username</Heading>
                                <Input type='text' placeholder='abc@example.com' style={{margin:'5px auto 15px',width:'100%'}}/>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Heading size='md' style={{ margin: '0', padding: '0', textAlign: 'left' }}>Password</Heading>
                                </div>
                                <div className='centeredContainer' style={{width:'100%',margin:'5px auto'}}>
                                    <PasswordInput style={{margin:'0 auto',background:'transparent'}}/>
                                </div>
                                <PasswordStrengthMeter value={5} />
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Heading size='md' style={{ margin: '0', padding: '0', textAlign: 'left' }}> Confirm Password</Heading>
                                </div>
                                <div className='centeredContainer' style={{width:'100%',margin:'5px auto'}}>
                                    <PasswordInput style={{margin:'0 auto',background:'transparent'}}/>
                                </div>
                            </div>     
                        </div>    
                    </form>
                    </StepsContent>
                    <StepsContent index={1}>
                        <form>
                        <div>
                            <Heading size='md' style={{margin:'0 auto',padding:'0',textAlign:'left'}}>Date of Birth</Heading>
                            <Input type='date' placeholder='dd/MM/YY' style={{margin:'5px auto 15px',width:'100%'}}/>
                        </div>
                        <div>
                            <Heading size='md' style={{margin:'0 auto',padding:'0',textAlign:'left'}}>Gender</Heading>
                            <select name='gender' id='gender'  style={{margin:'5px auto 15px',width:'100%'}}>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </select>
                        </div>
                        <div>
                        <Heading size='md' style={{margin:'0 auto',padding:'0',textAlign:'left'}}>Phone Number</Heading>
                        <Input type='tel' placeholder='+0123456789' style={{margin:'5px auto 15px',width:'100%'}}/>
                        </div>
                        </form>
                    </StepsContent>
                    <StepsContent index={2}>
                        <div>
                        <HStack>
                        <PinInput otp>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                        </HStack>
                        </div>
                        <Button variant="solid" size="sm">
                        Send OTP
                        </Button>
                    </StepsContent>
                    <StepsCompletedContent>
                        <p>Thank you for signing up! Your account is ready.</p>
                    </StepsCompletedContent>

                    {/* Navigation Buttons */}
                    <Group>
                        <StepsPrevTrigger asChild>
                        <Button variant="outline" size="sm">
                            Previous
                        </Button>
                        </StepsPrevTrigger>
                        <StepsNextTrigger asChild>
                        <Button variant="outline" size="sm">
                            Next
                        </Button>
                        </StepsNextTrigger>
                    </Group>
                </StepsRoot>
            </Container>
        </div>
    )
}