import React from 'react';

const levelEmoji = {
    'Native': '🌟',
    'Professional': '💼',
    'Conversational': '💬',
    'Basic': '📚',
};

const Languages = ({ languages }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {languages.map((lang, index) => {
                // Support both old string format and new object format
                const name  = typeof lang === 'string' ? lang : lang.name;
                const level = typeof lang === 'string' ? null : lang.level;
                return (
                    <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 18px',
                        background: 'var(--card-background)',
                        border: '1px solid rgba(12,155,161,0.2)',
                        borderRadius: '12px',
                        boxShadow: 'var(--shadow-sm)',
                    }}>
                        <span style={{ fontSize: '1.1rem' }}>
                            {levelEmoji[level] || '🗣️'}
                        </span>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-color)' }}>
                                {name}
                            </div>
                            {level && (
                                <div style={{ fontSize: '0.75rem', color: 'var(--primary-color)', fontWeight: 600 }}>
                                    {level}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Languages;
