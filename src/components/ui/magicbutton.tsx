import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
        hero: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-card font-semibold px-8 py-6 text-base",
        floating: "bg-primary text-white hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary shadow-card rounded-full px-6 py-3 font-medium transition-all duration-300",
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
    
    // Função para lidar com o clique no container
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (onClick) {
        // Convertemos o evento de div para o tipo esperado pelo onClick original
        onClick(e as any);
      }
    };
    
    // Classes condicionais baseadas no lado escolhido (apenas para alinhamento do container)
    const containerClasses = side === 'right' 
      ? "relative inline-block ml-auto" // Alinha à direita
      : "relative inline-block mr-auto"; // Alinha à esquerda
    
    return (
      <div className={containerClasses}>
        {/* Círculo branco SEMPRE no canto superior esquerdo */}
        {/* Tamanho da esfera: ajustar w-4 h-4 para aumentar */}
        {/* Box-shadow: ajustar shadow-[0_2px_8px_rgba(0,0,0,0.15)] para mudar cor/transparência */}
        <div className="absolute -top-1 -left-1 w-4 h-4 bg-white rounded-full border border-gray-200 z-10 transition-all duration-300 ease-in-out group-hover:bg-black shadow-[0_2px_8px_rgba(0,0,0,0.15)]" />
        
        {/* Container clicável transparente com grupo para hover */}
        <div className="group cursor-pointer" onClick={handleClick}>
          {/* Botão interno centralizado com bordas totalmente arredondadas */}
          {/* Box-shadow do botão: ajustar shadow-[0_4px_12px_rgba(0,0,0,0.25)] para mudar cor/transparência */}
          <Comp 
            className={cn(
              buttonVariants({ variant, size }), 
              "shadow-[0_4px_12px_rgba(0,0,0,0.25)] text-black", // Box-shadow preta e texto branco
              className
            )} 
            ref={ref} 
            {...props}
          >
            {children}
          </Comp>
          
          {/* Círculo com animação de preenchimento SEMPRE no canto superior esquerdo */}
          {/* Tamanho da esfera: ajustar w-4 h-4 para aumentar (mesmo valor do círculo acima) */}
          <div className="absolute -top-1 -left-1 w-4 h-4 rounded-full overflow-hidden z-20 pointer-events-none">
            <div className="w-full h-full bg-black rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out origin-center" />
          </div>
        </div>
      </div>
    );
  },
);

MagicButton.displayName = "MagicButton";

export { MagicButton, buttonVariants };
