import { NavLink } from 'react-router-dom'

export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) {
  const base = 'btn btn-' + variant + (size === 'sm' ? ' btn-small' : '')
  const cls = base + ' ' + className

  if (to) {
    return (
      <NavLink to={to} className={cls} {...props}>
        {children}
      </NavLink>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
