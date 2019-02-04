import React from 'react';
import styled from 'styled-components';

const ProgressBar = styled.div`
${props => `{
  height: 20px;  /* Can be anything */
  position: relative;
  background: transparent;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  border-radius: ${props.rounded ? '25px' : '0px'};
  padding: 10px;
  box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
}`}
`

const ProgressFill = styled.span`
  ${props => `{
    display: block;
    height: 100%;
    border-radius: ${props.rounded ? '25px' : '0px'};
    background-color: ${props.backgroundColor};
    color: ${props.color}
    width: ${props.children};
    box-shadow: 
      inset 0 2px 9px  rgba(255,255,255,0.3),
      inset 0 -2px 6px rgba(0,0,0,0.4);
    position: relative;
    overflow: ${props.children === '0%' ? 'visible' : 'hidden'};
  }`}
`

const Progress = ({
  background,
  color,
  completed,
  rounded,
  ...rest
}) => {
  return (
    <ProgressBar className='progress'>
      <ProgressFill
        backgroundColor={background}
        color={color}
        rounded={rounded}
        {...rest}
      >
        {`${completed}%`}
      </ProgressFill>
    </ProgressBar>
  )
}

export default Progress;