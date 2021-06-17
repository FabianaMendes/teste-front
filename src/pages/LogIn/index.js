import React, { useState } from 'react';
import { useAuth } from '../../contexts/auth';

import { Container, InputsBlock } from './styles';
import Layout from '../../components/Layout';

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { Login } = useAuth();

    const handleLogin = (event) => {
        event.preventDefault();
        const loginData = {email, password}
        Login(loginData);
    }

    return(
        <Layout>
            <Container>
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <InputsBlock>
                        <label htmlFor="email">E-mail</label>
                        <input
                            required
                            id="email"
                            data-testid="email"
                            name="email"
                            type="email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <label htmlFor="password">Senha</label>
                        <input
                            required
                            id="password"
                            data-testid="password"
                            name="password"
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </InputsBlock>
                    <button type="submit" data-testid="login-btn">Login</button>
                </form>
            </Container>
        </Layout>
    );
}