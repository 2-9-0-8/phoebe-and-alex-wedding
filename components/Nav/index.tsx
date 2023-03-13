'use client'

import { routes } from './routes'
import styles from '@styles/modules/Nav.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import useMediaQuery from '@utils/useMediaQuery'
import useBodyLock from '@utils/useBodyLock'

function Burger({ toggled }: { toggled: boolean }) {
  return (
    <div className={styles.burger} data-toggled={toggled}>
      <div className={[styles['burger__line'], styles.half, styles.start].join(' ')}></div>
      <div className={styles['burger__line']}></div>
      <div className={[styles['burger__line'], styles.half, styles.end].join(' ')}></div>
    </div>
  )
}

export default function Nav() {
  const query = useMediaQuery('(min-width: 480px)')
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  function handleToggle() {
    setOpen(!open)
  }

  function handleKeys(e: KeyboardEvent) {
    switch (e.key) {
      case 'Escape':
        setOpen(false)
        break
    }
  }

  useEffect(() => {
    if (query && open) setOpen(false)
  }, [query])

  useEffect(() => {
    if (open) setOpen(false)
  }, [pathname])

  useEffect(() => {
    window.addEventListener('keydown', handleKeys)

    return () => {
      window.removeEventListener('keydown', handleKeys)
    }
  }, [open])

  useBodyLock(open)

  return (
    <nav>
      <button className={styles.toggle} onClick={handleToggle} aria-expanded={open}>
        {open ? 'Close' : 'Menu'}
        <Burger toggled={open} />
      </button>
      <ul className={styles.nav} data-state={!query && open ? 'open' : null}>
        {routes.map(({ label, href }) => (
          <li key={href}>
            <Link
              className={styles['nav__item']}
              href={href}
              aria-current={pathname === href ? 'page' : false}
              data-underline="show-on-hover">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
