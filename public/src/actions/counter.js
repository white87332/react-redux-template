import { get } from 'superagent';

export function increment()
{
    return async (dispatch) => {
        let res = await get('http://165.227.109.186:5566/overview');
        dispatch({
            type: 'INCREMENT_COUNTER'
        });
        let res2 = await get('http://165.227.109.186:5566/videooverview');
        dispatch({
            type: 'DECREMENT_COUNTER'
        });
    };


    // return {
    //     type: 'INCREMENT_COUNTER'
    // };
}

export function decrement()
{
    return {
        type: 'DECREMENT_COUNTER'
    };
}

export function incrementIfOdd()
{
    return (dispatch, getState) =>
    {
        const { counter } = getState();
        if (counter.numbers % 2 === 0)
        {
            return;
        }

        dispatch(increment());
    };
}

export function incrementAsync(delay = 1000)
{
    return (dispatch) =>
    {
        setTimeout(() =>
        {
            dispatch(increment());
        }, delay);
    };
}
