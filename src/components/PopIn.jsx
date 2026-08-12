import { useRef, useEffect, useState } from 'react'

export default function PopIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      ref={ref}
      className={'animate-pop-in ' + (visible ? 'opacity-100' : 'opacity-0') + ' ' + className}
      style={{ animationDelay: delay + 'ms' }}
    >
      {children}
    </div>
  )
}
