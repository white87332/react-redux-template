import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../reducers';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware();

export default function configureStore(middleware, initialState)
{
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(epicMiddleware, middleware)
        )
    );

    epicMiddleware.run(rootEpic);

    return store;
}
