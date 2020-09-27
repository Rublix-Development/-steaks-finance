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
import steak from '../../assets/img/steak.png'
import USDC from '../../assets/img/USDC.png'
import wbtc from '../../assets/img/wbtc.png'

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
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  HEDG: '0xF1290473E210b2108A85237fbCd7b6eb42Cc654F',
  UNI: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
  USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  WBTC: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  STEAK: '0xeED9e4F2450035D6426276a8aA2084966EE3b1bb',
}

export const uniswapPools = {
  HEDG_ETH: '0xDA73Ce7778C87131B6aD4210999De8d93B0a28e9',
  USDC_ETH: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
  USDC_WBTC: '0x004375Dff511095CC5A197A54140a24eFEF3A416',
  LINK_ETH: '0xa2107FA5B38d9bbd2C461D6EDf11B11A50F6b974',
  UNI_ETH: '0xd3d2E2692501A5c9Ca623199D38826e513033a17',
  COMP_ETH: '0xCFfDdeD873554F362Ac02f8Fb1f02E5ada10516f',
  YFI_ETH: '0x2fDbAdf3C4D5A8666Bc06645B8358ab803996E28',
  // STEAK_ETH: '',
  LEND_ETH: '0xaB3F9bF1D81ddb224a2014e98B238638824bCf20',
  WBTC_ETH: '0x004375Dff511095CC5A197A54140a24eFEF3A416',
  SNX_ETH: '0x43AE24960e5534731Fc831386c07755A2dc33D47',
}

export const contractAddresses = {
  steak: {
    1: '0xeED9e4F2450035D6426276a8aA2084966EE3b1bb',
  },
  masterChef: {
    1: '0xd58211d19f1A91a9a379D7BE4E20B4e4C3d42c17',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xSteak: {
    1: '0x6810536A08D00d51c2C48e0a06537A26828718ba'
  }
}


export const supportedPools = [
  // {
  //   pid: 7,
  //   lpAddresses: {
  //     1: uniswapPools.STEAK_ETH,
  //   },
  //   tokenAddresses: {
  //     1: addressMap.STEAK,
  //   },
  //   name: 'Steak Party!',
  //   symbol: 'STEAK-ETH Uni-LP',
  //   tokenSymbol: 'STEAK',
  //   icon: steak,  
  //   icon2: eth,
  // },
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
    icon: hedge,
    icon2: eth,
  },
  {
    pid: 1,
    lpAddresses: {
      1: uniswapPools.USDC_ETH,
    },
    tokenAddresses: {
      1: addressMap.USDC,
    },
    name: 'Porterhouse',
    symbol: 'USDC-ETH Uni-LP',
    tokenSymbol: 'USDC',
    icon: USDC,
    icon2: eth,
  },
  {
    pid: 2,
    lpAddresses: {
      1: uniswapPools.USDC_WBTC,
    },
    tokenAddresses: {
      1: addressMap.USDC,
    },
    name: 'Kobe',
    symbol: 'USDC-WBTC Uni-LP',
    tokenSymbol: 'USDC',
    icon: USDC,
    icon2: wbtc,
  },
  {
    pid: 3,
    lpAddresses: {
      1: uniswapPools.LINK_ETH,
    },
    tokenAddresses: {
      1: addressMap.LINK,
    },
    name: 'Wagyu',
    symbol: 'LINK-ETH Uni-LP',
    tokenSymbol: 'LINK',
    icon: link, 
    icon2: eth,
  },
  {
    pid: 4,
    lpAddresses: {
      1: uniswapPools.UNI_ETH,
    },
    tokenAddresses: {
      1: addressMap.UNI,
    },
    name: 'Ribeye',
    symbol: 'UNI-ETH Uni-LP',
    tokenSymbol: 'UNI',
    icon: uni,
    icon2: eth,
  },
  {
    pid: 5,
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
    pid: 6,
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
