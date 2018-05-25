import { combineEpics } from 'redux-observable';
import counterEpics from './counterEpic';

const epics = combineEpics(
    ...counterEpics
);

export default epics;
