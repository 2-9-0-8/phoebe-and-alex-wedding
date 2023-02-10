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
  let observer: IntersectionObserver | null

  const handleAnimation = (target: HTMLElement, index: number) => {
    const DELAY_MULTIPLIER = 150
    const BUMP = DELAY_MULTIPLIER * 2
    const delay = index * DELAY_MULTIPLIER
    const duration = parseFloat(window.getComputedStyle(target).getPropertyValue('--duration'))
    const style = target.getAttribute('style')

    target.style.setProperty('--delay', delay + 'ms')
    target.dataset.animating = ''

    setTimeout(() => {
      delete target.dataset.animate
      delete target.dataset.animating

      style ? target.setAttribute('style', style) : target.removeAttribute('style')
    }, delay + duration + BUMP)
  }

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        handleAnimation(entry.target as HTMLElement, index)

        observer?.unobserve(entry.target)
      }
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
    const elements = [...document.querySelectorAll<HTMLElement>('[data-animate')]

    observer = new IntersectionObserver(callback, options)

    elements.map(element => targets.current.push(element))
    targets?.current.map((target: HTMLElement) => observer?.observe(target))

    return () => {
      observer?.disconnect()
      observer = null
    }
  }, [location, observerActivated])

  return <AnimationContext.Provider value={store}>{children}</AnimationContext.Provider>
}

export const useAnimation = () => useContext(AnimationContext)
