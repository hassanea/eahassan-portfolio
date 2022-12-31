import React from 'react';

const SkipNav = (props) => {
  return (
    <div>
    <a href="#mainContent" className="skip-link sr-only sr-only-focusable" title="Skip to main content" aria-label="Skip to main content">{props.title}</a>
    </div>
  )
};
export default SkipNav;