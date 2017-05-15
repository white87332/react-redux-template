import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
                <ul>
                    <li><Link to="/" >counter</Link></li>
                    <li><Link to="/counter" >counter</Link></li>
                    <li><Link to="/counter/test" >counterId</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

Main.propTypes = {
    children: PropTypes.array.isRequired
};

export default Main;
