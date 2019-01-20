import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  ${props => `{
    color: blue;
    padding: 15px 35px;
    margin-left: 30px;
    background-color: #0000ff;
    opacity: ${props.disabled ? '0.4' : '1'}
    color: #fff;
    border-radius: 5px;
  `}}
`

const Button = ({disabled, onClick, children, ...rest}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}

export default Button;