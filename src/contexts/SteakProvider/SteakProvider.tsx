import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Steak } from '../../steak'

export interface SteakContext {
  steak?: typeof Steak
}

export const Context = createContext<SteakContext>({
  steak: undefined,
})

declare global {
  interface Window {
    steaksauce: any
  }
}

const SteakProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [steak, setSteak] = useState<any>()

  // @ts-ignore
  window.steak = steak
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const steakLib = new Steak(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setSteak(steakLib)
      window.steaksauce = steakLib
    }
  }, [ethereum])

  return <Context.Provider value={{ steak }}>{children}</Context.Provider>
}

export default SteakProvider
