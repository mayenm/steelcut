import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "whatsapp" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

type ButtonChildProps = {
  className?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider font-heading"
    
    const variants = {
      default: "bg-primary text-black hover:bg-primary/90",
      outline: "border border-primary text-primary hover:bg-primary/10",
      whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a]",
      ghost: "hover:bg-accent hover:text-accent-foreground",
    }
    
    const sizes = {
      default: "h-10 px-6 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-12 rounded-md px-8 text-base",
      icon: "h-10 w-10",
    }

    if (asChild && React.isValidElement(props.children)) {
      const child = props.children as React.ReactElement<ButtonChildProps>
      return React.cloneElement(child, {
        className: cn(baseStyles, variants[variant], sizes[size], className, child.props.className),
      })
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
