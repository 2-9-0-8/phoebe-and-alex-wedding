import { selectors } from '@utils/lib/selectors'
import { useEffect } from 'react'
import useBodyLock from './useBodyLock'

type ModalProps = {
  ref: React.RefObject<HTMLElement>
  _state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  postOpenFn?: () => void
  postCloseFn?: () => void
  lockBodyWhenOpen?: boolean
}

const selectorString = selectors.join(',')

export default function useModal({ ref, _state, postOpenFn, postCloseFn, lockBodyWhenOpen = true }: ModalProps) {
  const [state, setState] = _state

  function closeFn() {
    return new Promise<void>((resolve, reject) => {
      try {
        setState(false)
        resolve()
      } catch (err) {
        reject(err)
      }
    })
  }

  function openFn() {
    return new Promise<void>((resolve, reject) => {
      try {
        setState(true)
        resolve()
      } catch (err) {
        reject(err)
      }
    })
  }

  async function handleClose() {
    await closeFn()
    postCloseFn?.()
  }

  async function handleOpen() {
    await openFn()
    postOpenFn?.()
  }

  function handleFocus(direction: 'previous' | 'next') {
    if (!state || !ref.current) {
      return
    }

    const focusableElements: HTMLElement[] = Array.from(ref.current.querySelectorAll(selectorString))
    const currentIndex = focusableElements.findIndex(el => {
      return el === document.activeElement
    })

    switch (direction) {
      case 'previous':
        const previousIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1
        const previousElement = focusableElements[previousIndex]
        previousElement.focus()
        break
      case 'next':
        const nextIndex = currentIndex === focusableElements.length - 1 ? 0 : currentIndex + 1
        const nextElement = focusableElements[nextIndex]
        nextElement.focus()
        break
    }
  }

  function handleKeys(e: KeyboardEvent) {
    switch (e.key) {
      case 'Escape':
        handleClose()
        break
      case 'Tab':
        e.preventDefault()
        handleFocus(e.shiftKey ? 'previous' : 'next')
        break
    }
  }

  function handleClickOutside(e: Event) {
    if (ref.current && !ref.current.contains(e.target as HTMLElement) && state) {
      handleClose()
    }
  }

  if (lockBodyWhenOpen) {
    //useBodyLock({ state })
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [state])

  useEffect(() => {
    document.addEventListener('keydown', handleKeys)

    return () => {
      document.removeEventListener('keydown', handleKeys)
    }
  }, [state])

  return { handleOpen, handleClose }
}
