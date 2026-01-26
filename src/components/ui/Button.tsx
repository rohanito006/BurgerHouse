interface ButtonProps {
  children: React.ReactNode;
  className?: string; 
  theme?: 'big' | 'small'; // On définit le type ici
}

function Button({ children, className, theme }: ButtonProps) {
    
    switch (theme) {
        case 'small':
            return (
          <button className={ ` font-Roboto px-4 py-2 text-sm
           text-white rounded-2xl  uppercase shadow-lg hover:shadow-xl transition-all duration-50 font-semibold hover:border-2 border-white ${className}`}>
              {children}
          </button>
            );                  
        break;

        case 'big':

            return (
          <button className={ ` font-Roboto px-8 py-4 text-base
           text-white rounded-sm  uppercase shadow-lg hover:shadow-xl transition-all duration-50 font-semibold tracking-wider hover:border-2 border-white ${className}`}>
              {children}
          </button>
            );                  
        break;
    
        default:
            return (
        <button className={ ` font-Roboto px-5 py-3 text-sm
         text-white rounded-sm  uppercase shadow-lg hover:shadow-xl transition-all duration-50 font-semibold tracking-wider hover:border-2 border-white ${className}`}>
            {children}
        </button>
    );
    }
}

export default Button;