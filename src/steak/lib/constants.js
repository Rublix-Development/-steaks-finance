import BigNumber from 'bignumber.js/bignumber'
import Img from '../../assets/img/Star.png'
import Img2 from '../../assets/img/Gold-star.png'
import eth from '../../assets/img/eth.png'
import hedge from '../../assets/img/hedge.png'
import uni from '../../assets/img/uni.png'
import link from '../../assets/img/link.png'
import snx from '../../assets/img/snx.png'
import lend from '../../assets/img/lend.png'
import comp from '../../assets/img/comp.png'
import yfi from '../../assets/img/yfi.png'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  HEDG: '0xF1290473E210b2108A85237fbCd7b6eb42Cc654F',
  STEAK: '0xF1290473E210b2108A85237fbCd7b6eb42Cc654F',     // TODO: CHANGE
}

export const uniswapPools = {
  HEDG_ETH: '0xDA73Ce7778C87131B6aD4210999De8d93B0a28e9',
  LINK_ETH: '0xa2107FA5B38d9bbd2C461D6EDf11B11A50F6b974',
  SNX_ETH: '0x43AE24960e5534731Fc831386c07755A2dc33D47',
  LEND_ETH: '0xaB3F9bF1D81ddb224a2014e98B238638824bCf20',
  COMP_ETH: '0xCFfDdeD873554F362Ac02f8Fb1f02E5ada10516f',
  YFI_ETH: '0x2fDbAdf3C4D5A8666Bc06645B8358ab803996E28',
  STEAK_ETH: '0xDA73Ce7778C87131B6aD4210999De8d93B0a28e9', // TODO: CHANGE
}

export const contractAddresses = {
  steak: {
    1: '0x0F854835ba614D5460bfe0e910921185482052d9',
  },
  masterChef: {
    1: '0xFD01f7a212eAa4aCAdB986fCb74951D510594c8E',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xSteak: {
    1: '0x9105a5AaD9601da88CB1f0a8152b2Ed950Fb5117'
  }
}


export const supportedPools = [
  {
    pid: 6,
    lpAddresses: {
      1: uniswapPools.STEAK_ETH,
    },
    tokenAddresses: {
      1: addressMap.STEAK,
    },
    name: 'Steak Party!',
    symbol: 'STEAK-ETH Uni-LP',
    tokenSymbol: 'STEAK',
    icon: '🥩',  
    icon2: eth,
  },
  {
    pid: 0,
    lpAddresses: {
      1: uniswapPools.HEDG_ETH,
    },
    tokenAddresses: {
      1: addressMap.HEDG,
    },
    name: 'Tomahawk',
    symbol: 'ETH-HEDG Uni-LP',
    tokenSymbol: 'HEDG',
    icon: eth,
    icon2: hedge,
  },
  {
    pid: 1,
    lpAddresses: {
      1: uniswapPools.LINK_ETH,
    },
    tokenAddresses: {
      1: addressMap.LINK,
    },
    name: 'Porterhouse',
    symbol: 'LINK-ETH Uni-LP',
    tokenSymbol: 'LINK',
    icon: link,
    icon2: eth,
  },
  {
    pid: 2,
    lpAddresses: {
      1: uniswapPools.SNX_ETH,
    },
    tokenAddresses: {
      1: addressMap.SNX,
    },
    name: 'Kobe',
    symbol: 'SNX-ETH Uni-LP',
    tokenSymbol: 'SNX',
    icon: snx,
    icon2: eth,
  },
  {
    pid: 3,
    lpAddresses: {
      1: uniswapPools.LEND_ETH,
    },
    tokenAddresses: {
      1: addressMap.LEND,
    },
    name: 'Wagyu',
    symbol: 'LEND-ETH Uni-LP',
    tokenSymbol: 'LEND',
    icon: lend,
    icon2: eth,
  },
  {
    pid: 4,
    lpAddresses: {
      1: uniswapPools.COMP_ETH,
    },
    tokenAddresses: {
      1: addressMap.COMP,
    },
    name: 'Ribeye',
    symbol: 'COMP-ETH Uni-LP',
    tokenSymbol: 'COMP',
    icon: comp,
    icon2: eth,
  },
  {
    pid: 5,
    lpAddresses: {
      1: uniswapPools.YFI_ETH,
    },
    tokenAddresses: {
      1: addressMap.YFI,
    },
    name: 'New York Strip',
    symbol: 'YFI-ETH Uni-LP',
    tokenSymbol: 'YFI',
    icon: yfi,
    icon2: eth,
  },
]
