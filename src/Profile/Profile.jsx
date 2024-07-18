import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './Profile.css';
import html2pdf from 'html2pdf.js';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
    const sectionRefs = useRef([]);

    useEffect(() => {
        axios.get('/api/profile')
            .then(response => {
                setProfile(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the profile!', error);
            });
    }, []);

    useEffect(() => {
        if (!profile) return; 

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, [profile]); 

    if (!profile) return <div>Loading...</div>;

    const renderSkills = (skills) => {
        return (
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-item">
                        {skill.title}: {skill.skills.join(', ')}
                    </span>
                ))}
            </div>
        );
    };

    const downloadProfileAsPDF = () => {
        setIsGeneratingPDF(true);

        // Clone the profile container
        const element = document.getElementById('profile-container').cloneNode(true);
    
        // Remove the profile picture and download button
        const profilePic = element.querySelector('.profile-pic');
        const downloadButton = element.querySelector('.download-button');
        if (profilePic) profilePic.remove();
        if (downloadButton) downloadButton.remove();
    
        // Make all sections visible
        const sections = element.querySelectorAll('.profile-section');
        sections.forEach(section => section.classList.add('visible'));
    
        // Configure PDF options
        const opt = {
            margin: 10,
            filename: 'portfolio.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
    
        // Generate PDF
        html2pdf().from(element).set(opt).save().then(() => {
            setIsGeneratingPDF(false);
        });
    };

    return (
        <div className="profile-container" id="profile-container">
            <div className="profile-header">
                <img src="assets/img/profile_img.jpg" alt="Profile" className="profile-pic" />
                <div className="profile-header-info">
                    <h1>{profile.name}</h1>
                    <h2>{profile.headline}</h2>
                    <p>{profile.location}</p>
                    <p>Email: <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a></p>
                    <p>Phone: <a href={`tel:${profile.contact.phone}`}>{profile.contact.phone}</a></p>
                    <p>Linktree: <a href={profile.contact.linktree} target="_blank" rel="noopener noreferrer">Linktree</a></p>
                    <button 
    className="download-button" 
    onClick={downloadProfileAsPDF}
    disabled={isGeneratingPDF}
>
    {isGeneratingPDF ? 'Generating PDF...' : 'Download as PDF'}
</button>
                </div>
            </div>
            
            {/* Render all sections regardless of visibility */}
            <div className="profile-section" ref={el => sectionRefs.current[0] = el}>
                <h2>About</h2>
                <p dangerouslySetInnerHTML={{ __html: profile.summary }}></p>
            </div>
            
            <div className="profile-section" ref={el => sectionRefs.current[1] = el}>
                <h2>Experience</h2>
                {profile.experience.map((job, index) => (
                    <div key={index} className="experience-item">
                        <h3>{job.job_title}</h3>
                        <p><i>{job.company}</i> - {job.duration}</p>
                        <p>{job.location}</p>
                        <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
                    </div>
                ))}
            </div>
            
            <div className="profile-section" ref={el => sectionRefs.current[2] = el}>
                <h2>Education</h2>
                {profile.education.map((edu, index) => (
                    <div key={index} className="education-item">
                        <h3>{edu.degree}</h3>
                        <p><i>{edu.institution}</i> - {edu.duration}</p>
                    </div>
                ))}
            </div>
            
            <div className="profile-section" ref={el => sectionRefs.current[3] = el}>
                <h2>Skills</h2>
                <div className="skill-category">
                    <h3>Project Management</h3>
                    {renderSkills([
                        { title: 'Proficient', skills: ['Team Leadership', 'Agile', 'Clickup'] },
                        { title: 'Familiar', skills: ['Jira'] }
                    ])}
                </div>
                <div className="skill-category">
                    <h3>Mobile Application Development</h3>
                    {renderSkills([
                        { title: 'Proficient', skills: ['Flutter', 'Dart', 'Java', 'UI/UX', 'Google Play', 'App Store', 'App Gallery', 'POS (SUNMI)', 'Figma', 'XCode', 'REST API', 'Ionic', 'Firebase', 'JSON'] },
                        { title: 'Familiar', skills: ['Swift', 'Objective-C'] }
                    ])}
                </div>
                <div className="skill-category">
                    <h3>Web Development</h3>
                    {renderSkills([
                        { title: 'Proficient', skills: ['C#', '.Net core', 'Postman', 'PHP', 'Laravel', 'Javascript', 'Pinia', 'HTML/CSS', 'Bootstrap', 'Tailwind CSS', 'Linux', 'Server Administration', 'AWS', 'Git', 'Github', 'Gitlab', 'Vue.js'] },
                        { title: 'Familiar', skills: ['Typescript', 'React.js', 'Node.js', 'Next.js'] }
                    ])}
                </div>
                <div className="skill-category">
                    <h3>Database Management</h3>
                    {renderSkills([
                        { title: 'Proficient', skills: ['SQL Server', 'MSSQL', 'MySQL', 'SQLite', 'PostgreSQL', 'MongoDB'] }
                    ])}
                </div>
            </div>
            
            <div className="profile-section" ref={el => sectionRefs.current[4] = el}>
                <h2>Accomplishments</h2>
                <div>
                    <h3>Certifications</h3>
                    <ul className="accomplishment-list">
                        {profile.accomplishments.certifications.map((cert, index) => (
                            <li key={index}>{cert}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Languages</h3>
                    <ul className="accomplishment-list">
                        {profile.accomplishments.languages.map((lang, index) => (
                            <li key={index}>{lang}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
