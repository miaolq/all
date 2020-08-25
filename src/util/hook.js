import { useEffect } from 'react'

export const useMount = (func) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(func, [])
}

export const a = 1
