import cn from "../../../util/cn"

export default function Input({ className, ...props}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className={cn("h-11 dark:bg-(--bg) text-(--text) rounded-lg placeholder:text-(--fg-sec) px-4 border border-(--border) focus:outline-none focus:ring-2 focus:ring-(--accent) disabled:cursor-not-allowed disabled:bg-(--fg-sec)/20  ", className)} {...props} />
  )
}