import Image from 'next/image'
import styles from '@styles/modules/Sunflower.module.css'

export default function Sunflower() {
  return <Image src={'/image/sunflower.png'} alt={''} width={'500'} height={'500'} className={styles.sunflower} />
}
