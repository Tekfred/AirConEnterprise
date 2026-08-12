import { Outlet, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function MainLayout() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={clsx('min-h-screen', 'flex', 'flex-col', 'bg-white', 'text-text')}>
      <header className={clsx('site-header', 'bg-surface', 'border-b', 'border-border', 'sticky', 'top-0', 'z-100')}>
        <div className={clsx('container', 'header-inner', 'flex', 'items-center', 'justify-between', 'py-4.5')}>
          <NavLink to="/" className={clsx('logo', 'font-heading', 'font-bold', 'text-[1.3rem]', 'text-primary', 'flex', 'items-center', 'gap-2')}>
            <i className={clsx('fa-solid', 'fa-snowflake')}></i>
            Best Enterprise
          </NavLink>

          <nav className={clsx('main-nav', 'hidden', 'md:flex', 'gap-8')}>
            <NavLink to="/buy" className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-primary font-semibold' : 'text-text'}`}>Buy</NavLink>
            <NavLink to="/sell" className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-primary font-semibold' : 'text-text'}`}>Sell</NavLink>
            <NavLink to="/how-it-works" className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-primary font-semibold' : 'text-text'}`}>How It Works</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-primary font-semibold' : 'text-text'}`}>Contact</NavLink>
          </nav>

          <div className={clsx('header-actions', 'hidden', 'md:flex', 'items-center', 'gap-3')}>
            <button
              onClick={toggleTheme}
              className={clsx('btn', 'btn-ghost', 'text-sm', 'flex', 'items-center', 'gap-1')}
              aria-label="Toggle theme"
            >
              <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
            </button>
            <NavLink to="/sign-in" className={clsx('btn', 'btn-ghost')}>Sign In</NavLink>
            <NavLink to="/sell-your-ac" className={clsx('btn', 'btn-accent')}>Sell Your AC</NavLink>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className={clsx('site-footer', 'bg-dark-bg', 'text-[#cfe3f0]', 'pt-15')}>
        <div className={clsx('container', 'footer-grid', 'grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-4', 'gap-8', 'pb-10', 'border-b', 'border-white/10')}>
          <div className="footer-brand">
            <NavLink to="/" className={clsx('logo', 'logo-footer', 'font-heading', 'font-bold', 'text-[1.3rem]', 'text-white', 'flex', 'items-center', 'gap-2')}>
              <i className={clsx('fa-solid', 'fa-snowflake')}></i>
              Best Enterprise
            </NavLink>
            <p className={clsx('mt-3', 'text-sm', 'text-[#9fb8ca]')}>
              A simple, trusted marketplace for buying and selling air conditioners across Australia.
            </p>
          </div>
          <div className="footer-column">
            <h4 className={clsx('text-white', 'text-sm', 'font-semibold', 'mb-4')}>Buy</h4>
            <NavLink to="/buy" className={clsx('block', 'text-sm', 'text-[#9fb8ca]', 'mb-2', 'hover:text-accent', 'transition-colors')}>Browse All Listings</NavLink>
            <NavLink to="/buy" className={clsx('block', 'text-sm', 'text-[#9fb8ca]', 'mb-2', 'hover:text-accent', 'transition-colors')}>Window ACs</NavLink>
            <NavLink to="/buy" className={clsx('block', 'text-sm', 'text-[#9fb8ca]', 'mb-2', 'hover:text-accent', 'transition-colors')}>Split Systems</NavLink>
            <NavLink to="/buy" className={clsx('block', 'text-sm', 'text-[#9fb8ca]', 'mb-2', 'hover:text-accent', 'transition-colors')}>Central / Ducted</NavLink>
          </div>
          <div className="footer-column">
            <h4 className={clsx('text-white', 'text-sm', 'font-semibold', 'mb-4')}>Sell</h4>
            <NavLink to="/sell-your-ac" className={clsx('block', 'text-sm', 'text-[#9fb8ca]', 'mb-2', 'hover:text-accent', 'transition-colors')}>List an Item</NavLink>
            <NavLink to="/sell" className={clsx('block', 'text-sm', 'text-[#9fb8ca]', 'mb-2', 'hover:text-accent', 'transition-colors')}>Pricing Guide</NavLink>
            <NavLink to="/sell" className={clsx('block', 'text-sm', 'text-[#9fb8ca]', 'mb-2', 'hover:text-accent', 'transition-colors')}>Seller Tips</NavLink>
          </div>
          <div className="footer-column">
            <h4 className={clsx('text-white', 'text-sm', 'font-semibold', 'mb-4')}>Company</h4>
            <NavLink to="/how-it-works" className={clsx('block', 'text-sm', 'text-[#9fb8ca]', 'mb-2', 'hover:text-accent', 'transition-colors')}>How It Works</NavLink>
            <NavLink to="/contact" className={clsx('block', 'text-sm', 'text-[#9fb8ca]', 'mb-2', 'hover:text-accent', 'transition-colors')}>Contact Us</NavLink>
            <NavLink to="/contact" className={clsx('block', 'text-sm', 'text-[#9fb8ca]', 'mb-2', 'hover:text-accent', 'transition-colors')}>FAQ</NavLink>
          </div>
        </div>
        <div className={clsx('container', 'footer-bottom', 'flex', 'items-center', 'justify-between', 'py-5')}>
          <p className={clsx('text-xs', 'text-[#9fb8ca]')}>© 2026 Best Enterprise. All rights reserved.</p>
          <div className={clsx('social-links', 'flex', 'gap-3')}>
            <a href="#" className={clsx('w-8', 'h-8', 'rounded-full', 'bg-white/10', 'flex', 'items-center', 'justify-center', 'hover:bg-accent', 'transition-colors')}><i className={clsx('fa-brands', 'fa-facebook-f', 'text-xs')}></i></a>
            <a href="#" className={clsx('w-8', 'h-8', 'rounded-full', 'bg-white/10', 'flex', 'items-center', 'justify-center', 'hover:bg-accent', 'transition-colors')}><i className={clsx('fa-brands', 'fa-instagram', 'text-xs')}></i></a>
            <a href="#" className={clsx('w-8', 'h-8', 'rounded-full', 'bg-white/10', 'flex', 'items-center', 'justify-center', 'hover:bg-accent', 'transition-colors')}><i className={clsx('fa-brands', 'fa-x-twitter', 'text-xs')}></i></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
