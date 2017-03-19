import React from 'react';
import update from 'react-addons-update';

export default function asyncComponent(getComponent)
{
    return class AsyncComponent extends React.Component
    {
        static Component = null;

        constructor(props, context)
        {
            super(props, context);
            this.state = {
                Component: AsyncComponent.Component
            };
        }

        componentWillMount()
        {
            if (!this.state.Component)
            {
                getComponent().then((Component) =>
                {
                    AsyncComponent.Component = Component;
                    this.setState(update(this.state, {
                        Component: { $set: Component }
                    }));
                });
            }
        }

        render()
        {
            const { Component } = this.state;
            if (Component)
            {
                return <Component {...this.props} />;
            }
            return null;
        }
    };
}
