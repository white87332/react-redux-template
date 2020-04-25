import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Wrapper from '../components/wrapper/wrapper';

export default function createRoutes()
{
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Wrapper>
                    <Switch>
                        <Route exact displayName="index" path="/" component={lazy(() => import('../containers/index/index'))} />
                        <Route exact displayName="counter" path="/counter" component={lazy(() => import('../containers/counter/counter'))} />
                    </Switch>
                </Wrapper>
            </Suspense>
        </BrowserRouter>
    );
}
