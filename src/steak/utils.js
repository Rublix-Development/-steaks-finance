import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const GAS_LIMIT = {
  STAKING: {
    DEFAULT: 200000,
    SNX: 850000,
  },
}

export const getMasterChefAddress = (steak) => {
  return steak && steak.masterChefAddress
}
export const getSteakAddress = (steak) => {
  return steak && steak.steakAddress
}
export const getWethContract = (steak) => {
  return steak && steak.contracts && steak.contracts.weth
}
export const getUsdcContract = (steak) => {
  return steak && steak.contracts && steak.contracts.usdc
}
export const getWbtcContract = (steak) => {
  return steak && steak.contracts && steak.contracts.wbtc
}
export const getHedgContract = (steak) => {
  return steak && steak.contracts && steak.contracts.hedg
}

export const getMasterChefContract = (steak) => {
  return steak && steak.contracts && steak.contracts.masterChef
}
export const getSteakContract = (steak) => {
  return steak && steak.contracts && steak.contracts.steak
}

export const getXSteakStakingContract = (steak) => {
  return steak && steak.contracts && steak.contracts.xSteakStaking
}

export const getFarms = (steak) => {
  return steak
    ? steak.contracts.pools.map(
        ({
          pid,
          name,
          symbol,
          icon,
          icon2,
          link,
          tokenAddress,
          tokenSymbol,
          tokenContract,
          lpAddress,
          lpContract,
          active,
        }) => ({
          pid,
          id: symbol,
          name,
          lpToken: symbol,
          lpTokenAddress: lpAddress,
          lpContract,
          tokenAddress,
          tokenSymbol,
          tokenContract,
          earnToken: 'steak',
          earnTokenAddress: steak.contracts.steak.options.address,
          icon,
          icon2,
          link,
          active,
        }),
      )
    : []
}

export const getPoolWeight = async (masterChefContract, pid) => {
  const { allocPoint } = await masterChefContract.methods.poolInfo(pid).call()
  const totalAllocPoint = await masterChefContract.methods
    .totalAllocPoint()
    .call()
  return new BigNumber(allocPoint).div(new BigNumber(totalAllocPoint))
}

export const getEarned = async (masterChefContract, pid, account) => {
  return masterChefContract.methods.pendingSteak(pid, account).call()
}

export const getTotalLPWethValue = async (
  masterChefContract,
  primaryTokenContract,
  lpContract,
  tokenContract,
  pid,
  basedCoin=""
) => {
  // Get balance of the token address
  const tokenAmountWholeLP = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  const tokenDecimals = await tokenContract.methods.decimals().call()
  // Get the share of lpContract that masterChefContract owns
  const balance = await lpContract.methods
    .balanceOf(masterChefContract.options.address)
    .call()
  // Convert that into the portion of total lpContract = p1
  const totalSupply = await lpContract.methods.totalSupply().call()
  // Get total weth value for the lpContract = w1
  let lpContractWeth = await primaryTokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  if(basedCoin === "wbtc") {
    // lpContractWeth now store wbtc in satoshis
    const res = await fetch("https://charts.hedgetrade.com/cmc_ticker/eth?quote=USD")
    const priceData = await res.json()
    lpContractWeth = (lpContractWeth / (10 ** 8)) * (1/priceData.ETH.PriceBTC);
    // convert eth to weth
    lpContractWeth *= 10 ** 18;
  } else if (basedCoin === "usdc") {
    // lpContractWeth now store usdc * (10 ^ 18)
    const res = await fetch("https://charts.hedgetrade.com/cmc_ticker/eth?quote=USD")
    const priceData = await res.json()
    lpContractWeth = (lpContractWeth / (10 ** 6)) / priceData.ETH.PriceUSD;
    // convert eth to weth
    lpContractWeth *= 10 ** 18;
  } else if (basedCoin === "hedg") {
    // lpContractWeth now store hedg
    const res = await fetch("https://charts.hedgetrade.com/cmc_ticker/hedg,eth?quote=USD")
    const priceData = await res.json()
    lpContractWeth =
      lpContractWeth /
      10 ** 18 /
      priceData.HEDG.PriceUSD /
      priceData.ETH.PriceUSD
    lpContractWeth *= 10 ** 18;
  }
  // Return p1 * w1 * 2
  const portionLp = new BigNumber(balance).div(new BigNumber(totalSupply))
  const lpWethWorth = new BigNumber(lpContractWeth)
  const totalLpWethValue = portionLp.times(lpWethWorth).times(new BigNumber(2))
  // Calculate
  const tokenAmount = new BigNumber(tokenAmountWholeLP)
    .times(portionLp)
    .div(new BigNumber(10).pow(tokenDecimals))

  const wethAmount = new BigNumber(lpContractWeth)
    .times(portionLp)
    .div(new BigNumber(10).pow(18))

  return {
    tokenAmount,
    wethAmount,
    totalWethValue: totalLpWethValue.div(new BigNumber(10).pow(18)),
    tokenPriceInWeth: wethAmount.div(tokenAmount),
    poolWeight: await getPoolWeight(masterChefContract, pid),
  }
}

export const approve = async (lpContract, masterChefContract, account) => {
  return lpContract.methods
    .approve(masterChefContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const approveAddress = async (lpContract, address, account) => {
  return lpContract.methods
      .approve(address, ethers.constants.MaxUint256)
      .send({ from: account })
}

export const getSteakSupply = async (steak) => {
  return new BigNumber(await steak.contracts.steak.methods.totalSupply().call())
}

export const getXSteakSupply = async (steak) => {
  return new BigNumber(await steak.contracts.xSteakStaking.methods.totalSupply().call())
}

export const stake = async (masterChefContract, pid, amount, account) => {
  return masterChefContract.methods
    .deposit(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const unstake = async (masterChefContract, pid, amount, account) => {
  return masterChefContract.methods
    .withdraw(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}
export const harvest = async (masterChefContract, pid, account) => {
  return masterChefContract.methods
    .deposit(pid, '0')
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const getStaked = async (masterChefContract, pid, account) => {
  try {
    const { amount } = await masterChefContract.methods
      .userInfo(pid, account)
      .call()
    return new BigNumber(amount)
  } catch {
    return new BigNumber(0)
  }
}

export const redeem = async (masterChefContract, account) => {
  let now = new Date().getTime() / 1000
  if (now >= 1597172400) {  // TODO: check this
    return masterChefContract.methods
      .exit()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
  } else {
    alert('pool not active')
  }
}

export const enter = async (contract, amount, account) => {  
  return contract.methods
      .enter(
          new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
      )
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
}

export const leave = async (contract, amount, account) => {
  return contract.methods
      .leave(
          new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
      )
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
}
