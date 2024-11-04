
import {Field,Box,Container,Input,defineStyle,Button,Heading } from '@chakra-ui/react';
import "./styles.css";



export default function Login(){
    return(
        <div className='parentContainer'>
            <Container  fluid= 'true' centerContent = 'true' className='loginPrompt'>
                <Heading size='2xl'>Login</Heading>
                <form>
                    <Field.Root style={{margin:'10px'}}>
                        <Box pos="relative" w="full">
                            <Input type='text' className='peer' placeholder='' />
                            <Field.Label css={floatingStyles}>Username</Field.Label>
                        </Box>
                    </Field.Root>
                    <Field.Root style={{margin:'10px'}}>
                        <Box pos="relative" w="full">
                            <Input  type='password' className='peer' placeholder='' />
                            <Field.Label css={floatingStyles}>Password</Field.Label>
                        </Box>
                    </Field.Root>
                    <Button colorPalette='blue' type='submit'>Submit</Button>
                </form>
            </Container>
        </div>
    )
};

const floatingStyles = defineStyle({
    pos: "absolute",
    bg: "bg",
    px: "0.5",
    top: "-3",
    backgroundColor: "transparent",
    insetStart: "2",
    fontWeight: "normal",
    pointerEvents: "none",
    transition: "position",
    _peerPlaceholderShown: {
      color: "fg.muted",
      top: "2.5",
      insetStart: "3",
    },
    _peerFocusVisible: {
      color: "gray",
      top: "-3",
      insetStart: "2",
    },
});