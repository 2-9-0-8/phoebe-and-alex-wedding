import { useEffect } from 'react'

export default function useBodyLock(condition: boolean) {
  useEffect(() => {
    if (!condition) {
      return
    }

    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [condition])
}
