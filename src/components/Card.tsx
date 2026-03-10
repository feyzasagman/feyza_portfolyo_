// src/components/Card.tsx
export default function Card({ title, children, image, imageAlt, footer, variant = "elevated" }: any) {
  const variants: any = {
    elevated: "bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20",
    outlined: "bg-transparent border border-white/10 hover:border-white/20",
    filled: "bg-white/10 backdrop-blur-sm",
  };

  return (
    <div className={`rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${variants[variant]}`}>
      {image && (
        <img src={image} alt={imageAlt || ""} className="w-full h-48 object-cover" />
      )}
      <div className="p-5">
        {title && <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>}
        <div className="text-gray-600 dark:text-gray-400">{children}</div>
      </div>
      {footer && (
        <div className="px-6 py-4 bg-white/5 border-t border-white/5">
          {footer}
        </div>
      )}
    </div>
  );
}