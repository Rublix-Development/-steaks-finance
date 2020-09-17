import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useSteak from '../../hooks/useSteak'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../steak/utils'
import { getFarms } from '../../steak/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const steak = useSteak()
  const { account } = useWallet()

  const farms = getFarms(steak)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
