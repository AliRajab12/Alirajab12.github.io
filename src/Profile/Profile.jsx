import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import './Profile.css';
import ProfileHeader from '../components/Header/ProfileHeader';
import Section from '../components/Section';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects'; 
import Accomplishments from '../components/Accomplishments/Accomplishments';
import Languages from '../components/Languages/Languages';
import { staticProfile } from '../utils/profileData';
import { downloadProfileAsPDF } from '../utils/pdfUtils';
import { useTranslation } from 'react-i18next';
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton'; 
import ReactGA from 'react-ga';
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

    const handleDownload = useCallback(() => {
        setIsGeneratingPDF(true);
        ReactGA.event({
            category: 'User',
            action: 'Downloaded PDF',
        });
        downloadProfileAsPDF('profile-container').finally(() => setIsGeneratingPDF(false));
    }, []);

    if (!profile) return <div>Loading...</div>;

    return (
        <div className="profile-container" id="profile-container">
            <Helmet>
                <title>Ali Rajab</title>
                <meta name="description" content="Explore the portfolio of Ali Rajab, showcasing skills in software engineering, product management, and mobile app development (Flutter)." />
                <meta property="og:title" content="My Portfolio | Software Engineer, Product Manager, Mobile App Developer, Flutter" />
                <meta property="og:description" content="Explore the portfolio of Ali Rajab, showcasing skills in software engineering, product management, and mobile app development (Flutter)." />
                <meta property="og:url" content="https://alirajab12.github.io/" />
            </Helmet>
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
            <Section title={t('projects')} ref={el => sectionRefs.current[4] = el}>
                <Projects projects={profile.projects} />
            </Section>
            <Section title={t('accomplishments')} ref={el => sectionRefs.current[5] = el}>
                <Accomplishments accomplishments={profile.accomplishments} />
            </Section>
            <Section title={t('languages')} ref={el => sectionRefs.current[6] = el}>
                <Languages languages={profile.languages} />
            </Section>
            <ScrollToTopButton /> 
        </div>
    );
};

export default React.memo(Profile);
