import { cn } from "../lib/utils";
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        // "p-7 rounded-xl w-full block bg-(--bg) border h-12 text-xl font-light",
        "px-4 py-6 rounded-xl w-full block bg-(--bg) border h-15 text-xl font-light m-0",

        className,
      )}
      {...props}
    ></input>
  );
};
export { Input };
