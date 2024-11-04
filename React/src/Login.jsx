
import {Container } from '@chakra-ui/react';
import "./styles.css";

export default function Login(){
    return(
        <Container  fluid= 'true' centerContent = 'true' className='loginPrompt'>
            <h1>Login</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </Container>
    )
};