import { combineEpics } from 'redux-observable';
import counter from './counter';
import coinmarketcap from './coinmarketcap';

const epics = combineEpics(
    ...counter,
    ...coinmarketcap
);

export default epics;
