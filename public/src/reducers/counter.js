import update from 'immutability-helper';

const initialState = {
    numbers: 0
};

export default function counter(state = initialState, action = {})
{
    switch (action.type)
    {
        case 'COUNTER_ADD_SUC':
            return update(state, {
                numbers: { $set: state.numbers + 1 }
            });

        case 'COUNTER_DES_SUC':
            return update(state, {
                numbers: { $set: state.numbers - 1 }
            });

        default:
            return state;
    }
}
