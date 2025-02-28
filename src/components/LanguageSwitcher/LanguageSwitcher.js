import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className={`language-switcher ${isMobile ? 'mobile' : ''}`}>
            <button
                onClick={() => handleChangeLanguage('en')}
                className="language-button"
            >
                {isMobile ? 'En' : 'English'}
            </button>
            <button
                onClick={() => handleChangeLanguage('de')}
                className="language-button"
            >
                {isMobile ? 'De' : 'German'}
            </button>
        </div>
    );
};

export default LanguageSwitcher;
