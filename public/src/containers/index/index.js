import React from 'react';
import { translate } from 'react-i18next';
import './index.scss';

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
                index
            </div>
        );
    }
}

export default Index;
