import React, { useState, useEffect, useRef } from 'react';
import './Profile.css';
import ProfileHeader from '../components/Header/ProfileHeader';
import Section from '../components/Section';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects/Projects'; 
import Accomplishments from '../components/Accomplishments';
import { staticProfile } from '../utils/profileData';
import { downloadProfileAsPDF } from '../utils/pdfUtils';
import { useTranslation } from 'react-i18next';

const addVisibleClass = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
};

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
    const sectionRefs = useRef([]);
    const { t } = useTranslation();

    useEffect(() => {
        setProfile(staticProfile);
    }, []);

    useEffect(() => {
        if (!profile) return;

        const observer = new IntersectionObserver(addVisibleClass, { threshold: 0.1 });
        sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
        
        return () => observer.disconnect();
    }, [profile]);

    if (!profile) return <div>Loading...</div>;

    const handleDownload = () => {
        setIsGeneratingPDF(true);
        downloadProfileAsPDF('profile-container').finally(() => setIsGeneratingPDF(false));
    };

    return (
        <div className="profile-container" id="profile-container">
            <ProfileHeader profile={profile} onDownload={handleDownload} isGenerating={isGeneratingPDF} t={t} />
            <Section title={t('about')} ref={el => sectionRefs.current[0] = el}>
                <p dangerouslySetInnerHTML={{ __html: t('profile.summary') }}></p>
            </Section>
            <Section title={t('experience')} ref={el => sectionRefs.current[1] = el}>
                <Experience experience={profile.experience} />
            </Section>
            <Section title={t('education')} ref={el => sectionRefs.current[2] = el}>
                <Education education={profile.education} />
            </Section>
            <Section title={t('skills')} ref={el => sectionRefs.current[3] = el}>
                <Skills skills={profile.skills} />
            </Section>
            {/* <Section title={t('projects')} ref={el => sectionRefs.current[4] = el}>
                <Projects projects={profile.projects} />
            </Section> */}
            <Section title={t('accomplishments')} ref={el => sectionRefs.current[5] = el}>
                <Accomplishments accomplishments={profile.accomplishments} />
            </Section>
        </div>
    );
};

export default Profile;