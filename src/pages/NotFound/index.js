import React from 'react';

import Layout from '../../components/Layout';
import { Container } from './styles';

export default function NotFound() {
    
    return(
        <Layout>
            <Container>
                <h1>Oooops!!</h1>
                <strong>Request was not matched</strong>
                <p>It looks like this url address doesn't exist...</p>
                <a href="/">Return</a>
            </Container>
        </Layout>
    );
}