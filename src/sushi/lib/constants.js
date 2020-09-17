import BigNumber from 'bignumber.js/bignumber'

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
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  HEDG: '0xF1290473E210b2108A85237fbCd7b6eb42Cc654F',
}

export const contractAddresses = {
  sushi: {
    1: '0xF10320bA62dEdD7F64CF43D0f81B400344458DB8',
  },
  masterChef: {
    1: '0x7817Cb0654a8158Df91f2A9B349594fba423E95E',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xSushi: {
    1: '0xeA24Ed230D4e90082f43bA1B745917E3e89149Bf'
  }
}

export const supportedPools = [
  {
    pid: 12,
    lpAddresses: {
      1: '0x795065dCc9f64b5614C407a6EFDC400DA6221FB0',
    },
    tokenAddresses: {
      1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    },
    name: 'Steak Party!',
    symbol: 'STEAK-ETH Uni-LP',
    tokenSymbol: 'STEAK',
    icon: '🥩',
  },
  {
    pid: 0,
    lpAddresses: {
      1: '0xDA73Ce7778C87131B6aD4210999De8d93B0a28e9',
    },
    tokenAddresses: {
      1: '0xf1290473e210b2108a85237fbcd7b6eb42cc654f',
    },
    name: 'Hedgie',
    symbol: 'ETH-HEDG Uni-LP',
    tokenSymbol: 'HEDG',
    icon: '🐢',
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0x397FF1542f962076d0BFE58eA045FfA2d347ACa0',
    },
    tokenAddresses: {
      1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    name: 'Circle Snail',
    symbol: '',
    tokenSymbol: 'USDC',
    icon: '🐌',
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0xC3D03e4F041Fd4cD388c549Ee2A29a9E5075882f',
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    name: 'Donald DAI',
    symbol: '',
    tokenSymbol: 'DAI',
    icon: '🦆',
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0xF1F85b2C54a2bD284B1cf4141D64fD171Bd85539',
    },
    tokenAddresses: {
      1: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
    },
    name: 'Spartan Dollar',
    symbol: '',
    tokenSymbol: 'SUSD',
    icon: '🦍',
  },
  {
    pid: 7,
    lpAddresses: {
      1: '0x001b6450083e531a5a7bf310bd2c1af4247e23d4',
    },
    tokenAddresses: {
      1: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
    },
    name: 'Umami Squid',
    symbol: '',
    tokenSymbol: 'UMA',
    icon: '🦑',
  },
  {
    pid: 9,
    lpAddresses: {
      1: '0xA75F7c2F025f470355515482BdE9EFA8153536A8',
    },
    tokenAddresses: {
      1: '0xba11d00c5f74255f56a5e366f4f77f5a186d7f55',
    },
    name: 'Band-osaurus',
    symbol: '',
    tokenSymbol: 'BAND',
    icon: '🦖',
  },
  {
    pid: 8,
    lpAddresses: {
      1: '0xC40D16476380e4037e6b1A2594cAF6a6cc8Da967',
    },
    tokenAddresses: {
      1: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    name: 'Toadie Marine',
    symbol: '',
    tokenSymbol: 'LINK',
    icon: '🐸',
  },
  {
    pid: 10,
    lpAddresses: {
      1: '0xCb2286d9471cc185281c4f763d34A962ED212962',
    },
    tokenAddresses: {
      1: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
    },
    name: 'Ample Chicks',
    symbol: '',
    tokenSymbol: 'AMPL',
    icon: '🐥',
  },
  {
    pid: 4,
    lpAddresses: {
      1: '0x31503dcb60119a812fee820bb7042752019f2355',
    },
    tokenAddresses: {
      1: '0xc00e94cb662c3520282e6f5717214004a7f26888',
    },
    name: 'Compound Truffle',
    symbol: '',
    tokenSymbol: 'COMP',
    icon: '🍄',
  },
  {
    pid: 5,
    lpAddresses: {
      1: '0x5E63360E891BD60C69445970256C260b0A6A54c6',
    },
    tokenAddresses: {
      1: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
    },
    name: 'Aave Boar',
    symbol: '',
    tokenSymbol: 'LEND',
    icon: '🐗',
  },
  {
    pid: 6,
    lpAddresses: {
      1: '0xA1d7b2d891e3A1f9ef4bBC5be20630C2FEB1c470',
    },
    tokenAddresses: {
      1: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    },
    name: 'Synthetic Snake',
    symbol: '',
    tokenSymbol: 'SNX',
    icon: '🐍',
  },
  {
    pid: 11,
    lpAddresses: {
      1: '0x088ee5007C98a9677165D78dD2109AE4a3D04d0C',
    },
    tokenAddresses: {
      1: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    },
    name: 'YFI Whale',
    symbol: '',
    tokenSymbol: 'YFI',
    icon: '🐋',
  },
  {
    pid: 13,
    lpAddresses: {
      1: '0x611cde65dea90918c0078ac0400a72b0d25b9bb1',
    },
    tokenAddresses: {
      1: '0x408e41876cccdc0f92210600ef50372656052a38',
    },
    name: 'REN Rhino',
    symbol: '',
    tokenSymbol: 'REN',
    icon: '🦏',
  },
  {
    pid: 14,
    lpAddresses: {
      1: '0xaad22f5543fcdaa694b68f94be177b561836ae57',
    },
    tokenAddresses: {
      1: '0x68A118Ef45063051Eac49c7e647CE5Ace48a68a5',
    },
    name: 'BASED Bull',
    symbol: '',
    tokenSymbol: 'BASED',
    icon: '🐂',
  },
  {
    pid: 15,
    lpAddresses: {
      1: '0x117d4288b3635021a3d612fe05a3cbf5c717fef2',
    },
    tokenAddresses: {
      1: '0x476c5E26a75bd202a9683ffD34359C0CC15be0fF',
    },
    name: 'SRM Shark',
    symbol: '',
    tokenSymbol: 'SRM',
    icon: '🦈',
  },
  {
    pid: 16,
    lpAddresses: {
      1: '0x95b54c8da12bb23f7a5f6e26c38d04acc6f81820',
    },
    tokenAddresses: {
      1: '0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a',
    },
    name: 'YAMv2',
    symbol: '',
    tokenSymbol: 'YAMv2',
    icon: '🍠',
  },
  {
    pid: 17,
    lpAddresses: {
      1: '0x58Dc5a51fE44589BEb22E8CE67720B5BC5378009',
    },
    tokenAddresses: {
      1: '0xD533a949740bb3306d119CC777fa900bA034cd52',
    },
    name: 'CRV Crocodile',
    symbol: '',
    tokenSymbol: 'CRV',
    icon: '🐊',
  },
]
