import { Contract } from 'web3-eth-contract'

export interface Farm {
  pid: number
  name: string
  lpToken: string
  lpTokenAddress: string
  lpContract: Contract
  tokenAddress: string
  earnToken: string
  earnTokenAddress: string
  icon: React.ReactNode
  icon2: React.ReactNode
  link: React.ReactNode
  id: string
  tokenSymbol: string
  active: Boolean
}

export interface FarmsContext {
  farms: Farm[]
  unharvested: number
}
