import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import counter from './counter';
import coinmarketcap from './coinmarketcap';

export default history => combineReducers({
    router: connectRouter(history),
    counter,
    coinmarketcap
});
