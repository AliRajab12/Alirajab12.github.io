import React from 'react';

const Skills = ({ skills }) => (
    <div className="skills-list">
        {Object.keys(skills).map((category, index) => (
            <div key={index} className="skill-category">
                <h3>{category}</h3>
                {Object.keys(skills[category]).map((level, index) => (
                    <div key={index}>
                        <h4>{level}</h4>
                        <span>{skills[category][level].join(', ')}</span>
                    </div>
                ))}
            </div>
        ))}
    </div>
);

export default Skills;
