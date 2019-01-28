import React from 'react';
import styled from 'styled-components';

const ProgressBar = styled.div`
  height: 20px;  /* Can be anything */
  position: relative;
  background: transparent;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  border-radius: 25px;
  padding: 10px;
  box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
`

const ProgressFill = styled.span`
  ${props => `{
    display: block;
    height: 100%;
    border-radius: 25px;
    background-color: ${props.children === '0%' ? '#fff' : '#0000ff'};
    color: ${props.children === '0%' ? '#000' : '#fff'}
    width: ${props.children};
    box-shadow: 
      inset 0 2px 9px  rgba(255,255,255,0.3),
      inset 0 -2px 6px rgba(0,0,0,0.4);
    position: relative;
    overflow: ${props.children === '0%' ? 'visible' : 'hidden'};
  }`}
`

const Progress = ({completed, ...rest}) => {
  return (
    <ProgressBar className='progress' {...rest}>
      <ProgressFill>{`${completed}%`}</ProgressFill>
    </ProgressBar>
  )
}

export default Progress;