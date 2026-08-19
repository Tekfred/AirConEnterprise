// import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Button from '../components/Button'
import useScrollReveal from '../hooks/useScrollReveal'
import PopIn from '../components/PopIn'
import clsx from 'clsx'

const CATEGORIES = [
  {
    title: 'Window AC',
    body: 'Compact and easy to install in a standard window frame.',
    image: 'assets/images/windowAirConditioner.jpg',
    alt: 'Window air conditioner',
    to: '/buy',
  },
  {
    title: 'Split System',
    body: 'Quiet indoor unit with a separate outdoor condenser.',
    image: 'assets/images/photo_2026-07-27_15-49-45.jpg',
    alt: 'Split system outdoor unit',
    to: '/buy',
  },
  {
    title: 'Multi-Split / Central',
    body: 'Cool several rooms from one outdoor unit or ducted system.',
    image: 'assets/images/24b12b8ce4692f52cfb7960dc06c57e3.jpg',
    alt: 'Multiple air conditioning units on a building',
    to: '/buy',
  },
  {
    title: 'Services & Maintenance',
    body: 'Repair or maintain your AC for better performance.',
    icon: 'fa-wind',
    to: '/buy',
  },
]

const STATS = [
  { value: '1,240+', label: 'Units listed' },
  { value: '850+', label: 'Happy buyers' },
  { value: '100%', label: 'Verified sellers' },
  { value: '~2 hrs', label: 'Avg. seller response' },
]

export default function Home() {
  const [statsRef, statsVisible] = useScrollReveal(0.3)
  const [catsRef, catsVisible] = useScrollReveal(0.1)

  return (
    <div>
      {/* Hero */}
      <section className={clsx('hero', 'pt-20', 'overflow-hidden')}>
        <div className={clsx('container', 'hero-inner', 'grid', 'grid-cols-1', 'lg:grid-cols-[1.1fr_0.9fr]', 'gap-12.5', 'items-center')}>
          <div className="hero-text">
            <p className="eyebrow">Best Enterprise's marketplace for air conditioners</p>
            <h1 className={clsx('text-[2.75rem]', 'mt-3.5', 'mb-4.5', 'text-text', 'leading-tight')}>
              Buy a cooler summer.<br />Sell the one collecting dust.
            </h1>
            <p className={clsx('hero-sub', 'text-text-muted', 'max-w-120', 'mb-7.5', 'text-[1.05rem]')}>
              Browse verified new & used air conditioners near you, or list your old unit in minutes and start getting offers today.
            </p>

            <form className={clsx('search-box', 'flex', 'bg-surface', 'border', 'border-border', 'rounded-[10px]', 'shadow-(--shadow-base)', 'p-1.5', 'mb-6', 'max-w-130')}>
              <input
                type="text"
                placeholder="Search brand, e.g. Daikin, LG, Mitsubishi"
                className={clsx('flex-1', 'border-none', 'outline-none', 'px-3', 'py-2', 'font-body', 'text-sm', 'bg-transparent', 'text-text')}
              />
              <select className={clsx('border-none', 'outline-none', 'px-3', 'py-2', 'font-body', 'text-sm', 'bg-transparent', 'text-text', 'border-l', 'border-border')}>
                <option>Any Type</option>
                <option>Window AC</option>
                <option>Split System</option>
                <option>Portable AC</option>
                <option>Central / Ducted</option>
              </select>
              <button type="submit" className={clsx('btn', 'btn-primary', 'whitespace-nowrap')}>Search</button>
            </form>

            <div className={clsx('hero-buttons', 'flex', 'gap-4', 'flex-wrap')}>
              <Button to="/buy" variant="primary">Browse Listings</Button>
              <Button to="/sell-your-ac" variant="outline">List Your AC — It's Free</Button>
            </div>
          </div>

          {/* Gauge visual */}
          <div className={clsx('hero-visual', 'flex', 'justify-center')}>
            <div className={clsx('gauge', 'relative', 'w-70', 'h-70')}>
              <div className={clsx('gauge-face', 'w-full', 'h-full', 'rounded-full', 'bg-conic-[from_270deg,var(--color-primary)_0deg_180deg,var(--color-accent)_180deg_360deg]', 'shadow-[0_20px_45px_rgba(14,134,212,0.25)]', 'flex', 'items-center', 'justify-center', 'relative')}>
                <div className={clsx('absolute', 'w-[74%]', 'h-[74%]', 'bg-surface', 'rounded-full')}></div>
                <div className={clsx('gauge-needle', 'absolute', 'w-1', 'h-[38%]', 'bg-text', 'rounded-sm', 'top-[12%]', 'left-1/2', '-translate-x-1/2', 'origin-bottom', 'animate-needle-sway', 'z-2')}></div>
                <div className={clsx('gauge-center', 'absolute', 'w-4', 'h-4', 'bg-text', 'rounded-full', 'z-3')}></div>
              </div>
              <div className={clsx('gauge-label', 'gauge-label-left', 'absolute', 'top-1/2', '-translate-y-1/2', '-left-2.5dark:text-white', 'font-heading', 'font-semibold', 'text-[0.85rem]', 'text-surface', 'bg-[rgba(16,36,62,0.55)]', 'px-3', 'py-1', 'rounded-full', 'flex', 'items-center', 'gap-1', 'dark:bg-mist-800',  'dark:text-white')}>
                <i className={clsx('fa-solid', 'fa-snowflake')}></i> Buy
              </div>
              <div className={clsx('gauge-label', 'gauge-label-right', 'absolute', 'top-1/2', '-translate-y-1/2', '-right-2.5', 'font-heading', 'font-semibold', 'text-[0.85rem]', 'text-surface', 'bg-[rgba(16,36,62,0.55)]', 'px-3', 'py-1', 'rounded-full', 'flex', 'items-center', 'gap-1', 'dark:bg-mist-800',  'dark:text-white')}>
                <i className={clsx('fa-solid', 'fa-fire')}></i> Sell
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className={clsx('stats-strip', 'bg-primary', 'py-8.5')} ref={statsRef}>
        <div className={'container stats-grid grid grid-cols-4 text-center transition-all duration-700 ' + (statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')}>
          {STATS.map((s, i) => (
            <div key={i} className="stat">
              <span className={clsx('block', 'font-mono', 'text-[1.6rem]', 'font-semibold', 'text-white')}>{s.value}</span>
              <p className={clsx('text-[rgba(255,255,255,0.85)]', 'text-sm', 'mt-1')}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by category */}
      <section className="section" id="categories" ref={catsRef}>
        <div className="container">
          <SectionHeading eyebrow="Shop by type" title="Find the right unit for your space" />
          <div className={'category-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ' + (catsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')}>
            {CATEGORIES.map((cat, i) => (
              <PopIn key={i} delay={i * 100}>
                <Card {...cat} />
              </PopIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
