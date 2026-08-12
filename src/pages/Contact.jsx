import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import FormInput from '../components/FormInput'
import FormSelect from '../components/FormSelect'
import FormTextarea from '../components/FormTextarea'
import Button from '../components/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: '',
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
    const required = ['name', 'email', 'subject', 'message']
    required.forEach(field => {
      if (!formData[field].trim()) newErrors[field] = 'This field is required'
    })
    if (formData.email && !formData.email.includes('@')) newErrors.email = 'Please enter a valid email'
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <div>
      {/* Page hero */}
      <section className={clsx('page-hero', 'bg-linear-to-r', 'from-primary', 'to-primary-dark', 'py-17.5', 'text-center', 'text-white')}>
        <div className="container">
          <p className={clsx('eyebrow', 'mb-3')} style={{ color: 'rgba(255,255,255,0.75)' }}>We're here to help</p>
          <h1 className={clsx('text-[2.5rem]', 'mb-3')}>Contact Us</h1>
          <p className={clsx('text-[1.05rem]', 'text-[rgba(255,255,255,0.88)]', 'max-w-130', 'mx-auto')}>
            Have a question about a listing or need support? Drop us a message and we'll get back to you quickly.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="section" id="contact">
        <div className="container">
          <div className={clsx('contact-layout', 'grid', 'grid-cols-1', 'lg:grid-cols-[1fr_1.6fr]', 'gap-12', 'items-start')}>
            {/* Info column */}
            <div className="contact-info">
              <h2 className={clsx('text-[1.6rem]', 'mb-5')}>Get in touch</h2>
              <p className={clsx('text-text-muted', 'text-[0.96rem]', 'mb-8')}>
                We aim to respond to all enquiries within a few hours during business days. You can also reach us directly via the details below.
              </p>

              {[
                { icon: 'fa-envelope', label: 'Email', value: 'support@bestenterprise.com' },
                { icon: 'fa-phone', label: 'Phone', value: '+233 55 000 1234' },
                { icon: 'fa-location-dot', label: 'Office', value: '12 Independence Ave, Accra, Ghana' },
                { icon: 'fa-clock', label: 'Business Hours', value: 'Mon – Fri, 8 am – 5 pm GMT' },
              ].map((item, i) => (
                <div key={i} className={clsx('contact-detail', 'flex', 'items-start', 'gap-4', 'mb-6')}>
                  <div className={clsx('contact-detail-icon', 'w-11', 'h-11', 'rounded-full', 'bg-[#eaf6ff]', 'text-primary', 'flex', 'items-center', 'justify-center', 'text-base', 'shrink-0')}>
                    <i className={'fa-solid ' + item.icon}></i>
                  </div>
                  <div>
                    <strong className={clsx('block', 'text-sm', 'text-text', 'mb-0.5')}>{item.label}</strong>
                    <span className={clsx('text-sm', 'text-text-muted')}>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className={clsx('form-card', 'bg-surface', 'rounded-(--radius-base)', 'p-10', 'shadow-(--shadow-base)')}>
              <h3 className={clsx('text-[1.3rem]', 'mb-6')}>Send us a message</h3>
              <form id="contact-form" onSubmit={handleSubmit} novalidate>
                <div className={clsx('form-row', 'grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-4')}>
                  <FormInput label="Your Name" id="contact-name" name="name" placeholder="e.g. Kofi Mensah" value={formData.name} onChange={handleChange} error={errors.name} required />
                  <FormInput label="Email Address" id="contact-email" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} error={errors.email} required />
                </div>
                <div className="mt-4">
                  <FormSelect label="Subject" id="contact-subject" name="subject" value={formData.subject} onChange={handleChange} error={errors.subject} required>
                    <option value="">Select a subject…</option>
                    <option>Question about a listing</option>
                    <option>Selling my AC</option>
                    <option>Technical support</option>
                    <option>Billing enquiry</option>
                    <option>Other</option>
                  </FormSelect>
                </div>
                <div className="mt-4">
                  <FormTextarea label="Message" id="contact-message" name="message" placeholder="Tell us how we can help…" value={formData.message} onChange={handleChange} error={errors.message} required />
                </div>
                <div className="mt-6">
                  <Button type="submit" variant="primary" className={clsx('w-full', 'py-3.5', 'text-base', 'form-submit')}>Send Message</Button>
                </div>
                {submitted && (
                  <div className={clsx('form-success', 'mt-4', 'bg-[#e6f9f2]', 'border', 'border-success', 'text-[#1a7a50]', 'rounded-lg', 'p-4', 'text-sm', 'font-medium')} role="alert">
                    <i className={clsx('fa-solid', 'fa-circle-check', 'mr-1')}></i>
                    Thanks! Your message has been sent. We'll be in touch shortly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
