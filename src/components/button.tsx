import { cn } from "../lib/utils";
import { Loader2 } from "lucide-react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        " p-4 rounded-xl w-full text-xl font-bold bg-(--accent) text-(--text-accent) hover:bg-(--accent-border) transition-all hover:cursor-pointer",
        className,
      )}
      {...props}
    >
      {props.isLoading ? (
        <div className="w-fit m-auto my-0">
          <Loader2 size={21} className="transition-all animate-spin" />
        </div>
      ) : (
        children
      )}
    </button>
  );
};
export { Button };
