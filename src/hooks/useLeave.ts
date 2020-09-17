import {useCallback} from 'react'

import useSteak from './useSteak'
import {useWallet} from 'use-wallet'

import {leave, getXSteakStakingContract} from '../steak/utils'

const useLeave = () => {
  const {account} = useWallet()
  const steak = useSteak()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await leave(
        getXSteakStakingContract(steak),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, steak],
  )

  return {onLeave: handle}
}

export default useLeave
