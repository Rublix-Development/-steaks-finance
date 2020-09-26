import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

const StyledCard = styled.div`
  background: #31272699;   
  box-shadow: 0 0 2px 1px #312726;
  border-radius: 10px;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Card
