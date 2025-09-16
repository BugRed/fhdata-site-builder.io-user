import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-normal break-words text-sm sm:text-base font-bold max-w-[90vw] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
        hero: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-card font-semibold px-8 py-6 text-base",
        floating: "bg-transparent border border-[#FAF6E6] text-[#FAF6E6] hover:border-primary-dark hover:text-primary-dark rounded-[10px] px-[21px] py-[13px] font-bold text-[15px] leading-[158.7%] tracking-[-0.45px] transition-all duration-300 font-['Source_Sans_Pro'] h-[50px] w-[181px]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        contact: "bg-primary text-primary-foreground hover:bg-primary-dark shadow-soft font-semibold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface MagicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  side?: 'left' | 'right'
}

const MagicButton = React.forwardRef<HTMLButtonElement, MagicButtonProps>(
  ({ className, variant, size, asChild = false, children, onClick, side = 'left', ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // Classes condicionais baseadas no lado escolhido (apenas para alinhamento do container)
    const containerClasses = side === 'right'
      ? "relative inline-block ml-auto" // Alinha à direita
      : "relative inline-block mr-auto"; // Alinha à esquerda

    return (
      <div className={containerClasses}>
        {/* Ícone do canto superior esquerdo com fundo primary-dark */}
        <div className="absolute -top-[6px] -left-[6px] w-6 h-6 bg-primary-dark rounded-xl flex items-center justify-center z-10">
          <Lightbulb className="w-[14px] h-[14px] text-primary" />
        </div>

        {/* Botão principal */}
        <Comp
          className={cn(
            buttonVariants({ variant, size }),
            className
          )}
          ref={ref}
          onClick={onClick}
          {...props}
        >
          {children}
        </Comp>
      </div>
    );
  },
);

MagicButton.displayName = "MagicButton";

export { MagicButton, buttonVariants };
