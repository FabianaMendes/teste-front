import React, { useState } from 'react';
import { useAuth } from '../../contexts/auth';

import { Container, InputsBlock } from './styles';

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { Login } = useAuth();

    const handleLogin = (event) => {
        event.preventDefault();
        const loginData = {email, password}
        Login(loginData)
        console.log(loginData)
    }

    return(
        <Container>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>

                <InputsBlock>
                    <label htmlFor="email">E-mail</label>
                    <input
                        required
                        id="email"
                        name="email"
                        type="email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                
                    <label htmlFor="password">Senha</label>
                    <input
                        required
                        id="password"
                        name="password"
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </InputsBlock>

                <button type="submit" >Login</button>
            </form>
        </Container>
    );
}