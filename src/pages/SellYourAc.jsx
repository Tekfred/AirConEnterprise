import { useState } from 'react'
// import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import FormInput from '../components/FormInput'
import FormSelect from '../components/FormSelect'
import FormTextarea from '../components/FormTextarea'
import clsx from 'clsx'

const TRUST_ITEMS = [
  { icon: 'fa-circle-check', text: 'Free to list' },
  { icon: 'fa-shield-halved', text: 'Verified buyers only' },
  { icon: 'fa-bolt', text: 'Avg. response in 2 hrs' },
  { icon: 'fa-tag', text: 'You set the price' },
]

export default function SellYourAc() {
  const [formData, setFormData] = useState({
    brand: '', model: '', type: '', condition: '', year: '', description: '',
    price: '', location: '', phone: '', email: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    const required = ['brand', 'type', 'condition', 'price', 'location', 'phone']
    required.forEach(field => {
      if (!formData[field].trim()) newErrors[field] = 'This field is required'
    })
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setFormData({ brand: '', model: '', type: '', condition: '', year: '', description: '', price: '', location: '', phone: '', email: '' })
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <div>
      {/* Page hero */}
      <section className={clsx('page-hero', 'bg-linear-to-r', 'from-accent', 'to-accent-dark', 'py-17.5', 'text-center', 'text-white')}>
        <div className="container">
          <p className={clsx('eyebrow', 'mb-3')} style={{ color: 'rgba(255,255,255,0.75)' }}>Free listing</p>
          <h1 className={clsx('text-[2.5rem]', 'mb-3')}>List Your Air Conditioner</h1>
          <p className={clsx('text-[1.05rem]', 'text-[rgba(255,255,255,0.88)]', 'max-w-130', 'mx-auto')}>
            Fill in a few details, set your price, and start getting offers from verified buyers — 100% free.
          </p>
        </div>
      </section>

      {/* Trust badges */}
      <div className={clsx('trust-strip', 'bg-[#fff8f5]', 'border-b', 'border-[#fde0d0]', 'py-4.5')}>
        <div className={clsx('container', 'trust-strip-inner', 'flex', 'items-center', 'justify-center', 'gap-10', 'flex-wrap')}>
          {TRUST_ITEMS.map((item, i) => (
            <div key={i} className={clsx('trust-item', 'flex', 'items-center', 'gap-2', 'text-sm', 'font-medium', 'text-text-muted')}>
              <i className={clsx('fa-solid', '', '+', 'item.icon', '+', '', 'text-accent')}></i>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Listing form */}
      <section className="section">
        <div className="container">
          <div className={clsx('listing-form-wrapper', 'max-w-195', 'mx-auto')}>
            <form id="sell-listing-form" onSubmit={handleSubmit} novalidate>
              {/* Section 1: AC Details */}
              <h2 className={clsx('form-section-title', 'text-[1.05rem]', 'font-semibold', 'text-text', 'border-b-2', 'border-border', 'pb-2.5', 'mb-5', 'mt-9', 'first:mt-0')}>
                <i className={clsx('fa-solid', 'fa-snowflake', 'text-accent', 'mr-2')}></i>
                AC Details
              </h2>

              <div className={clsx('form-row', 'grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-4')}>
                <FormInput label="Brand" id="sell-brand" name="brand" placeholder="e.g. LG, Daikin, Samsung" value={formData.brand} onChange={handleChange} error={errors.brand} required />
                <FormInput label="Model / Name" id="sell-model" name="model" placeholder="e.g. LG Window 1.5 Ton" value={formData.model} onChange={handleChange} />
              </div>

              <div className={clsx('form-row', 'grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-4', 'mt-4')}>
                <FormSelect label="AC Type" id="sell-type" name="type" value={formData.type} onChange={handleChange} error={errors.type} required>
                  <option value="">Select type…</option>
                  <option>Window AC</option>
                  <option>Split System</option>
                  <option>Portable AC</option>
                  <option>Multi-Split / Central</option>
                  <option>Other</option>
                </FormSelect>
                <FormSelect label="Condition" id="sell-condition" name="condition" value={formData.condition} onChange={handleChange} error={errors.condition} required>
                  <option value="">Select condition…</option>
                  <option>New (unused)</option>
                  <option>Like New</option>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                </FormSelect>
                <FormInput label="Year (optional)" id="sell-year" name="year" type="number" placeholder="e.g. 2021" value={formData.year} onChange={handleChange} min="2000" max="2026" />
              </div>

              <div className="mt-4">
                <FormTextarea label="Description" id="sell-description" name="description" placeholder="Describe the unit — its condition, any features or faults, how long you've owned it, reason for selling…" value={formData.description} onChange={handleChange} />
              </div>

              {/* Section 2: Photos */}
              <h2 className={clsx('form-section-title', 'text-[1.05rem]', 'font-semibold', 'text-text', 'border-b-2', 'border-border', 'pb-2.5', 'mb-5', 'mt-9')}>
                <i className={clsx('fa-solid', 'fa-camera', 'text-accent', 'mr-2')}></i>
                Photos
              </h2>

              <label htmlFor="sell-photos" className={clsx('photo-dropzone', 'block', 'border-2', 'border-dashed', 'border-border', 'rounded-(--radius-base)', 'p-9', 'text-center', 'bg-[#f9fcff]', 'cursor-pointer', 'transition-colors', 'hover:border-accent', 'hover:bg-[#fff8f5]')}>
                <i className={clsx('fa-solid', 'fa-cloud-arrow-up', 'text-2xl', 'text-text-muted', 'mb-2', 'block')}></i>
                <p className={clsx('text-sm', 'text-text-muted')}>Click to upload photos of your unit</p>
                <span className={clsx('text-xs', 'text-text-muted', 'block', 'mt-1')}>JPEG or PNG · Max 5 MB each · Up to 6 photos</span>
                <input type="file" id="sell-photos" name="photos" accept="image/*" multiple className="hidden" />
              </label>

              {/* Section 3: Pricing & Location */}
              <h2 className={clsx('form-section-title', 'text-[1.05rem]', 'font-semibold', 'text-text', 'border-b-2', 'border-border', 'pb-2.5', 'mb-5', 'mt-9')}>
                <i className={clsx('fa-solid', 'fa-tag', 'text-accent', 'mr-2')}></i>
                Pricing & Location
              </h2>

              <div className={clsx('form-row', 'grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-4')}>
                <div className="form-group">
                  <label htmlFor="sell-price" className={clsx('block', 'text-sm', 'font-semibold', 'text-text', 'mb-1')}>Asking Price (GHC) <span className="text-red-500">*</span></label>
                  <div className={clsx('price-prefix-group', 'relative')}>
                    <span className={clsx('price-prefix', 'absolute', 'left-3.5', 'top-1/2', '-translate-y-1/2', 'font-mono', 'font-semibold', 'text-text-muted', 'pointer-events-none')}>Ghc</span>
                    <input
                      type="number"
                      id="sell-price"
                      name="price"
                      placeholder="e.g. 5000"
                      value={formData.price}
                      onChange={handleChange}
                      min="0"
                      className={'w-full pl-13 px-3 py-2 border border-border rounded-lg font-body text-sm text-text bg-white outline-none ' + (errors.price ? 'border-red-500' : 'focus:border-accent focus:shadow-[0_0_0_3px_rgba(255,122,69,0.12)]')}
                    />
                  </div>
                  {errors.price && <span className={clsx('text-xs', 'text-red-500', 'mt-1', 'block')}>{errors.price}</span>}
                </div>
                <FormInput label="Your Location" id="sell-location" name="location" placeholder="e.g. Accra, Kumasi, Takoradi" value={formData.location} onChange={handleChange} error={errors.location} required />
              </div>

              {/* Section 4: Contact */}
              <h2 className={clsx('form-section-title', 'text-[1.05rem]', 'font-semibold', 'text-text', 'border-b-2', 'border-border', 'pb-2.5', 'mb-5', 'mt-9')}>
                <i className={clsx('fa-solid', 'fa-phone', 'text-accent', 'mr-2')}></i>
                Your Contact Info
              </h2>

              <div className={clsx('form-row', 'grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-4')}>
                <FormInput label="Phone Number" id="sell-phone" name="phone" type="tel" placeholder="e.g. 055 000 1234" value={formData.phone} onChange={handleChange} error={errors.phone} required />
                <FormInput label="Email (optional)" id="sell-email" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} />
              </div>

              {/* Submit */}
              <div className={clsx('form-submit-area', 'mt-8', 'text-center')}>
                <Button type="submit" variant="accent" className={clsx('min-w-55', 'px-8', 'py-4', 'text-base')}>
                  <i className={clsx('fa-solid', 'fa-plus', 'mr-2')}></i>
                  Publish Free Listing
                </Button>
                <p className={clsx('text-xs', 'text-text-muted', 'mt-3')}>
                  By submitting, you agree to our <a href="/contact" className={clsx('text-primary', 'hover:underline')}>Terms of Service</a>.
                </p>
              </div>

              {/* Success message */}
              {submitted && (
                <div className={clsx('form-success', 'mt-5', 'bg-[#e6f9f2]', 'border', 'border-success', 'text-[#1a7a50]', 'rounded-lg', 'p-5', 'text-sm', 'font-medium', 'text-center')} role="alert">
                  <i className={clsx('fa-solid', 'fa-circle-check', 'text-lg', 'block', 'mb-2')}></i>
                  Your listing has been submitted! Our team will review it and it'll go live shortly.<br />
                  <a href="/buy" className={clsx('text-success', 'underline', 'mt-2', 'inline-block')}>Browse other listings</a>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
