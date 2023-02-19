import '@styles/reset.css'
import '@styles/styles.css'
import '@styles/animations.css'
import { AnimationProvider } from '@providers/AnimationContext'
import { Open_Sans } from '@next/font/google'
import NoScript from '@components/NoScript'

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={openSans.variable}>
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
