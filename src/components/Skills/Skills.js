import React, { useState } from 'react';
import './Skills.css';

const proficiencyConfig = {
    'Proficient': { label: 'Proficient', color: 'var(--primary-color)', bg: 'rgba(12,155,161,0.1)', border: 'rgba(12,155,161,0.3)' },
    'Familiar':   { label: 'Familiar',   color: '#7c3aed',              bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.25)' },
};

const Skills = ({ skills }) => {
    const [expanded, setExpanded] = useState(null);
    const categories = Object.keys(skills);

    return (
        <div className="skills-wrapper">
            {categories.map((category, idx) => {
                const cat = skills[category];
                const icon = cat.icon;
                // Only keep entries whose value is an Array (the proficiency levels)
                const levels = Object.fromEntries(
                    Object.entries(cat).filter(([key, val]) => Array.isArray(val))
                );
                const isOpen = expanded === category;
                // Count total skills
                const totalSkills = Object.values(levels).reduce((acc, arr) => acc + arr.length, 0);

                return (
                    <div key={idx} className={`skill-category-card ${isOpen ? 'open' : ''}`}>
                        <button
                            className="skill-category-header"
                            onClick={() => setExpanded(isOpen ? null : category)}
                            aria-expanded={isOpen}
                        >
                            <div className="skill-category-left">
                                <span className="skill-icon">{icon || '🔧'}</span>
                                <span className="skill-category-name">{category}</span>
                            </div>
                            <div className="skill-category-right">
                                <span className="skill-count">{totalSkills} skills</span>
                                <span className={`chevron ${isOpen ? 'up' : 'down'}`}>›</span>
                            </div>
                        </button>

                        {isOpen && (
                            <div className="skill-levels">
                                {Object.keys(levels).map((level, li) => {
                                    const config = proficiencyConfig[level] || proficiencyConfig['Familiar'];
                                    return (
                                        <div key={li} className="skill-level-group">
                                            <span
                                                className="level-label"
                                                style={{ color: config.color }}
                                            >
                                                {level}
                                            </span>
                                            <div className="skill-tags">
                                                {levels[level].map((skill, si) => (
                                                    <span
                                                        key={si}
                                                        className="skill-tag"
                                                        style={{
                                                            background: config.bg,
                                                            borderColor: config.border,
                                                            color: config.color,
                                                        }}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Skills;
