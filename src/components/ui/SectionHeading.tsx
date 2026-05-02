import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeading({ title, subtitle, className, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", align === "center" ? "text-center" : "text-left", className)}>
      <h2 className="text-4xl md:text-5xl font-heading tracking-wide uppercase text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-secondary/80 max-w-2xl text-lg font-sans">
          {subtitle}
        </p>
      )}
      <div className={cn("h-1 w-16 bg-primary mt-6", align === "center" ? "mx-auto" : "")} />
    </div>
  )
}
