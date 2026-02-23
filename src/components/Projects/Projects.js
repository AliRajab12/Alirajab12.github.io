import React, { useState, useMemo } from 'react';
import './Projects.css';

const categoryColors = {
    'All':    { bg: 'var(--primary-color)', text: '#fff' },
    'Web3':   { bg: '#7c3aed', text: '#fff' },
    'Web':    { bg: '#0369a1', text: '#fff' },
    'Mobile': { bg: '#059669', text: '#fff' },
};

const statusConfig = {
    'Live':      { emoji: '🟢', label: 'Live' },
    'Completed': { emoji: '✅', label: 'Completed' },
    'In Progress': { emoji: '🔄', label: 'In Progress' },
};

const Projects = ({ projects }) => {
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = useMemo(() => {
        const cats = ['All', ...new Set(projects.map(p => p.category))];
        return cats;
    }, [projects]);

    const filtered = useMemo(() => {
        if (activeFilter === 'All') return projects;
        return projects.filter(p => p.category === activeFilter);
    }, [projects, activeFilter]);

    return (
        <div className="projects-wrapper">
            {/* Filter bar */}
            <div className="projects-filter-bar">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                        style={activeFilter === cat ? {
                            background: categoryColors[cat]?.bg || 'var(--primary-color)',
                            color: categoryColors[cat]?.text || '#fff',
                        } : {}}
                        onClick={() => setActiveFilter(cat)}
                        aria-pressed={activeFilter === cat}
                        aria-label={`Filter by ${cat} — ${cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length} project${projects.length === 1 ? '' : 's'}`}
                    >
                        {cat}
                        <span className="filter-count" aria-hidden="true">
                            {cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length}
                        </span>
                    </button>
                ))}
            </div>

            {/* Projects grid */}
            <div
                className="projects-grid"
                role="region"
                aria-label={`${activeFilter} projects`}
                aria-live="polite"
                aria-atomic="false"
            >
                {filtered.length === 0 ? (
                    <div className="projects-empty" role="status">
                        <span aria-hidden="true">🔍</span>
                        <p>No projects in this category yet — check back soon!</p>
                        <button className="filter-btn" onClick={() => setActiveFilter('All')}>
                            Show all projects
                        </button>
                    </div>
                ) : filtered.map((project, index) => {
                    const catColor = categoryColors[project.category] || categoryColors['Web'];
                    const status = statusConfig[project.status] || statusConfig['Completed'];
                    return (
                        <div
                            key={index}
                            className={`project-card ${project.featured ? 'featured' : ''}`}
                            style={{ '--cat-color': catColor.bg }}
                        >
                            {/* Card header stripe */}
                            <div className="card-stripe" style={{ background: catColor.bg }} />

                            {/* Badges */}
                            <div className="card-badges">
                                <span
                                    className="badge category-badge"
                                    style={{ background: catColor.bg, color: catColor.text }}
                                >
                                    {project.category}
                                </span>
                                {project.featured && (
                                    <span className="badge featured-badge">⭐ Featured</span>
                                )}
                                <span className="badge status-badge">
                                    {status.emoji} {status.label}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="project-title">{project.title}</h3>

                            {/* Description */}
                            <p className="project-description">{project.description}</p>

                            {/* Highlights */}
                            {project.highlights && project.highlights.length > 0 && (
                                <ul className="project-highlights">
                                    {project.highlights.map((h, i) => (
                                        <li key={i}>{h}</li>
                                    ))}
                                </ul>
                            )}

                            {/* Footer */}
                            <div className="card-footer">
                                {/* Tech tags */}
                                <div className="project-technologies">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                {/* Links */}
                                {(project.githubLink || project.liveLink) && (
                                    <div className="project-links">
                                        {project.githubLink && (
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link-btn github-btn">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                                GitHub
                                            </a>
                                        )}
                                        {project.liveLink && (
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="link-btn live-btn">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                                                    <polyline points="15 3 21 3 21 9"/>
                                                    <line x1="10" y1="14" x2="21" y2="3"/>
                                                </svg>
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
