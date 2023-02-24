import Address from '@components/Address'
import Container from '@components/Container'
import VenueMap from '@components/VenueMap'
import Image from 'next/image'

export default function Venue() {
  return (
    <Container flow space={'var(--space-6x)'}>
      <p data-animate>
        <Image 
          className="[ lw hm ]" 
          src={'/image/lillwhites__2.jpg'} 
          width={200} 
          height={200} 
          alt="Phoebe and Alex on holiday drinking what looks like some sort of Mimosa and a Negroni" 
          quality={100}
          style={{ float: 'right' }} />
          
        The wedding will be held at Lower Rudloe Farm.
      </p>

      <Address />

      <Image 
        className="[ lw hd ]" 
        src={'/image/lillwhites__3.png'} 
        width={711} 
        height={521} 
        alt="That time we spent a lovely day by the sea - picture of us, Phoebe and Alex, overlooking the sea" 
        quality={100} 
        data-animate />

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

      <VenueMap />
    </Container>
  )
}
