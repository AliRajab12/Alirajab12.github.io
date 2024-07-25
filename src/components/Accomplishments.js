import React from 'react';

const Accomplishments = ({ accomplishments }) => (
    <>
        <div>
            <h3>Certifications</h3>
            <ul className="accomplishment-list">
                {accomplishments.certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                ))}
            </ul>
        </div>
        <div>
            <h3>Languages</h3>
            <ul className="accomplishment-list">
                {accomplishments.languages.map((lang, index) => (
                    <li key={index}>{lang}</li>
                ))}
            </ul>
        </div>
    </>
);

export default Accomplishments;
