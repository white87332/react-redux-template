import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../reducers';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore(middleware, initialState)
{
    const enhancer = applyMiddleware(epicMiddleware, middleware);
    return createStore(rootReducer, initialState, enhancer);
}
