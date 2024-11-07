import {Field,Box,Container,Input,defineStyle,Button,Heading } from '@chakra-ui/react';
import "./styles.css";
import {
    PasswordInput,
    PasswordStrengthMeter,
  } from "@/components/ui/password-input";

export default function SignUp(){
    return(
        <div className='parentContainer'>
            <Container fluid='true' centerContent='true' className='loginPrompt'>
                <div style={{ overflow:'auto',flexWrap:'wrap', padding:'0',margin:'0'}} className='centeredContainer'>
                    <img src="/logo.svg" alt="logo" className='logo' />
                </div>
                <div style={{justifyContent:'flex-start',display:'flex',width:'80%'}}>
                    <Heading size='lg' style={{padding:'0',textAlign:'left'}}>Sign Up</Heading>
                </div>
                
                <form style={{width:'100%'}}>
                    <div className='loginInputs centeredContainer' style={{flexDirection:'column'}}>
                        <div style={{width:'90%'}}>
                            <Heading size='md' style={{margin:'0 auto',padding:'0',textAlign:'left'}}>Email</Heading>
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
                    <Button variant='subtle' type='submit' style={{width:'90%'}} className='blackButton'>
                        Sign In
                    </Button>
                </form>
                <div className='centeredContainer' style={{width:'100%'}}>
                    <p style={{fontSize:'0.8rem',fontWeight:'bolder',color:'rgba(0,0,0,0.5'}}> Or continue with</p>
                    <div style={{width:'50%',borderBottom:'1px solid rgba(0,0,0,0.3)',marginLeft:'3%'}}></div>
                </div>
                <form>
                    <Button  colorPalette='gray' type='submit' variant={'outline'} className='hoverButton' style={{borderRadius:'30px',padding:'0'}}> 
                        <img src="/googlelogo.svg" alt="google" className='googleTextLogo' style={{width:'100%',height:'100%',margin:'0',padding:'0'}}/>
                    </Button>
                </form>
            </Container>
        </div>
    )
}