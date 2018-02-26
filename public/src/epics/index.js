import { combineEpics } from 'redux-observable';
import counterEpic from './counterEpic';

const epics = combineEpics(
    counterEpic
);

export default epics;
