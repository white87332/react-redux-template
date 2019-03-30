import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';
import createRootReducer from '../reducers';
import rootEpic from '../epics';

export const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware();

export default function configureStore(initialState)
{
    const store = createStore(
        createRootReducer(history), // root reducer with router state,,
        initialState,
        compose(
            applyMiddleware(routerMiddleware(history), epicMiddleware)
        )
    );

    epicMiddleware.run(rootEpic);

    return store;
}
