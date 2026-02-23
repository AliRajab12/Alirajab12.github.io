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

const NAV_SECTIONS = [
    { key: 'about',          label: 'About',          id: 'section-about' },
    { key: 'experience',     label: 'Experience',     id: 'section-experience' },
    { key: 'education',      label: 'Education',      id: 'section-education' },
    { key: 'skills',         label: 'Skills',         id: 'section-skills' },
    { key: 'projects',       label: 'Projects',       id: 'section-projects' },
    { key: 'accomplishments',label: 'Achievements',   id: 'section-accomplishments' },
    { key: 'languages',      label: 'Languages',      id: 'section-languages' },
];

const Profile = () => {
    const [profile, setProfile]           = useState(null);
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
    const [activeSection, setActiveSection]     = useState('');
    const [navVisible, setNavVisible]           = useState(false);
    const [scrollProgress, setScrollProgress]   = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen]   = useState(false);
    const sectionRefs = useRef([]);
    const { t } = useTranslation();

    useEffect(() => { setProfile(staticProfile); }, []);

    // Scroll-reveal + active section + progress bar
    useEffect(() => {
        if (!profile) return;

        // Reveal animation observer
        const revealObserver = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
        );
        sectionRefs.current.forEach(ref => ref && revealObserver.observe(ref));

        // Active section observer (lower threshold so it triggers earlier)
        const activeObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(e => {
                    if (e.isIntersecting) setActiveSection(e.target.id);
                });
            },
            { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
        );
        sectionRefs.current.forEach(ref => ref && activeObserver.observe(ref));

        // Scroll events: nav visibility + progress bar
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(docHeight > 0 ? (scrolled / docHeight) * 100 : 0);
            setNavVisible(scrolled > 120);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            revealObserver.disconnect();
            activeObserver.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, [profile]);

    const scrollToSection = useCallback((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const offset = 72; // nav height
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        setMobileMenuOpen(false);
        // Move focus into section for keyboard users
        el.setAttribute('tabindex', '-1');
        el.focus({ preventScroll: true });
    }, []);

    const handleDownload = useCallback(() => {
        setIsGeneratingPDF(true);
        ReactGA.event({ category: 'User', action: 'Downloaded PDF' });
        downloadProfileAsPDF('profile-container').finally(() => setIsGeneratingPDF(false));
    }, []);

    if (!profile) return (
        <div className="loading-container" role="status" aria-live="polite">
            <div className="loading-content">
                <div className="loading-spinner" aria-hidden="true" />
                <p className="loading-text">Loading portfolio…</p>
            </div>
        </div>
    );

    return (
        <>
            {/* ── Skip to main content (accessibility) ── */}
            <a href="#main-content" className="skip-link">Skip to main content</a>

            <Helmet>
                <title>Ali Rajab — Software Engineer & Product Manager</title>
                <meta name="description" content="Portfolio of Ali Rajab — Software Engineer, Product Manager, and Mobile App Developer specialising in Flutter, Laravel, Web3, and SUI Network." />
                <meta property="og:title" content="Ali Rajab | Software Engineer & Product Manager" />
                <meta property="og:description" content="Explore Ali Rajab's portfolio: Flutter, Laravel, React.js, Web3, SUI Network." />
                <meta property="og:url" content="https://alirajab12.github.io/" />
            </Helmet>

            {/* ── Scroll progress bar ── */}
            <div
                className="scroll-progress"
                role="progressbar"
                aria-valuenow={Math.round(scrollProgress)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Page scroll progress"
            >
                <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
            </div>

            {/* ── Sticky Nav ── */}
            <nav
                className={`profile-nav ${navVisible ? 'visible' : ''}`}
                aria-label="Portfolio sections"
            >
                <div className="nav-content">
                    <span className="nav-brand" aria-hidden="true">Ali Rajab</span>

                    {/* Desktop links */}
                    <ul className="nav-links desktop-only" role="list">
                        {NAV_SECTIONS.map(sec => (
                            <li key={sec.key}>
                                <button
                                    className={`nav-link ${activeSection === sec.id ? 'active' : ''}`}
                                    onClick={() => scrollToSection(sec.id)}
                                    aria-current={activeSection === sec.id ? 'location' : undefined}
                                >
                                    {sec.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile hamburger */}
                    <button
                        className="mobile-menu-toggle mobile-only"
                        onClick={() => setMobileMenuOpen(o => !o)}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-nav-menu"
                        aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile dropdown */}
                <ul
                    id="mobile-nav-menu"
                    className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
                    role="list"
                    aria-label="Mobile navigation"
                >
                    {NAV_SECTIONS.map(sec => (
                        <li key={sec.key}>
                            <button
                                className={`mobile-nav-link ${activeSection === sec.id ? 'active' : ''}`}
                                onClick={() => scrollToSection(sec.id)}
                                aria-current={activeSection === sec.id ? 'location' : undefined}
                            >
                                {sec.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* ── Main content ── */}
            <div className="profile-container" id="profile-container">
                <main id="main-content" tabIndex={-1}>
                    <ProfileHeader
                        profile={profile}
                        onDownload={handleDownload}
                        isGenerating={isGeneratingPDF}
                        t={t}
                        onNavClick={scrollToSection}
                    />

                    <Section title="About"          id="section-about"          ref={el => sectionRefs.current[0] = el}>
                        <p className="about-text" dangerouslySetInnerHTML={{ __html: profile.summary }} />
                    </Section>

                    <Section title="Experience"     id="section-experience"     ref={el => sectionRefs.current[1] = el}>
                        <Experience experience={profile.experience} />
                    </Section>

                    <Section title="Education"      id="section-education"      ref={el => sectionRefs.current[2] = el}>
                        <Education education={profile.education} />
                    </Section>

                    <Section title="Skills"         id="section-skills"         ref={el => sectionRefs.current[3] = el}>
                        <Skills skills={profile.skills} />
                    </Section>

                    <Section title="Projects"       id="section-projects"       ref={el => sectionRefs.current[4] = el}>
                        <Projects projects={profile.projects} />
                    </Section>

                    <Section title="Achievements"   id="section-accomplishments" ref={el => sectionRefs.current[5] = el}>
                        <Accomplishments accomplishments={profile.accomplishments} />
                    </Section>

                    <Section title="Languages"      id="section-languages"      ref={el => sectionRefs.current[6] = el}>
                        <Languages languages={profile.languages} />
                    </Section>
                </main>

                <ScrollToTopButton />
            </div>
        </>
    );
};

export default React.memo(Profile);
