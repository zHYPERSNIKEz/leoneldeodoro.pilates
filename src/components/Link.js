import React from 'react';
import './Link.scss';

const Link = ({ url, title }) => {
  return (
    <a href={url} className="link" target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  );
}

export default Link;
