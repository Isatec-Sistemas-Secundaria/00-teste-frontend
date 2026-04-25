import { cn } from "../lib/utils";
type Label = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label: React.FC<Label> = ({ children, className, ...props }) => {
  return (
    <label
      className={cn(
        "px-0 py-1 m-0 w-full text-left block text-(--text-h)",
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
};

export { Label };
