import React from 'react';
import { useAuth } from '../../contexts/auth';

import Layout from '../../components/Layout';
import { Container, UserCard, UserInfos } from './styles';

export default function Home() {
    const { user, Logout } = useAuth();

    async function handleLogout() {
        Logout();
    }

    return(
        <Layout>
            <Container>
                <UserCard >
                    <UserInfos>
                        <h1>{user.name}</h1>
                        <p>Email: {user.email}</p>
                        <p>Estado: {user.state}</p>
                    </UserInfos>
                    <img src={user.avatar} alt="avatar"/>
                </UserCard>
                <button onClick={handleLogout} data-testid="logout-btn">
                    Log out
                </button>
            </Container>
        </Layout>
    );
}