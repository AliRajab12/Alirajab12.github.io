import React from 'react';

const Section = React.forwardRef(({ title, children }, ref) => (
    <div className="profile-section" ref={ref}>
        <h2>{title}</h2>
        {children}
    </div>
));

export default Section;
