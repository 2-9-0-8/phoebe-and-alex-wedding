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
  }
]

export default function Accomodation() {
  return (
    <Container flow space={'var(--space-6x)'}>
      <p>
        The closest towns are Corsham and Bath with lots of airbnbs available.
      </p>

      <p>
        We have also compiled a list of B&Bs and Hotels nearby to help you with booking accommodation (which you should
        have received already).
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

      <Image 
        className="[ lw hm ]" 
        src={'/image/venue2.jpg'} 
        width={341.3} 
        height={227.6} 
        alt="The venue" 
        quality={100}
        style={{ float: 'right', marginTop: '-10px' }} />

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
        There is also an option to camp in a field at the farm, there are showers and toilet facilities for campers on
        site. Please let us know if you wish to camp.
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

      <Image 
        className="[ lw ]" 
        src={'/image/venue4.jpeg'} 
        width={640} 
        height={426.5} 
        alt="The venue" 
        quality={100} />
    </Container>
  )
}
