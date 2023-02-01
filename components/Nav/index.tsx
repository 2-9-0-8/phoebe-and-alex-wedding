'use client'

import { routes } from './routes'
import styles from '@styles/modules/Nav.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav data-animate>
      <ul className={styles.nav}>
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
