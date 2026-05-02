import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "danger"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 uppercase tracking-widest font-heading"
  
  const variants = {
    default: "border-transparent bg-primary text-black hover:bg-primary/80",
    outline: "border-secondary/30 text-secondary",
    danger: "border-transparent bg-danger text-white hover:bg-danger/80",
  }

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props} />
  )
}
