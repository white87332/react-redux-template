// import { get } from 'superagent';

export function increment()
{
    // return (dispatch) => {
    //     // let res = await get('http://165.227.109.186:5566/overview');
    //     // dispatch({
    //     //     type: 'INCREMENT_COUNTER'
    //     // });
    //     // let res2 = await get('http://165.227.109.186:5566/videooverview');
    //     // dispatch({
    //     //     type: 'DECREMENT_COUNTER'
    //     // });
    //
    //     // let res = await Promise.all([get('http://165.227.109.186:5566/overview'), get('http://165.227.109.186:5566/videooverview')]);
    //     return dispatch({
    //         type: 'INCREMENT_COUNTER'
    //     });
    // };

    return {
        type: 'COUNTER_ADD$'
    };
}

export function incrementSuc()
{
    return {
        type: 'COUNTER_ADD_SUC'
    };
}

export function decrement()
{
    return {
        type: 'COUNTER_DES$'
    };
}

export function decrementSuc()
{
    return {
        type: 'COUNTER_DES_SUC'
    };
}

// export function incrementIfOdd()
// {
//     return (dispatch, getState) =>
//     {
//         const { counter } = getState();
//         if (counter.numbers % 2 === 0)
//         {
//             return;
//         }
//
//         dispatch(increment());
//     };
// }

// export function incrementAsync(delay = 1000)
// {
//     return (dispatch) =>
//     {
//         setTimeout(() =>
//         {
//             dispatch(increment());
//         }, delay);
//     };
// }
