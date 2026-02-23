import React from 'react';
import { useTranslation } from 'react-i18next';
import './Experience.css';

const Experience = ({ experience }) => {
    const { t } = useTranslation();

    return (
        <ol className="timeline" aria-label="Work experience timeline">
            {experience.map((job, index) => (
                <li key={index} className="timeline-item">
                    {/* Timeline spine dot */}
                    <div className="timeline-dot" aria-hidden="true" />

                    {/* Card */}
                    <article className="experience-card" aria-label={`${job.job_title} at ${job.company}`}>
                        {/* Meta row */}
                        <div className="exp-meta">
                            <span className="exp-duration">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                                </svg>
                                {t(`profile.experience.${index}.duration`, { defaultValue: job.duration })}
                            </span>
                            <span className="exp-location">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                                </svg>
                                {t(`profile.experience.${index}.location`, { defaultValue: job.location })}
                            </span>
                        </div>

                        {/* Title + company */}
                        <h3 className="exp-title">
                            {t(`profile.experience.${index}.job_title`, { defaultValue: job.job_title })}
                        </h3>
                        <p className="exp-company">
                            {t(`profile.experience.${index}.company`, { defaultValue: job.company })}
                        </p>

                        {/* Description */}
                        <div
                            className="exp-description"
                            dangerouslySetInnerHTML={{
                                __html: t(`profile.experience.${index}.description`, { defaultValue: job.description })
                            }}
                        />
                    </article>
                </li>
            ))}
        </ol>
    );
};

export default Experience;
