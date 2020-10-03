import React from 'react'
import styled from 'styled-components'
import redStar from '../../assets/img/Gold-star.png'
import Container from '../Container'
import Spacer from '../../components/Spacer'
import steak from '../../assets/img/steak.png'
import hedge from '../../assets/img/hedge.png'

interface PageHeaderProps {
  icon?: React.ReactNode  
  subtitle?: string
  title?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
  return (
    <Container>
      <StyledPageHeader>
      <a href="https://uniswap.info/pair/0x99b46782e350a37d2850ff3713bf29ab3902cd31" target="_blank">
        <button className='buySteak'>Buy <img src={steak} className="buyLogo" width="35" /> </button>
      </a>
     {icon != undefined
      ? <StyledIcon className="mainIcon">{icon}</StyledIcon>     
      : <StyledIcon></StyledIcon>
     }
      
      <a href='https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xf1290473e210b2108a85237fbcd7b6eb42cc654f' target="_blank">
        <button className='buyHedge'>Buy <img src={hedge} className="buyLogo" width="35" /></button>
      </a>
      <Spacer size="md" />
        <StyledSubtitle><img src={redStar} className="redStar" width="40" /> {subtitle} <img src={redStar} className="redStar" width="40" /> </StyledSubtitle>
      </StyledPageHeader>
    </Container>
  )
}

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;  
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  padding-top: ${(props) => props.theme.spacing[6]}px;
  margin: 0 auto;
  text-align: center;
`

const StyledIcon = styled.div`
  font-size: 120px;  
  line-height: 120px;
  text-align: center; 
  display: inline;
`

const StyledTitle = styled.h1`
  font-family: 'Kaushan Script', sans-serif;
  color: #fff;
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  margin: 0;
  padding: 0;
`

const StyledSubtitle = styled.h3`
  color:  #fff;
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  margin-top: 10px;
  padding: 0;
  text-align: center;
  font-family: Stern;
`

export default PageHeader
