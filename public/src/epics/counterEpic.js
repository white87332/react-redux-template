import { switchMap, map } from 'rxjs/operators';
import { incrementSuc, decrementSuc } from '../actions/counter';

const counterAddEpic = (action$) => {
    return (
        action$.ofType('COUNTER_ADD$').pipe(
            switchMap((action) => {
                // return observable, promise, or array
                return Promise.resolve(action);
            }),
            map(() => {
                return incrementSuc();
            })
        )
    );
};

const counterDesEpic = (action$) => {
    return (
        action$.ofType('COUNTER_DES$').pipe(
            switchMap((action) => {
                // return observable, promise, or array
                return Promise.resolve(action);
            }),
            map(() => {
                return decrementSuc();
            })
        )
    );
};

export default [
    counterAddEpic,
    counterDesEpic
];
