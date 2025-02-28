import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Experience.css";
const Experience = ({ experience }) => {
    const { t } = useTranslation();

    return (
        experience.map((job, index) => (
            <div key={index} className="experience-item">
                <h3>{t(`profile.experience.${index}.job_title`, job.job_title)}</h3>
                <p>
                    <i>{t(`profile.experience.${index}.company`, job.company)}</i> - {t(`profile.experience.${index}.duration`, job.duration)}
                </p>
                <p>{t(`profile.experience.${index}.location`, job.location)}</p>
                <p dangerouslySetInnerHTML={{ __html: t(`profile.experience.${index}.description`, job.description) }}></p>
            </div>
        ))
    );
};

export default Experience;
