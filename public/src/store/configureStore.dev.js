import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../reducers';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore(middleware, initialState)
{
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            // applyMiddleware(thunk, middleware),
            applyMiddleware(epicMiddleware, middleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    if (module.hot)
    {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () =>
        {
            store.replaceReducer(require('../reducers').default);
        });
    }

    return store;
}
