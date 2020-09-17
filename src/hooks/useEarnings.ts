import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../steak/utils'
import useSteak from './useSteak'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const steak = useSteak()
  const masterChefContract = getMasterChefContract(steak)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, steak])

  useEffect(() => {
    if (account && masterChefContract && steak) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, steak])

  return balance
}

export default useEarnings
