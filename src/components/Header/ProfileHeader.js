import React from 'react';
import { useTranslation } from 'react-i18next';
import './ProfileHeader.css';
const ProfileHeader = ({ profile, onDownload, isGenerating }) => {
    const { t } = useTranslation();

    return (
        <div className="profile-header">
            <img src="/assets/img/profile_img.jpg" alt="Profile" className="profile-pic" />
            <div className="profile-header-info">
                <h1>{t('profile.name')}</h1>
                <h2>{t('profile.headline')}</h2>
                <p>{t('profile.location')}</p>
                <p>Email: <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a></p>
                <p>Phone: <a href={`tel:${profile.contact.phone}`}>{profile.contact.phone}</a></p>
                <p>Linktree: <a href={profile.contact.linktree} target="_blank" rel="noopener noreferrer">Linktree</a></p>
                <button className="download-button" onClick={onDownload} disabled={isGenerating}>
                    {isGenerating ? t('profileHeader.generatingPDF') : t('profileHeader.downloadButton')}
                </button>
            </div>
        </div>
    );
};

export default ProfileHeader;
