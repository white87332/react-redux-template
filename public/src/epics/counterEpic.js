/* eslint no-unused-vars: ["error", {"args": "Observable"}] */
import { Observable } from 'rxjs';

const counterEpic = (action$) =>
{
    return action$.ofType('INCREMENT_COUNTER').mergeMap((action) => {
        return () => action;
    });
};

export default counterEpic;
