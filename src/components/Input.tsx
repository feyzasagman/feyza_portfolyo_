// src/components/Input.tsx
export default function Input({
  label,
  type = "text",
  error,
  helpText,
  id,
  ...props
}: any) {
  return (
    <div className="space-y-1">
      {/* Etiket Bölümü */}
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      {/* Input Alanı */}
      <input
        id={id}
        type={type}
        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 
          ${error
            ? "border-red-500/50 focus:ring-red-500/30"
            : "border-white/10 focus:border-[#818cf8]/50 focus:ring-[#818cf8]/20"} 
          ${props.disabled ? "bg-white/5 cursor-not-allowed opacity-50" : "bg-black/20 text-white placeholder:text-gray-500"}`}
        aria-describedby={error ? `${id}-error` : helpText ? `${id}-help` : undefined}
        {...props}
      />

      {/* Hata Mesajı */}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}

      {/* Yardım Metni */}
      {helpText && !error && (
        <p id={`${id}-help`} className="text-sm text-gray-500 dark:text-gray-400">
          {helpText}
        </p>
      )}
    </div>
  );
}