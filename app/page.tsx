import Container from '@components/Container'
import styles from '@styles/modules/Landing.module.css'
import Link from 'next/link'
import Sunflower from '@components/Sunflower'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const Countdown = dynamic(() => import('@components/Countdown'), { ssr: false })

export default function Home() {
  return (
    <>
      <Sunflower />
      <main>
        <Container>
          <div className={`${styles.landing} [ flow ]`}>

            <p className={styles['landing__message']}>
              We're getting married and we'd love you to be there! Please{' '}
              <Link href="/venue" data-underline="hide-on-hover">
                click here
              </Link>{' '}
              for further details and to confirm if you can make the date.
            </p>

            <Image
              className={`${styles['landing-image']} lw`}
              src={'/image/lillwhites_25.jpeg'}
              width={230}
              height={330}
              alt=""
              quality={100}
            />

            <Countdown />

          </div>
        </Container>
      </main>
    </>
  )
}
