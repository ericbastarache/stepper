import React from 'react';

const Step = ({stage, num, children, ...rest}) => (
  stage === num ? <div key={num}>{children}</div> : null
);

export default Step;