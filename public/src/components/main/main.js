import React from 'react';
import PropTypes from 'prop-types';
import './main.scss';

class Main extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

Main.propTypes = {
    children: PropTypes.array.isRequired
};

export default Main;
