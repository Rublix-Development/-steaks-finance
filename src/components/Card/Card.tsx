import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

const StyledCard = styled.div`
  background: #312726CC;  
  box-shadow: 0 0 6px 1px #312726CC;  
  border-radius: 10px;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Card
