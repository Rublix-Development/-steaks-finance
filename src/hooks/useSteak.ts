import { useContext } from 'react'
import { Context } from '../contexts/SteakProvider'

const useSteak = () => {
  const { steak } = useContext(Context)
  return steak
}

export default useSteak
