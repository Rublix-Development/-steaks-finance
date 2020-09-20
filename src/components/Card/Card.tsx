import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

const StyledCard = styled.div`
  background: ${(props) => props.theme.color.grey[200]};  
  box-shadow: 2px 2px #c2c2c2;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Card
