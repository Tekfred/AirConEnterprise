import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import PopIn from '../components/PopIn'

const STEPS = [
  { num: '01', title: 'Snap a few photos', body: 'Add photos, the brand, and your asking price. Listing is completely free.' },
  { num: '02', title: 'Chat with buyers', body: 'Answer questions and accept an offer that works for you — no pressure.' },
  { num: '03', title: 'Hand it over & get paid', body: 'Meet locally or arrange pickup, and the payment lands straight away.' },
]

export default function Sell() {
  return (
    <div>
      {/* Page hero */}
      <section className={clsx('page-hero', 'bg-linear-to-r', 'from-accent', 'to-accent-dark', 'py-17.5', 'text-center', 'text-white')}>
        <div className="container">
          <p className={clsx('eyebrow', 'mb-3')} style={{ color: 'rgba(255,255,255,0.75)' }}>Selling is simple</p>
          <h1 className={clsx('text-[2.5rem]', 'mb-3')}>List Your AC in Three Steps</h1>
          <p className={clsx('text-[1.05rem]', 'text-[rgba(255,255,255,0.88)]', 'max-w-140', 'mx-auto')}>
            Turn your old unit into cash — listing is completely free and takes about 2 minutes.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section" id="sell">
        <div className="container">
          <SectionHeading eyebrow="How it works" title="List your AC in three steps" />
          <div className={clsx('steps-grid', 'grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-8', 'mb-10')}>
            {STEPS.map((step, i) => (
              <PopIn key={i} delay={i * 120}>
                <div className={clsx('step-card', 'bg-surface', 'rounded-(--radius-base)', 'p-8', 'text-center', 'shadow-(--shadow-base)')}>
                  <span className={clsx('step-number', 'inline-block', 'font-mono', 'font-semibold', 'text-accent', 'text-base', 'border-2', 'border-accent', 'rounded-full', 'w-10', 'h-10', 'leading-9.5', 'mb-4')}>
                    {step.num}
                  </span>
                  <h3 className={clsx('text-[1.1rem]', 'mb-2')}>{step.title}</h3>
                  <p className={clsx('text-text-muted', 'text-sm')}>{step.body}</p>
                </div>
              </PopIn>
            ))}
          </div>
          <div className={clsx('sell-cta', 'text-center')}>
            <Button to="/sell-your-ac" variant="accent">Start Your Free Listing</Button>
          </div>
        </div>
      </section>

      {/* Bottom CTA banner */}
      <section className={clsx('cta-banner', 'bg-linear-to-r', 'from-primary', 'to-primary-dark', 'py-15')}>
        <div className={clsx('container', 'cta-banner-inner', 'flex', 'items-center', 'justify-between', 'flex-wrap', 'gap-5')}>
          <div>
            <h2 className={clsx('text-white', 'text-[1.6rem]', 'mb-1')}>Got a unit sitting idle in the shed?</h2>
            <p className="text-[rgba(255,255,255,0.85)]">List it free and start getting offers today.</p>
          </div>
          <Button to="/sell-your-ac" variant="accent">List Your AC</Button>
        </div>
      </section>
    </div>
  )
}
