import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-ocean-deep text-white border border-ocean-blue/30 hover:bg-ocean-navy shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300",
        destructive:
          "bg-red-500 text-white hover:bg-red-500/90",
        outline:
          "border border-ocean-blue/40 bg-transparent hover:bg-marine-surface text-ocean-deep hover:-translate-y-[2px] transition-all duration-300",
        secondary:
          "bg-marine-surface text-ocean-deep hover:bg-marine-gray hover:-translate-y-[2px] transition-all duration-300",
        ghost: "hover:bg-marine-surface hover:text-ocean-deep",
        link: "text-marine-teal underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // We are not installing radix right now so we'll just use a normal button
    const Comp = asChild ? Slot : "button"
    if (asChild) {
      console.warn("asChild is true but @radix-ui/react-slot is not installed. Ignoring.")
    }
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
