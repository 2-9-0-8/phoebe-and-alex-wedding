import Container from '@components/Container'
import FloralSeparator from '@components/FloralSeparator'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import Sunflower from '@components/Sunflower'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sunflower />
      <Container>
        <Nav />
        <FloralSeparator />
      </Container>

      <main>{children}</main>
      
      <Container>
        <Footer />
      </Container>
    </>
  )
}
