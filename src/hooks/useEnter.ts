import {useCallback} from 'react'

import useSteak from './useSteak'
import {useWallet} from 'use-wallet'

import {enter, getXSteakStakingContract} from '../steak/utils'

const useEnter = () => {
  const {account} = useWallet()
  const steak = useSteak()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enter(
        getXSteakStakingContract(steak),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, steak],
  )

  return {onEnter: handle}
}

export default useEnter
