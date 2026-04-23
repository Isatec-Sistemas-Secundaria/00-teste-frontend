interface InputProps {
  text: string;
  type?: string;
  name?: string;
  placeholder?: string;
}

export function Input({ text, type = "text", name, placeholder }: InputProps) {
  return (
    <div className="flex flex-col w-full max-w-[340px]">
      <label className="mt-6 text-sm" htmlFor={name}>
        {text}
      </label>

      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        className="h-10 w-full pl-4 rounded-md border border-gray-200  focus:border-[#2563EA] outline-none"
      />
    </div>
  );
}