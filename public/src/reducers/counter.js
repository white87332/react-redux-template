import update from 'immutability-helper';

const initialState = {
    numbers: 0
};

export default function counter(state = initialState, action = {})
{
    switch (action.type)
    {
        case 'INCREMENT_COUNTER':
            return update(state, {
                numbers: { $set: state.numbers + 1 }
            });

        case 'DECREMENT_COUNTER':
            return update(state, {
                numbers: { $set: state.numbers - 1 }
            });

        default:
            return state;
    }
}
