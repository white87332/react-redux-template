import React from 'react';
import { translate } from 'react-i18next';

@translate(['common'], { wait: true })
class Test extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};
    }

    render()
    {
        return (
            <div className="test">
                test
            </div>
        );
    }
}

export default Test;
