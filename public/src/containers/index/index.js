import React from 'react';
import { translate } from 'react-i18next';
import { hot } from 'react-hot-loader';

@translate(['common'], { wait: true })
class Index extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};
    }

    render()
    {
        return (
            <div className="index">
                index123
            </div>
        );
    }
}

export default hot(module)(Index);
