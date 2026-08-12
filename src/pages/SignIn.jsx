import { useState } from 'react'
import Button from '../components/Button'

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.email.trim() || !formData.password.trim()) return
    setSubmitted(true)
    setFormData({ email: '', password: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="auth-wrapper min-h-[calc(100vh-130px)] flex items-center justify-center bg-[#eaf6ff] py-16 px-5">
      <div className="auth-card bg-surface rounded-[var(--radius-base)] shadow-[0_20px_50px_rgba(14,134,212,0.12)] p-12 w-full max-w-[440px]">
        <div className="auth-logo flex items-center justify-center gap-2 font-heading font-bold text-[1.3rem] text-primary mb-7">
          <i className="fa-solid fa-snowflake"></i>
          Best Enterprise
        </div>

        <h1 className="text-[1.6rem] text-center mb-1">Welcome back</h1>
        <p className="auth-sub text-center text-text-muted text-sm mb-8">Sign in to manage your listings and messages.</p>

        <form id="signin-form" onSubmit={handleSubmit} novalidate>
          <div className="form-group mb-5">
            <label htmlFor="signin-email" className="block text-sm font-semibold text-text mb-1">Email Address</label>
            <input
              type="email"
              id="signin-email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              className="w-full px-3 py-2 border border-border rounded-lg font-body text-sm text-text bg-white outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(14,134,212,0.12)] transition-colors"
            />
          </div>

          <div className="form-group mb-2">
            <label htmlFor="signin-password" className="block text-sm font-semibold text-text mb-1">Password</label>
            <div className="password-row relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="signin-password"
                name="password"
                placeholder="Min. 6 characters"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                className="w-full px-3 py-2 pr-16 border border-border rounded-lg font-body text-sm text-text bg-white outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(14,134,212,0.12)] transition-colors"
              />
              <button
                type="button"
                className="password-toggle absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none text-primary text-xs font-semibold cursor-pointer font-heading"
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="auth-forgot text-right mt-[-6px] mb-5">
            <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
          </div>

          <Button type="submit" variant="primary" className="w-full py-3.5 text-base auth-submit">Sign In</Button>

          {submitted && (
            <div className="form-success mt-4 bg-[#e6f9f2] border border-[var(--color-success)] text-[#1a7a50] rounded-lg p-4 text-sm font-medium text-center" role="alert">
              <i className="fa-solid fa-circle-check mr-1"></i>
              Signed in successfully! Redirecting…
            </div>
          )}
        </form>

        <div className="auth-divider text-center text-text-muted text-sm my-6 relative">
          <span className="relative bg-surface px-4">or</span>
        </div>

        <p className="auth-register text-center text-sm text-text-muted">
          Don't have an account?{' '}
          <a href="/sell-your-ac" className="text-primary font-semibold hover:underline">Register as a seller</a>
        </p>
      </div>
    </div>
  )
}
