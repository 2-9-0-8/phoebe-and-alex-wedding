import Container from '@components/Container'
import styles from '@styles/modules/Landing.module.css'
import Link from 'next/link'
import Sunflower from '@components/Sunflower'
import Footer from '@components/Footer'
import Countdown from '@components/Countdown'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Sunflower />
      <main>
        <Container>
          <div className={ `${styles.landing} [ flow ]`}>

            <p className={styles['landing__message']} data-animate>
              We're getting married and we'd love you to be there! Please{' '}
              <Link href="/venue" data-underline="hide-on-hover">
                click here
              </Link>{' '}
              for further details and to confirm if you can make the date.
            </p>

            <Countdown />

            <Image
              className={`${styles['landing-image']} lw`}
              src={'/image/lillwhites__1.jpg'}
              width={524}
              height={393}
              alt=""
              quality={100}
              data-animate
            />

            <Footer />

          </div>
        </Container>
      </main>
    </>
  )
}
