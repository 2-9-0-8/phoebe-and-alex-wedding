import Address from '@components/Address'
import Container from '@components/Container'
import VenueMap from '@components/VenueMap'
import Image from 'next/image'

export default function Venue() {
  return (
    <Container flow space={'var(--space-6x)'}>
      <Image className="[ lw ]" src={'/image/venue4.jpeg'} width={640} height={426.5} alt="The venue" quality={100} />
      <p>
        {/**
        <Image 
          className="[ lw hm ]" 
          src={'/image/lillwhites__2.jpg'} 
          width={200} 
          height={200} 
          alt="Phoebe and Alex on holiday drinking what looks like some sort of Mimosa and a Negroni" 
          quality={100}
          style={{ float: 'right' }} />
        */}
        The wedding will be held at Lower Rudloe Farm.
      </p>

      {/**
      <Image 
        className="[ lw hd ]" 
        src={'/image/lillwhites__3.png'} 
        width={711} 
        height={521} 
        alt="That time we spent a lovely day by the sea - picture of us, Phoebe and Alex, overlooking the sea" 
        quality={100} />
      */}

      <p>
        Parking will be able available onsite, please let us know if you require parking so we know roughly how many
        cars to expect. Taxis are easily available from the surrounding areas including Bath and Chippenham.
      </p>

      <ul>
        <li>
          V Cars -{' '}
          <a data-underline="hide-on-hover" href="tel:01225464646">
            01225 464646
          </a>
        </li>
      </ul>

      <div
        className="[ frame ]"
        data-frame-columns-split="even"
        data-frame-collapse-after="medium"
        data-frame-columns-count="2">
        <VenueMap />
        <Address />
      </div>

      <Image className="[ lw ]" src={'/image/venue2.jpg'} width={682.6} height={453.2} alt="The venue" quality={100} />
    </Container>
  )
}
