export default function Badge({ children, variant = 'condition' }) {
  return (
    <span className={'badge badge-' + variant}>
      {children}
    </span>
  )
}
