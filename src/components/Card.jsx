import clsx from 'clsx'

export default function Card({ eyebrow, title, body, icon, image, alt, href, ctaText, ctaHref, className = '', children }) {
  const content = (
    <>
      {image && (
        <img src={image} alt={alt || ''} className={clsx('w-full', 'h-37.5', 'object-cover')} />
      )}
      {icon && (
        <div className={clsx('category-icon', 'h-37.5', 'flex', 'items-center', 'justify-center', 'bg-[#eaf6ff]', 'text-primary', 'text-[2.6rem]')}>
          <i className={'fa-solid ' + icon}></i>
        </div>
      )}
      {(eyebrow || title || body) && (
        <div className={clsx('category-card-body', 'p-4.5')}>
          {eyebrow && <p className={clsx('eyebrow', 'mb-1')}>{eyebrow}</p>}
          {title && <h3 className={clsx('text-[1.05rem]', 'mb-1')}>{title}</h3>}
          {body && <p className={clsx('text-sm', 'text-text-muted')}>{body}</p>}
          {children}
        </div>
      )}
      {!eyebrow && !title && !body && children}
    </>
  )

  if (href) {
    return (
      <a href={href} className={'category-card block bg-surface rounded-(--radius-base) overflow-hidden shadow-(--shadow-base) transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(14,134,212,0.18)] ' + className}>
        {content}
      </a>
    )
  }

  return (
    <div className={'category-card bg-surface rounded-(--radius-base) overflow-hidden shadow-(--shadow-base) transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(14,134,212,0.18)] ' + className}>
      {content}
    </div>
  )
}
