'use client'

import { useEffect } from 'react'

export default function useRootSize(callback: (size: number) => void, queryDirection: 'inline' | 'block') {
  let size: number

  const observerCallback: ResizeObserverCallback = (entries: ResizeObserverEntry[]) => {
    const [entry] = entries

    if (entry.borderBoxSize) {
      const borderBoxSize = Array.isArray(entry.borderBoxSize) ? entry.borderBoxSize[0] : entry.borderBoxSize

      if (queryDirection === 'inline') {
        size = borderBoxSize.inlineSize
      } else {
        size = borderBoxSize.blockSize
      }
    }

    if (callback) callback(size)
  }

  useEffect(() => {
    const observer = new ResizeObserver(observerCallback)

    observer.observe(document.documentElement)

    return () => observer.unobserve(document.documentElement)
  })
}
