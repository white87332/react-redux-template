import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { SCgrid } from './style';

/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
const GlobalStyle = createGlobalStyle`
    ${styledNormalize}
    body {
        box-sizing: border-box;
    }
`;

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
            <React.Fragment>
                <GlobalStyle />
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
            </React.Fragment>
        );
    }
}

Wrapper.propTypes = {
    children: PropTypes.object.isRequired
};

export default Wrapper;
