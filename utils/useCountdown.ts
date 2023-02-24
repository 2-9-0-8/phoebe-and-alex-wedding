'use client'

import { useEffect, useRef, useState } from 'react'

function calculateRemaining(target: string) {
  const difference = +new Date(target) - +new Date()
  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((difference / 1000 / 60) % 60)
  const seconds = Math.floor((difference / 1000) % 60)

  return [days, hours, minutes, seconds]
}

export default function useCountdown(target: string) {
  const initialState = calculateRemaining(target)
  const [remaining, setRemaining] = useState(initialState)
  const countdown = useRef<ReturnType<typeof setInterval>>()

  if (typeof window === 'undefined') {
    throw new Error('useCountdown can only be used on the client');
  }

  useEffect(() => {
    countdown.current = setInterval(() => {
      setRemaining(calculateRemaining(target))
    }, 1000)

    return () => clearInterval(countdown.current)
  }, [])

  return remaining
}
