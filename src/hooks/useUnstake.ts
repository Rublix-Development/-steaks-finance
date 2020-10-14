import { useCallback } from 'react'

import useSteak from './useSteak'
import { useWallet } from 'use-wallet'

import { emergencyWithdraw, getMasterChefContract } from '../steak/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const steak = useSteak()
  const masterChefContract = getMasterChefContract(steak)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await emergencyWithdraw(masterChefContract, pid, account)
      console.log(txHash)
    },
    [account, pid, steak],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
