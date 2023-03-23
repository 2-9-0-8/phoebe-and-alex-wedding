import Image from 'next/image'
import Container from '@components/Container'

const items = [
  '/image/lillwhites_9.jpg',
  '/image/lillwhites_10.jpg',
  '/image/lillwhites_23.jpg',
  '/image/lillwhites_12.jpg',
  '/image/lillwhites_13.jpg',
  '/image/lillwhites_14.jpg',
  '/image/lillwhites_15.jpg',
  '/image/lillwhites_24.jpg',
  '/image/lillwhites_18.jpg',
  '/image/lillwhites_19.jpg',
  '/image/lillwhites_21.jpg',
  '/image/lillwhites_22.jpg',
]

export default function Gifts() {
  const needsShifting = [11]

  return (
    <Container flow space={'var(--space-8x)'}>
      <p>
        As you will know we are both notoriously indecisive so we haven't been able to decide on any things we need or
        would like. If you would like to get us a gift but are as indecisive as we are we have set up honeymoon fund so
        that you can help us to create memories like these on our honeymoon in Sri Lanka.
      </p>
      <p>
        <a
          data-underline="hide-on-hover"
          href="https://viing.com/v/phoebe-and-alexs-honeymoon-fund"
          target="_blank"
          rel="noopener noreferrer">
          Click here to visit our honeymoon fund
        </a>
      </p>
      <div
        className="[ frame ]"
        data-frame-columns-count="3"
        data-frame-collapse-after="medium"
        data-frame-columns-split="even">
        {items.map((item, index) => (
          <div key={index} style={{ position: 'relative', height: '200px' }} data-layout-break>
            <Image
              src={item}
              fill
              alt=""
              quality={100}
              className="[ lw ]"
              style={{
                objectFit: 'cover',
                objectPosition: needsShifting.includes(index) ? '0 1px' : '',
              }}
            />
          </div>
        ))}
      </div>
    </Container>
  )
}
