import { of, from, interval, Observable } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { get } from 'superagent';
import * as tickActions from '../actions/tick';
import * as types from '../constants';

const fetchTickerEpic = (action$, state$) => {
    return action$
        .pipe(
            ofType(types.FETCH_TICKER_REQ),
            switchMap((action) => {
                return from(get(`https://api.coinmarketcap.com/v2/ticker/?limit=${action.query}`))
                .pipe(
                    map((res) => {
                        return tickActions.fetchTickerSuc(
                            res.body.data
                        );
                    }),
                    catchError((err) => {
                        return of(
                            tickActions.fetchTickerErr(
                                err.response
                            )
                        );
                    })
                );
            }),
        );
};

export default [
    fetchTickerEpic
];
