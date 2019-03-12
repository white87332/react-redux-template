// import React, { useState } from 'react';
// import { connect } from 'react-redux';
//
// function Counter()
// {
//     // Declare a new state variable, which we'll call "count"
//     const [count, setCount] = useState(0);
//
//     return (
//         <div>
//             <p>
//               You clicked
//                 {count}
//               times
//             </p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// }
//
// export default connect()(Counter);

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeCounterSelector } from '../../selectors/selectors';
import * as counterActions from '../../actions/counter';

const mapStateToProps = createStructuredSelector({
    counter: makeCounterSelector()
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(counterActions, dispatch);
};

// @withNamespaces(['common'], { wait: true })
class Counter extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};
    }

    render()
    {
        return (
            <div className="counter">
                123
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
