import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../steak/utils'
import useSteak from './useSteak'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const steak = useSteak()
  const masterChefContract = getMasterChefContract(steak)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, steak])

  useEffect(() => {
    if (account && steak) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, steak])

  return balance
}

export default useStakedBalance
