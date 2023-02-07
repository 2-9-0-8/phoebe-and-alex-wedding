const style = `
  [data-animate] {
    --duration: 0;
    --opacity: 1;
    --transform: none;
  }
`

export default function NoScript() {
  return (
    <noscript>
      <style dangerouslySetInnerHTML={{ __html: style }} />
    </noscript>
  )
}