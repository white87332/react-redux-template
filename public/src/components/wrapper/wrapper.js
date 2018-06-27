import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SCgrid } from './style';

class Wrapper extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        const { children } = this.props;
        return (
            <SCgrid className="grid">
                <div className="menu">
                    <div className="item logo">
                        <div>
                            react-redux-template
                        </div>
                    </div>
                    <div className="item">
                        <Link href="/" to="/">
                            index
                        </Link>
                    </div>
                    <div className="item">
                        <Link href="/counter" to="/counter">
                            counter
                        </Link>
                    </div>
                    <div className="item">
                        <Link href="/threeLine" to="/threeLine">
                            three-line
                        </Link>
                    </div>
                    <div className="item">
                        <Link href="/video" to="/video">
                            video
                        </Link>
                    </div>
                </div>
                <div className="children">
                    {children}
                </div>
            </SCgrid>
        );
    }
}

Wrapper.propTypes = {
    children: PropTypes.object.isRequired
};

export default Wrapper;
