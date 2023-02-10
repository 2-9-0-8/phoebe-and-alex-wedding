import styles from '@styles/modules/Address.module.css'

const location = {
  lat: 51.412,
  lng: -2.232,
  address: 'Lower Rudloe Farm, Lower Rudloe, Nr Corsham, Wiltshire, SN13 0PB'
}

export function Map() {
  return <div className={styles.map}>S</div>
}

export default function Address({ withMap = false }: { withMap?: boolean }) {
  return (
    <div className={styles.address}>
      <address data-animate>
        {location.address.split(', ').map(line => <span key={line}>{line}</span>)}
      </address>

      {withMap && <Map />}
    </div>
  )
}
