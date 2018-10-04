import React from 'react';

const InfoBlock = ({ children, title }) => (
  <div className="info-block">
    <h4>{title}</h4>
    {children}
  </div>
);


export default InfoBlock;