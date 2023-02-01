import styles from '@styles/modules/Container.module.css'

export default function Container({ children, flow = false }: { children: React.ReactNode; flow?: boolean }) {
  return <div className={`${flow ? '[ flow ]' : ''} ${styles.container}`}>{children}</div>
}
