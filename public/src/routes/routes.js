import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../components/main/main';
import asyncComponent from '../utils/asyncComponent';

export default function createRoutes()
{
    return (
        <BrowserRouter>
            <Switch>
                <Main>
                    <Route exact path="/" component={asyncComponent(() => System.import('../containers/index/index').then(module => module.default))} />
                    <Route exact path="/counter" component={asyncComponent(() => System.import('../containers/counter/counter').then(module => module.default))} />
                    <Route exact path="/counter/test" component={asyncComponent(() => System.import('../containers/test/test').then(module => module.default))} />
                </Main>
            </Switch>
        </BrowserRouter>
    );
}
