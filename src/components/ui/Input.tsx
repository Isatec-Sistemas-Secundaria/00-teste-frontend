import { forwardRef, useState, type InputHTMLAttributes } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, type, id, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-label text-label font-semibold">
          {label}
        </label>

        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type={inputType}
            className={[
              'w-full rounded-lg border bg-input px-4 py-3 text-body text-foreground',
              'placeholder:text-input-placeholder outline-none transition-colors',
              'focus:border-primary focus:ring-2 focus:ring-primary/20',
              error ? 'border-red-500' : 'border-input-border',
              isPassword ? 'pr-11' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-secondary hover:text-foreground transition-colors"
              tabIndex={-1}
              aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>

        <p className="text-caption text-red-500 min-h-4">{error || ''}</p>
      </div>
    );
  },
);

Input.displayName = 'Input';
