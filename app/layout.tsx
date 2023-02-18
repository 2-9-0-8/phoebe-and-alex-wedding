import '@styles/reset.css'
import '@styles/styles.css'
import '@styles/animations.css'
import { AnimationProvider } from '@providers/AnimationContext'
import { Cormorant } from '@next/font/google'
import NoScript from '@components/NoScript'

const cormorant = Cormorant({ subsets: ['latin'], variable: '--font-cormorant' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={cormorant.variable}>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NoScript />
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  )
}
