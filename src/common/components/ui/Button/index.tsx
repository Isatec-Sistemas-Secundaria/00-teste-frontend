import cn from "../../../util/cn"

export default function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn("min-h-11 w-fit bg-(--accent-bg) text-(--bg) dark:text-(--fg) py-2 px-4 rounded-lg hover:bg-(--accent-bg)/80 transition-color duration-300 disabled:cursor-not-allowed disabled:bg-(--accent-bg)/50", className)} {...props}>
      {props.children}
    </button>
  )
}