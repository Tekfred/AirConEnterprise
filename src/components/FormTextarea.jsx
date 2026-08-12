export default function FormTextarea({ label, id, name, placeholder, value, onChange, error, required }) {
  return (
    <div className="form-group">
      <label htmlFor={id} className={clsx('block', 'text-sm', 'font-semibold', 'text-text', 'mb-1')}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows="5"
        className={'w-full px-3 py-2 border border-border rounded-lg font-body text-sm text-text bg-white outline-none transition-colors resize-y min-h-30 ' + (error ? 'border-red-500' : 'focus:border-primary focus:shadow-[0_0_0_3px_rgba(14,134,212,0.12)]')}
      />
      {error && <span className={clsx('form-error', 'text-xs', 'text-red-500', 'mt-1', 'block')}>{error}</span>}
    </div>
  )
}
