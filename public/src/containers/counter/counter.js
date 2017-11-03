import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import i18n from '../../i18n/i18n';
import { makeCounterSelector } from '../../selectors/selectors';
import * as counterActions from '../../actions/counter';
import './counter.scss';

const mapStateToProps = createStructuredSelector({
    counter: makeCounterSelector()
});

const mapDispatchToProps = (dispatch) =>
{
    return bindActionCreators(counterActions, dispatch);
};

@translate(['common'], { wait: true })
class Counter extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};
    }

    componentDidMount()
    {
        i18n.changeLanguage('en');
    }

    render()
    {
        const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
        return (
            <div className="counter">
                Clicked: {counter.numbers} times
                {' '}
                <button onClick={increment}>+</button>
                {' '}
                <button onClick={decrement}>-</button>
                {' '}
                <button onClick={incrementIfOdd}>Increment if odd</button>
                {' '}
                <button onClick={() => incrementAsync()}>Increment async</button>
            </div>
        );
    }
}

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
