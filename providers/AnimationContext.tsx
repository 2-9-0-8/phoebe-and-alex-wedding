'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

interface AnimationContextProps {
  targets: React.MutableRefObject<HTMLElement[]> | null
  setTargets: (target: HTMLElement) => void
  activateObserver: () => void
}

export const AnimationContext = createContext<AnimationContextProps>({
  targets: null,
  setTargets: () => {},
  activateObserver: () => {}
})

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const targets = useRef<HTMLElement[]>([])
  const location = usePathname()
  const [observerActivated, setObserverActivated] = useState<number>(0)

  const handleAnimation = (target: HTMLElement, index: number) => {
    const DELAY_MULTIPLIER = 150
    const delay = index * DELAY_MULTIPLIER
    const duration = parseFloat(window.getComputedStyle(target).getPropertyValue('--duration'))

    target.style.setProperty('--delay', delay + 'ms')
    target.dataset.animating = ''

    setTimeout(() => {
      delete target.dataset.animate
      delete target.dataset.animating
    }, delay + duration)
  }

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) handleAnimation(entry.target as HTMLElement, index)
    })
  }

  const options = { rootMargin: '0px', threshold: [0.2] }

  const activateObserver = () => setObserverActivated(observerActivated + 1)

  const store = {
    targets,
    setTargets: (t: HTMLElement) => targets?.current.push(t),
    activateObserver
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    const elements = [...document.querySelectorAll<HTMLElement>('[data-animate')]

    elements.map(element => targets.current.push(element))
    targets?.current.map((target: HTMLElement) => observer.observe(target))

    return () => {
      targets?.current.map((target: HTMLElement) => observer.unobserve(target))
    }
  }, [location, observerActivated])

  return <AnimationContext.Provider value={store}>{children}</AnimationContext.Provider>
}

export const useAnimation = () => useContext(AnimationContext)
