import clsx from 'clsx'

export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className={clsx('section-heading', 'text-center', 'max-w-140', 'mx-auto', 'mb-12.5')}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2 className={clsx('text-[2rem]', 'mt-2')}>{title}</h2>}
    </div>
  )
}
