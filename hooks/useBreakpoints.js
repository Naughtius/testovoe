import { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'
import _reduce from 'lodash/reduce'
import _isEqual from 'lodash/isEqual'

const useBreakpoints = () => {
  const { width: windowWidth } = useWindowSize()

  const breakpoints = {
    xl: 1399,
    lg: 1199,
    md: 991,
    sm: 768,
    xs: 475,
  }

  const [breakpoint, setBreakpoint] = useState('xl')
  const [breakpointsState, setBreakpointsState] = useState({
    xl: true,
    lg: false,
    md: false,
    sm: false,
    xs: false,
  })

  useEffect(() => {
    let gotBreakpoint = false
    const result = _reduce(
      breakpoints,
      (acc, item, key) => {
        if (windowWidth >= breakpoints[key] && !gotBreakpoint) {
          acc[key] = true
          gotBreakpoint = true
          if (!_isEqual(breakpoint, acc[key])) {
            setBreakpoint([acc[key]])
          }
        } else {
          acc[key] = false
        }

        return acc
      },
      {}
    )

    if (windowWidth < breakpoints.xs) result.xs = true
    if (!_isEqual(result, breakpointsState)) setBreakpointsState(result)
  }, [windowWidth])

  return {
    breakpoints,
    breakpoint,
    width: windowWidth,
    breakpointsState,
  }
}

export default useBreakpoints
