import React from 'react';
import "./Accomplishments.css";
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
       
    </>
);

export default Accomplishments;
