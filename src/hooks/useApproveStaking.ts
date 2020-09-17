import {useCallback} from 'react'

import useSteak from './useSteak'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import {
  approve,
  getSteakContract,
  getXSteakStakingContract
} from '../steak/utils'

const useApproveStaking = () => {
  const {account}: { account: string; ethereum: provider } = useWallet()
  const steak = useSteak()
  const lpContract = getSteakContract(steak)
  const contract = getXSteakStakingContract(steak)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, contract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, contract])

  return {onApprove: handleApprove}
}

export default useApproveStaking
