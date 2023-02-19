import Container from '@components/Container'
import Response from '@components/Response'

const d = [
  {
    name: 'The Rudloe Arms',
    url: 'https://www.rudloearms.com/the-venue',
  },
  {
    name: 'Guyers House',
    url: 'https://guyershouse.com/hotel/',
  },
  {
    name: 'The Methuen Arms',
    url: 'https://butcombe.com/the-methuen-arms-wiltshire/',
  },
  {
    name: 'Lorne House Box',
    url: 'https://www.lornehousebox.co.uk/',
  },
  {
    name: 'The Northey Arms',
    url: 'https://butcombe.com/the-northey-arms-wiltshire/',
  },
  {
    name: 'The Quarrymans Arms',

    url: 'https://butcombe.com/the-quarrymans-arms-wiltshire/',
  },
  {
    name: 'Pickwick Farm',
    url: 'http://www.pickwickfarm.co.uk/',
  },
]

export default function Accomodation() {
  return (
    <Container flow space={'var(--space-6x)'}>
      <p data-animate>The closest towns are Corsham and Bath with lots of airbnbs available.</p>

      <p data-animate>
        We have also compiled a list of B&Bs and Hotels nearby to help you with booking accommodation (which you should
        have received already).
      </p>

      <p data-animate>
        The closest hotel to the venue is{' '}
        <a data-underline="hide-on-hover" href="https://www.rudloearms.com/the-venue">
          The Rudloe Arms
        </a>{' '}
        (also the priciest option). See a full list of options below.
      </p>
      <ul className="bullet" data-animate>
        {d.map(({ name, url }) => (
          <li key={name}>
            <a href={url} data-underline="hide-on-hover">
              {name}
            </a>
          </li>
        ))}
      </ul>

      <p data-animate>
        There is also an option to camp in a field at the farm, there are showers and toilet facilities for campers on
        site. Please let us know if you wish to camp.
      </p>
    </Container>
  )
}
