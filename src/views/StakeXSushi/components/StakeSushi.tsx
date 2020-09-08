import BigNumber from 'bignumber.js'
import React, {useCallback, useState} from 'react'
import styled from 'styled-components'
import {Contract} from 'web3-eth-contract'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import IconButton from '../../../components/IconButton'
import {AddIcon} from '../../../components/icons'
import Label from '../../../components/Label'
import Value from '../../../components/Value'
import useModal from '../../../hooks/useModal'
import useTokenBalance from '../../../hooks/useTokenBalance'
import {getBalanceNumber} from '../../../utils/formatBalance'
import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'
import {contractAddresses} from '../../../sushi/lib/constants'
import useEnter from "../../../hooks/useEnter";
import useLeave from "../../../hooks/useLeave";
import useAllowanceStaking from "../../../hooks/useAllowanceStaking";
import useApproveStaking from "../../../hooks/useApproveStaking";

interface StakeProps {
  lpContract: Contract
}


const StakeSushi: React.FC<StakeProps> = ({lpContract}) => {
  const tokenName = "SUSHI"
  const [requestedApproval, setRequestedApproval] = useState(false)

  const allowance = useAllowanceStaking()
  const {onApprove} = useApproveStaking()

  const stakedBalance = useTokenBalance(lpContract.options.address)
  const tokenBalance = useTokenBalance(contractAddresses.sushi[1])

  const {onEnter} = useEnter()
  const {onLeave} = useLeave()

  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={onEnter}
      tokenName={tokenName}
    />,
  )

  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={onLeave}
      tokenName={tokenName}
    />,
  )

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false)
      }
    } catch (e) {
      console.log(e)
    }
  }, [onApprove, setRequestedApproval])

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <CardIcon>👨🏻‍🍳</CardIcon>
            <Value value={getBalanceNumber(stakedBalance)}/>
            <Label text={`${tokenName} Tokens Available`}/>
          </StyledCardHeader>
          <StyledCardActions>
            {!allowance.toNumber() ? (
              <Button
                disabled={requestedApproval}
                onClick={handleApprove}
                text={`Approve ${tokenName}`}
              />
            ) : (
              <>
                <Button
                  disabled={stakedBalance.eq(new BigNumber(0))}
                  text="Transfer to xSUSHI"
                  onClick={onPresentWithdraw}
                />
                <StyledActionSpacer/>
                <IconButton onClick={onPresentDeposit}>
                  <AddIcon/>
                </IconButton>
              </>
            )}
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  )
}

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[6]}px;
  width: 100%;
`

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default StakeSushi
