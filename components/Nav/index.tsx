'use client'

import { routes } from './routes'
import styles from '@styles/modules/Nav.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import useMediaQuery from '@utils/useMediaQuery'
import useBodyLock from '@utils/useBodyLock'
import useModal from '@utils/useModal'

function OpenIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="7" r="6.5" />
        <path d="M7 4v6M4 7h6" />
      </g>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
      <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.12 4.88 4.88 9.12M4.88 4.88l4.24 4.24" />
        <circle cx="7" cy="7" r="6.5" />
      </g>
    </svg>
  )
}

export default function Nav() {
  const query = useMediaQuery('(min-width: 480px)')
  const pathname = usePathname()

  const [open, setOpen] = useState(false)

  const navRef = useRef<HTMLDivElement>(null)
  const openNavRef = useRef<HTMLButtonElement>(null)
  const closeNavRef = useRef<HTMLButtonElement>(null)

  const { handleOpen, handleClose } = useModal({
    ref: navRef,
    _state: [open, setOpen],
    postCloseFn: () => openNavRef.current?.focus(),
    postOpenFn: () => closeNavRef.current?.focus(),
  })

  return (
    <nav>
      <button ref={openNavRef} className={[styles.toggle, styles['open-nav']].join(' ')} onClick={handleOpen} aria-expanded={open}>
        Menu
        <OpenIcon />
      </button>
      <div
        ref={navRef}
        className={styles.nav}
        data-state={!query && open ? 'open' : null}
        aria-hidden={!open && !query}>
        <button ref={closeNavRef} className={styles.toggle} onClick={handleClose} tabIndex={!query && !open ? -1 : 0}>
          Close
          <CloseIcon />
        </button>
        <ul className={styles['nav__list']}>
          {routes.map(({ label, href }) => (
            <li key={href}>
              <Link
                className={styles['nav__item']}
                href={href}
                aria-current={pathname === href ? 'page' : false}
                data-underline="show-on-hover"
                tabIndex={!query && !open ? -1 : 0}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
