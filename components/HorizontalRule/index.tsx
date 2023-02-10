import styles from '@styles/modules/HorizontalRule.module.css'
import { CSSProperties } from 'react'

type Props = {
  inlineSize?: number
  blockSize?: number
  colour?: string
  spacing?: number
}

type StyleProperties = CSSProperties & {
  '--horizontal-rule-inline'?: string
  '--horizontal-rule-block'?: string
  '--horizontal-rule-colour'?: string
  '--horizontal-rule-spacing'?: string
}

export default function HorizontalRule({ inlineSize, blockSize, colour, spacing }: Props) {
  const style: StyleProperties = {}

  if (inlineSize) style['--horizontal-rule-inline'] = `${inlineSize}px`
  if (blockSize) style['--horizontal-rule-block'] = `${blockSize}px`
  if (colour) style['--horizontal-rule-colour'] = colour
  if (spacing) style['--horizontal-rule-spacing'] = `${spacing}px`

  return <div style={style} className={styles['horizontal-rule']} aria-hidden="true" />
}
