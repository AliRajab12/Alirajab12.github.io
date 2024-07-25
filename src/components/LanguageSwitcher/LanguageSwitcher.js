import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';
const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="language-switcher">
            <button
                onClick={() => handleChangeLanguage('en')}
                className="language-button"
            >
                English
            </button>
            <button
                onClick={() => handleChangeLanguage('de')}
                className="language-button"
            >
                German
            </button>
        </div>
    );
};

export default LanguageSwitcher;
