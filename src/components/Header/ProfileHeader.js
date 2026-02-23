import React from 'react';
import { useTranslation } from 'react-i18next';
import './ProfileHeader.css';

const ProfileHeader = ({ profile, onDownload, isGenerating }) => {
    const { t } = useTranslation();

    return (
        <header className="profile-header">
            <div className="header-main">
                {/* Avatar */}
                <div className="avatar-wrapper">
                    <img src="/assets/img/profile_img.jpg" alt="Ali Rajab" className="profile-pic" />
                    <span className="online-dot" title="Open to opportunities" />
                </div>

                {/* Identity */}
                <div className="header-identity">
                    <h1 className="header-name">{profile.name}</h1>

                    {/* Roles pills */}
                    {profile.roles && (
                        <div className="header-roles">
                            {profile.roles.map((role, i) => (
                                <span key={i} className="role-pill">{role}</span>
                            ))}
                        </div>
                    )}

                    {profile.tagline && (
                        <p className="header-tagline">{profile.tagline}</p>
                    )}

                    <p className="header-location">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        {profile.location}
                    </p>

                    {/* Contact links */}
                    <div className="header-contacts">
                        <a href={`mailto:${profile.contact.email}`} className="contact-link">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                            {profile.contact.email}
                        </a>
                        <a href={`tel:${profile.contact.phone}`} className="contact-link">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/>
                            </svg>
                            {profile.contact.phone}
                        </a>
                        <a href={profile.contact.linktree} target="_blank" rel="noopener noreferrer" className="contact-link">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
                            </svg>
                            Linktree
                        </a>
                        {profile.contact.github && (
                            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                </svg>
                                GitHub
                            </a>
                        )}
                    </div>

                    {/* CTA buttons */}
                    <div className="header-actions">
                        <button className="btn-primary download-button" onClick={onDownload} disabled={isGenerating}>
                            {isGenerating ? (
                                <>
                                    <span className="spinner-sm" />
                                    {t('profileHeader.generatingPDF')}
                                </>
                            ) : (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                    {t('profileHeader.downloadButton')}
                                </>
                            )}
                        </button>
                        <a href={`mailto:${profile.contact.email}`} className="btn-secondary">
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>

            {/* Stats row */}
            {profile.stats && (
                <div className="header-stats">
                    {profile.stats.map((stat, i) => (
                        <div key={i} className="stat-item">
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </header>
    );
};

export default ProfileHeader;
