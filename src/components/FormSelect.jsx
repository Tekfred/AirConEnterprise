export default function FormSelect({
  label,
  id,
  name,
  value,
  onChange,
  children,
  error,
  required,
}) {
  return (
    <div className="form-group">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-text mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={
          "w-full px-3 py-2 border border-border rounded-lg font-body text-sm text-text bg-(--color-bg) outline-none transition-colors " +
          (error
            ? "border-red-500"
            : "focus:border-primary focus:shadow-[0_0_0_3px_rgba(14,134,212,0.12)]")
        }
      >
        {children}
      </select>
      {error && (
        <span className="form-error text-xs text-red-500 mt-1 block">
          {error}
        </span>
      )}
    </div>
  );
}
