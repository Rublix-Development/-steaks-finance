import { useCallback } from 'react'

import useSteak from './useSteak'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../steak/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const steak = useSteak()
  const masterChefContract = getMasterChefContract(steak)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, steak],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
