import SectionHeading from '../components/SectionHeading'
// import Card from '../components/Card'
import PopIn from '../components/PopIn'
import clsx from 'clsx'

const FEATURES = [
  { icon: 'fa-shield-halved', title: 'Verified Sellers', body: 'Every seller is ID-checked and rated by the community after each sale.' },
  { icon: 'fa-tag', title: 'Fair Price Guide', body: 'See what similar units are selling for before you buy or list.' },
  { icon: 'fa-truck', title: 'Local Pickup Options', body: 'Search by suburb and arrange pickup or drop-off close to home.' },
  { icon: 'fa-circle-check', title: '90-Day Protection', body: 'Certified listings come with a minimum coverage window for peace of mind.' },
]

const TESTIMONIALS = [
  { quote: 'Sold my old split system in three days flat — way easier than the local classifieds.', name: 'Priya M.', location: 'Accra' },
  { quote: 'Found a barely-used window unit for half the retail price right before summer hit.', name: 'Daniel K.', location: 'Aflao, Volta Region' },
  { quote: 'The price guide made it easy to know I was asking a fair amount for my old unit.', name: 'Osei A.', location: 'Accra, Ofankor' },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Page hero */}
      <section className={clsx('page-hero', 'bg-linear-to-r', 'from-primary', 'to-primary-dark', 'py-17.5', 'text-center', 'text-white')}>
        <div className="container">
          <p className={clsx('eyebrow', 'mb-3')} style={{ color: 'rgba(255,255,255,0.75)' }}>Why Best Enterprise</p>
          <h1 className={clsx('text-[2.5rem]', 'mb-3')}>Built for a Fair, Easy Trade</h1>
          <p className={clsx('text-[1.05rem]', 'text-[rgba(255,255,255,0.88)]', 'max-w-140', 'mx-auto')}>
            Verified sellers, transparent pricing, and buyer protection — everything you need to trade with confidence.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className={clsx('section', 'section-alt')} id="how-it-works">
        <div className="container">
          <SectionHeading eyebrow="Why Best Enterprise" title="Built for a fair, easy trade" />
          <div className={clsx('feature-grid', 'grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-4', 'gap-6')}>
            {FEATURES.map((f, i) => (
              <PopIn key={i} delay={i * 100}>
                <div className={clsx('feature-card', 'bg-surface', 'rounded-(--radius-base)', 'p-6', 'text-center', 'shadow-(--shadow-base)', 'transition-all', 'duration-200', 'hover:-translate-y-1', 'hover:shadow-[0_18px_32px_rgba(14,134,212,0.14)]')}>
                  <i className={clsx('fa-solid', '', '+', 'f.icon', '+', '', 'text-[1.6rem]', 'text-primary', 'mb-4', 'block')}></i>
                  <h3 className={clsx('text-base', 'mb-2')}>{f.title}</h3>
                  <p className={clsx('text-sm', 'text-text-muted')}>{f.body}</p>
                </div>
              </PopIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="What people say" title="Trusted by buyers and sellers alike" />
          <div className={clsx('testimonial-grid', 'grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-6')}>
            {TESTIMONIALS.map((t, i) => (
              <PopIn key={i} delay={i * 120}>
                <div className={clsx('testimonial-card', 'bg-surface', 'rounded-(--radius-base)', 'p-7', 'shadow-(--shadow-base)', 'border-t-4', 'border-primary', 'transition-transform', 'duration-200', 'hover:-translate-y-1')}>
                  <p className={clsx('text-text', 'mb-5', 'text-[0.95rem]')}>“{t.quote}”</p>
                  <h4 className="text-[0.95rem]">{t.name}</h4>
                  <span className={clsx('text-xs', 'text-text-muted')}>{t.location}</span>
                </div>
              </PopIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
