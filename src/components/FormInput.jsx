export default function FormInput({ label, id, type = 'text', name, placeholder, value, onChange, error, required, autoComplete }) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="block text-sm font-semibold text-text mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className={'w-full px-3 py-2 border border-border rounded-lg font-body text-sm text-text bg-white outline-none transition-colors ' + (error ? 'border-red-500' : 'focus:border-primary focus:shadow-[0_0_0_3px_rgba(14,134,212,0.12)]')}
      />
      {error && <span className="form-error text-xs text-red-500 mt-1 block">{error}</span>}
    </div>
  )
}
