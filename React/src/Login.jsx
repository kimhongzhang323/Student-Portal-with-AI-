
import {Field,Box,Container,Input,defineStyle,Button,Heading } from '@chakra-ui/react';
import "./styles.css";
import {
    PasswordInput,
    PasswordStrengthMeter,
  } from "@/components/ui/password-input";



export default function Login(){
    return(
        <div className='parentContainer'>
            <Container fluid='true' centerContent='true' className='loginPrompt'>
                <div style={{ overflow:'auto',flexWrap:'wrap', padding:'0',margin:'0'}} className='centeredContainer'>
                    <img src="/logo.svg" alt="logo" className='logo' />
                </div>
                <form style={{width:'100%'}}>
                    {/* <Field.Root style={{ margin: '10px auto' }}>
                        <Box pos="relative" w="full">
                            <Input type='text' className='peer' placeholder='' />
                            <Field.Label css={floatingStyles}>Username</Field.Label>
                        </Box>
                    </Field.Root>
                    <Field.Root style={{ margin: '10px auto' }}>
                        <Box pos="relative" w="full">
                            <Input type='password' className='peer' placeholder='' />
                            <Field.Label css={floatingStyles}>Password</Field.Label>
                        </Box>
                    </Field.Root> */}
                    <div className='loginInputs' style={{width:'100%'}}>
                        <Input type='text' placeholder='Username' style={{margin:'10px auto',width:'70%'}}/>
                        <div className='centeredContainer' style={{width:'70%'}}>
                            <PasswordInput style={{margin:'auto'}} placeholder="Password" />
                        </div>      
                    </div>
                    <div className='centeredContainer'>
                        <p style={{fontSize:'0.8rem',fontWeight:'bolder',color:'rgba(0,0,0,0.5'}}> Or continue with</p>
                        <div style={{width:'60%',borderBottom:'1px solid rgba(0,0,0,0.3)',marginLeft:'3%'}}></div>
                    </div>
                    <Button  colorPalette='gray' type='submit' variant={'outline'} className='hoverButton' style={{borderRadius:'30px',padding:'0'}}> 
                        <img src="/googlelogo.svg" alt="google" className='googleTextLogo' style={{width:'100%',height:'100%',margin:'0',padding:'0'}}/>
                    </Button>
                    
                </form>
            </Container>
        </div>
    )
};

// const floatingStyles = defineStyle({
//     pos: "absolute",
//     bg: "bg",
//     px: "0.5",
//     top: "-3",
//     backgroundColor: "transparent",
//     insetStart: "2",
//     fontWeight: "normal",
//     pointerEvents: "none",
//     transition: "position",
//     _peerPlaceholderShown: {
//       color: "fg.muted",
//       top: "2.5",
//       insetStart: "3",
//     },
//     _peerFocusVisible: {
//       color: "gray",
//       top: "-3",
//       insetStart: "2",
//     },
// });