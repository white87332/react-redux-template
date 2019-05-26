import React from 'react';
import { useTranslation } from 'react-i18next';

export const Button = React.memo((props) =>
{
    const { t } = useTranslation('common');

    return (
        <button type="button" onClick={() => { props.onClick(); }}>
            {t('clickme')}
        </button>
    );
});
