import React from 'react';

const Step = ({stage, num, children, ...rest}) => (
  stage === num ? <div key={num} {...rest}>{children}</div> : null
);

export default Step;