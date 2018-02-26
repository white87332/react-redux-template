import { Observable } from 'rxjs';

const counterEpic = (action$) =>
{
    return action$.ofType('INCREMENT_COUNTER').mergeMap((action) => {

        return Observable
            .filter(action => action.type === 'DECREMENT_COUNTER')
            .mapTo({ type: 'INCREMENT_COUNTER' });
    });
};

export default counterEpic;
