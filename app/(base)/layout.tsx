import Container from '@components/Container'
import FloralSeparator from '@components/FloralSeparator'
import Footer from '@components/Footer'
import Nav from '@components/Nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
