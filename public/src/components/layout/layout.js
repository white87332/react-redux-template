import React from 'react';
import { Link } from 'react-router-dom';

class Layout extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};
    }

    render()
    {
        return (
            <div>
                <Link to="/">index</Link>&nbsp;&nbsp;
                <Link to="/counter">counter</Link>
                {this.props.children}
            </div>
        );
    }
}

Layout.propTypes = {
    children: React.PropTypes.object.isRequired
};

export default Layout;
