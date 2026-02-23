import React from 'react';
import { useTranslation } from 'react-i18next';

const Languages = ({ languages }) => {
    const { t } = useTranslation();
    return (
        <div>
            <ul className="accomplishment-list">
                {languages.map((lang, index) => (
                    <li key={index}>{t(`profile.languages.${lang}`, { defaultValue: lang })}</li>
                ))}
            </ul>
        </div>
    );
};

export default Languages;
