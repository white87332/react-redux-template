import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
const GlobalStyle = createGlobalStyle`
    ${styledNormalize}
    body {
        box-sizing: border-box;
    }
`;

export default function Wrapper(props)
{
    const { children } = props;

    return (
        <React.Fragment>
            <GlobalStyle />
            {children}
        </React.Fragment>
    );
}

Wrapper.propTypes = {
    children: PropTypes.object.isRequired
};
