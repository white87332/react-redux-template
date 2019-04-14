export function increment()
{
    return {
        type: 'COUNTER_ADD'
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
        type: 'COUNTER_DES'
    };
}

export function decrementSuc()
{
    return {
        type: 'COUNTER_DES_SUC'
    };
}
