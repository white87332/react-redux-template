import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Wrapper from '../components/wrapper/wrapper';
import asyncComponent from '../utils/asyncComponent';

export default function createRoutes()
{
    return (
        <Wrapper>
            <Switch>
                <Route exact path="/" component={asyncComponent(() => import('../containers/index/index').then(module => module.default))} />
                {/* <Route exact path="/threeLine" component={asyncComponent(() => import('../containers/threeLine/threeLine').then(module => module.default))} />
                <Route exact path="/counter" component={asyncComponent(() => import('../containers/counter/counter').then(module => module.default))} />
                <Route exact path="/video" component={asyncComponent(() => import('../containers/video/video').then(module => module.default))} /> */}
            </Switch>
        </Wrapper>
    );
}
