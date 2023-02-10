import Address from '@components/Address'
import Container from '@components/Container'

export default function Venue() {
  return (
    <Container flow space={'var(--space-6x)'}>
      <p data-animate>The wedding will be held at Lower Rudloe Farm.</p>

      <Address />

      <p data-animate>
        Parking will be able available onsite, please let us know if you require parking so we know roughly how many
        cars to expect. Taxis are easily available from the surrounding areas including Bath and Chippenham.
      </p>

      <ul>
        <li data-animate>
          V Cars -{' '}
          <a data-underline="hide-on-hover" href="tel:01225464646">
            01225 464646
          </a>
        </li>
      </ul>
    </Container>
  )
}
