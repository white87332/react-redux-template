import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

function Index(props)
{
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const { t, i18n } = useTranslation('common');

    // 與 componentDidMount 和 componentDidUpdate 類似:
    useEffect(() => {
        // i18n.changeLanguage('zh-tw');
    });

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
            <button onClick={() => setCount(count + 1)}>
                {t('clickme')}
            </button>
        </div>
    );
}

export default connect()(Index);
