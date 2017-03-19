import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from '../components/main/main';
import Layout from '../components/layout/layout';
import asyncComponent from '../utils/asyncComponent';

export default function createRoutes()
{
    return (
        <BrowserRouter>
            <Main>
                <Layout>
                    <Route exactly pattern="/" component={asyncComponent(() => System.import('../path/counter/counter').then(module => module.default))} />
                </Layout>
            </Main>
        </BrowserRouter>
    );
}
