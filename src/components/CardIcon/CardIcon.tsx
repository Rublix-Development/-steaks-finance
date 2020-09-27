import React from 'react'
import styled from 'styled-components'
import goldStar from '../../assets/img/Gold-star.png'

interface CardIconProps {
  children?: React.ReactNode,
}

const CardIcon: React.FC<CardIconProps> = ({ children }) => (
  <StyledCardIcon className='star-background'>
    {children}
  </StyledCardIcon>
)

const StyledCardIcon = styled.div` 
  font-size: 24px;
  height: 95px;
  width: 100px;
  align-items: center;
  display: flex;
  justify-content: center;  
  margin: 0 auto ${props => props.theme.spacing[3]}px;
`

export default CardIcon