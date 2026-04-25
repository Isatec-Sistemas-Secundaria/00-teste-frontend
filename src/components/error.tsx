import { cn } from "../lib/utils";
type ErrorProps = React.BaseHTMLAttributes<HTMLSpanElement>;

const Error: React.FC<ErrorProps> = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        "text-red-500 inline-block text-left text-lg w-full mb-1",

        className,
      )}
      {...props}
    ></span>
  );
};
export { Error };
