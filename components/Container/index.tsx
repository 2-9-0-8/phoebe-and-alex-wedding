import styles from '@styles/modules/Container.module.css'
import { CSSProperties } from 'react';

type StyleProperties = CSSProperties & {
  '--flow-space'?: string
}

export default function Container({ children, flow = false, space }: { children: React.ReactNode; flow?: boolean; space?: string }) {
  const style: StyleProperties = {}

  if (space) style['--flow-space'] = `${space}`

  return <div style={style} className={`${flow ? '[ flow ]' : ''} ${styles.container}`}>{children}</div>
}
