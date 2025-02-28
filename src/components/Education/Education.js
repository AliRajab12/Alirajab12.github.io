import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Education.css";
const Education = ({ education }) => {
    const { t } = useTranslation();

    return (
        education.map((edu, index) => (
            <div key={index} className="education-item">
                <h3>{t(`profile.education.${index}.degree`, edu.degree)}</h3>
                <p>
                    <i>{t(`profile.education.${index}.institution`, edu.institution)}</i> - 
                    {t(`profile.education.${index}.duration`, edu.duration)}
                </p>
            </div>
        ))
    );
};

export default Education;
