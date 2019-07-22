import React, { useState, useEffect, useReducer } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { hot } from 'react-hot-loader/root';
import { Button } from './button';

function Counter(props)
{
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const { t, i18n } = useTranslation('common');

    // 與 componentDidMount 和 componentDidUpdate 類似:
    useEffect(() => {
        // i18n.changeLanguage('zh-tw');
    });

    const add = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>
                {t('you')}
                &nbsp;
                {t('click')}
                &nbsp;
                {count}
                &nbsp;
                {t('times')}
            </p>
            <Button onClick={add} />
        </div>
    );
}

export default hot((connect()(Counter)));
