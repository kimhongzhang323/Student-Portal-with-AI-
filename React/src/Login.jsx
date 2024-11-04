
import {Container } from '@chakra-ui/react';
import "./styles.css";

export default function Login(){
    return(
        <div className='parentContainer'>
            <Container  fluid= 'true' centerContent = 'true' className='loginPrompt'>
                <h1>Login</h1>
                <form>
                    <label>
                        Username:
                    </label>
                    <input type="text" name="username" />
                    <br />
                    <label>
                        Password:
                    </label>
                    <input type="password" name="password" />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </Container>
        </div>
    )
};