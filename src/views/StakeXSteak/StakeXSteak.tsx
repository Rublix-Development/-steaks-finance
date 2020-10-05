import React, {useEffect, useMemo, useState} from 'react'
import styled from 'styled-components'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import Spacer from '../../components/Spacer'
import useSteak from '../../hooks/useSteak'
import {getContract} from '../../utils/erc20'
import UnstakeXSteak from './components/UnstakeXSteak'
import StakeSteak from "./components/StakeSteak";

import {contractAddresses} from '../../steak/lib/constants'
import {getXSteakSupply} from "../../steak/utils";
import BigNumber from "bignumber.js";
import {getBalanceNumber} from "../../utils/formatBalance";

const StakeXSteak: React.FC = () => {
  const {
    tokenAddress,
  } = {
    tokenAddress: contractAddresses.xSteak[1],
  }

  const [totalSupply, setTotalSupply] = useState<BigNumber>()

  const steak = useSteak()
  const {ethereum} = useWallet()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getXSteakSupply(steak)
      setTotalSupply(supply)
    }
    if (steak) {
      fetchTotalSupply()
    }
  }, [steak, setTotalSupply])



  const lpContract = useMemo(() => {    
    return getContract(ethereum as provider, tokenAddress)
  }, [ethereum, tokenAddress])

  return (
    <>
      <StyledFarm>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <UnstakeXSteak
              lpContract={lpContract}
            />
          </StyledCardWrapper>
          <Spacer/>
          <StyledCardWrapper>
            <StakeSteak
            />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg"/>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <StyledInfo>
              <p>⭐️SteakBar is currently not live since the migration from Uniswap to SteakSwap has not yet taken place. 
            However, once it goes live, you will earn a portion of the trading fees based on your prorata amount of 
            xSTEAK held relative to the pool.</p>
            
            <p> ⭐️xSteak can be minted by staking STEAK. You can redeem staked STEAK (plus earned fees) by converting 
            xSTEAK back into STEAK.          
            {totalSupply ? ` There are currently ${getBalanceNumber(totalSupply)} xSTEAK in the whole pool.` : '' }</p>
           
            </StyledInfo>
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg"/>
      </StyledFarm>
    </>
  )
}

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[400]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default StakeXSteak
