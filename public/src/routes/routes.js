// import React from 'react';
// import { Switch, Route } from 'react-router-dom';
//
// import asyncComponent from '../utils/asyncComponent';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from '../components/wrapper/wrapper';

const Index = lazy(() => import('../containers/index/index'));

export default function createRoutes()
{
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Wrapper>
                    <Switch>
                        <Route exact path="/" component={Index} />
                    </Switch>
                </Wrapper>
            </Suspense>
        </Router>
    );
}

// export default function createRoutes()
// {
//     return (
//         <Wrapper>
//             <Switch>
//                 <Route exact path="/" component={asyncComponent(() => import('../containers/index/index').then(module => module.default))} />
//                 {/* <Route exact path="/threeLine" component={asyncComponent(() => import('../containers/threeLine/threeLine').then(module => module.default))} />
//                 <Route exact path="/counter" component={asyncComponent(() => import('../containers/counter/counter').then(module => module.default))} />
//                 <Route exact path="/video" component={asyncComponent(() => import('../containers/video/video').then(module => module.default))} /> */}
//             </Switch>
//         </Wrapper>
//     );
// }
