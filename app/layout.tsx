import '@styles/reset.css'
import '@styles/styles.css'
import '@styles/animations.css'
import { AnimationProvider } from '@providers/AnimationContext'
import { Lora, Inter } from '@next/font/google'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '600'],
  style: ['normal', 'italic'],
})

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={[lora.variable, inter.variable].join(' ')}>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  )
}
