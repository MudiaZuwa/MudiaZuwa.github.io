import React from 'react';

const ProgramChild = ({ Name, SVGElement }) => {
  return (
    <div className="programChild">
      <SVGElement />
      <p>{Name}</p>
    </div>
  );
};

export default ProgramChild;
