import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'

import {
  getMasterChefContract,
  getWethContract,
  getUsdcContract,
  getWbtcContract,
  getHedgContract,
  getSteakContract,
  getFarms,
  getTotalLPWethValue,
} from '../steak/utils'
import useSteak from './useSteak'
import useBlock from './useBlock'

export interface StakedValue {
  tokenAmount: BigNumber
  wethAmount: BigNumber
  totalWethValue: BigNumber
  tokenPriceInWeth: BigNumber
  poolWeight: BigNumber
}

const useAllStakedValue = () => {
  const [balances, setBalance] = useState([] as Array<StakedValue>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const steak = useSteak()
  const farms = getFarms(steak)
  const masterChefContract = getMasterChefContract(steak)
  const wethContract = getWethContract(steak)
  const usdcContract = getUsdcContract(steak)
  const wbtcContract = getWbtcContract(steak)
  const hedgContract = getHedgContract(steak)
  const block = useBlock()

  const fetchAllStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
        }) => {
          let basedCurrencyContract;
          let otherTokenContract;
          let basedCoin
          switch(pid) {
            case(9):
              basedCurrencyContract = usdcContract;
              otherTokenContract = tokenContract;
              basedCoin = "usdc"
              break;
            case(12):
            case(16):
              basedCurrencyContract = usdcContract;
              otherTokenContract = tokenContract;
              basedCoin = "usdc"
              break;
            case(10):
              basedCurrencyContract = wbtcContract;
              otherTokenContract = tokenContract;
              basedCoin = "wbtc"
              break;
            case(13):
              basedCurrencyContract = hedgContract;
              otherTokenContract = tokenContract;
              basedCoin = "hedg"
              break;
            default:
              basedCurrencyContract = wethContract;
              otherTokenContract = tokenContract;
              basedCoin = "weth"

          }
          return getTotalLPWethValue(
            masterChefContract,
            basedCurrencyContract,
            lpContract,
            otherTokenContract,
            pid,
            basedCoin
            )
          }
      ),
    )

    setBalance(balances)
  }, [account, masterChefContract, steak])

  useEffect(() => {
    if (account && masterChefContract && steak) {
      fetchAllStakedValue()
    }
  }, [account, block, masterChefContract, setBalance, steak])

  return balances
}

export default useAllStakedValue
