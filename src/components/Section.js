import React from 'react';

// Semantic <section> with id + aria-labelledby for screen readers and anchor nav
const Section = React.forwardRef(({ title, children, id }, ref) => {
    const headingId = id || `section-${title?.toLowerCase().replace(/\s+/g, '-')}`;
    return (
        <section
            className="profile-section"
            ref={ref}
            id={headingId}
            aria-labelledby={`${headingId}-heading`}
        >
            <h2 id={`${headingId}-heading`}>{title}</h2>
            {children}
        </section>
    );
});

Section.displayName = 'Section';
export default Section;
