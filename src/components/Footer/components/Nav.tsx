import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/#code"
      >
        MasterChef Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://uniswap.info/pair/"
      >
        Uniswap STEAK-ETH
      </StyledLink>
      <StyledLink target="_blank" href="">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/rublixdev/steaks-protocol">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/hedgetradehq">
        Twitter
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.menu[100]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: ${(props) => props.theme.color.menu[200]};
  }
`

export default Nav
