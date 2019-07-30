import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { I18nextProvider } from 'react-i18next';
import configureStore, { history } from '../store/configureStore';
import createRoutes from '../routes/routes';
import i18n from '../i18n/i18n';

// store
const store = configureStore();

// routes
const routes = createRoutes();

const renderDom = () => {
    return (
        render(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <I18nextProvider i18n={i18n}>
                        {routes}
                    </I18nextProvider>
                </ConnectedRouter>
            </Provider>,
            document.getElementById('root')
        )
    );
};

if (process.env.NODE_ENV === 'production')
{
    renderDom();
}
else
{
    const { hot } = require('react-hot-loader/root');
    hot(renderDom());
}
