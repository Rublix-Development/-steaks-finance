import { useCallback } from 'react'

import useSteak from './useSteak'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../steak/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const steak = useSteak()
  const masterChefContract = getMasterChefContract(steak)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, steak])

  return { onReward: handleReward }
}

export default useReward
