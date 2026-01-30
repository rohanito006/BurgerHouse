interface ButtonProps {
  children: React.ReactNode;
  className?: string; 
  theme?: 'big' | 'small';
  color?: 'primary' | 'secondary'| 'danger';
}

function Button({ children, className, theme, color }: ButtonProps) {
    let background;

   switch (color) {
    case 'secondary':
        background = 'bg-secondary hover:bg-secondary-hover';
        break;
    case 'danger':
        background = 'bg-red-primary hover:bg-red-primary-hover';
        break;
   
    default:
         background = 'bg-primary hover:bg-primary-hover';
        break;
   }

    switch (theme) {
        case 'small':
            return (
          <button className={ ` font-Roboto px-4 py-3 text-sm
           text-white rounded-md  uppercase shadow-lg hover:shadow-xl transition-all duration-50 font-semibold ${className} ${background}`}>
              {children}
          </button>
            );                  
        break;

        case 'big':

            return (
          <button className={ ` font-Roboto px-8 py-4 text-base
           text-white rounded-md  uppercase shadow-lg hover:shadow-xl transition-all duration-50 font-semibold tracking-wider  ${className} ${background}`}>
              {children}
          </button>
            );                  
        break;
    
        default:
            return (
        <button className={ ` px-5 py-3 text-sm
         text-white rounded-md  uppercase shadow-lg hover:shadow-xl transition-all duration-50 font-semibold tracking-wider ${className} ${background}`}>
            {children}
        </button>
    );
    }
}

export default Button;