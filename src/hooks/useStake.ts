import { useCallback } from 'react'

import useSteak from './useSteak'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../steak/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const steak = useSteak()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(steak),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, steak],
  )

  return { onStake: handleStake }
}

export default useStake
