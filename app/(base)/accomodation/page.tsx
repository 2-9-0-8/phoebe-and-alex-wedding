import Container from '@components/Container'
import Image from 'next/image'

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
    name: 'The Northey Arms',
    url: 'https://butcombe.com/the-northey-arms-wiltshire/',
  },
  {
    name: 'Pickwick Farm',
    url: 'http://www.pickwickfarm.co.uk/',
  },
  {
    name: 'Bath City Centre Hotel',
    url: 'https://www.premierinn.com/gb/en/hotels/england/somerset/bath/bath-city-centre.html',
  },
]

export default function Accomodation() {
  return (
    <Container flow space={'var(--space-6x)'}>
      <Image
        className="[ lw ]"
        src={'/image/lilwhites_26.jpeg'}
        width={614}
        height={698}
        alt="Alex and Phoebe"
        quality={100}
      />

      <p>The closest towns are Corsham and Bath with lots of airbnbs available.</p>

      <p>
        We have also compiled a list of B&Bs and Hotels nearby to help you with booking accommodation.
      </p>

      <p>
        The closest hotel to the venue is{' '}
        <a data-underline="hide-on-hover" href="https://www.rudloearms.com/the-venue">
          The Rudloe Arms
        </a>{' '}
        (also the priciest option). See a full list of options below.
      </p>

      {/**
      <Image 
        className="[ lw hm ]" 
        src={'/image/lillwhites__5.png'} 
        width={251} 
        height={181} 
        alt="The whole gang, Phoebe, Alex and Lucca" 
        quality={100}
        style={{ float: 'right', marginTop: '-10px' }} />
      */}

      <ul className="bullet">
        {d.map(({ name, url }) => (
          <li key={name}>
            <a href={url} data-underline="hide-on-hover">
              {name}
            </a>
          </li>
        ))}
      </ul>

      <p>
        There is also the option to camp onsite at the farm, with toilet facilities for campers. Please let us know if
        you would like to camp.
      </p>

      {/**
      <Image 
        className="[ lw hd ]" 
        src={'/image/lillwhites__5.png'} 
        width={502} 
        height={363} 
        alt="The whole gang, Phoebe, Alex and Lucca" 
        quality={100} />
      */}
    </Container>
  )
}
