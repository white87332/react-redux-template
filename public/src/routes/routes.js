import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import Main from '../components/main/main';
import Layout from '../components/layout/layout';
import asyncComponent from '../utils/asyncComponent';
import i18n from '../i18n/i18n';

export default function createRoutes()
{
    return (
        <BrowserRouter>
            <I18nextProvider i18n={i18n}>
                <Main>
                    <Layout>
                        <Route exact path="/" component={asyncComponent(() => System.import('../path/index/index').then(module => module.default))} />
                        <Route exact path="/counter" component={asyncComponent(() => System.import('../path/counter/counter').then(module => module.default))} />
                    </Layout>
                </Main>
            </I18nextProvider>
        </BrowserRouter>
    );
}
