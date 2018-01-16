import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../components/main/main';
import asyncComponent from '../utils/asyncComponent';

export default function createRoutes()
{
    return (
        <BrowserRouter>
            <Main>
                <Switch>
                    <Route exact path="/" component={asyncComponent(() => import('../containers/index/index').then(module => module.default))} />
                    <Route exact path="/threeLine" component={asyncComponent(() => import('../containers/threeLine/threeLine').then(module => module.default))} />
                    <Route exact path="/counter" component={asyncComponent(() => import('../containers/counter/counter').then(module => module.default))} />
                    <Route exact path="/video" component={asyncComponent(() => import('../containers/video/video').then(module => module.default))} />
                </Switch>
            </Main>
        </BrowserRouter>
    );
}
