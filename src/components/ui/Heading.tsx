interface HeadingProps {
    children: React.ReactNode;
    variant?: 'h2' | 'h3';
    theme?: 'secondary';
    display?: 'gray';
}

function Heading(props: HeadingProps) {
     const {
        children,
        variant,
        theme,
        display
    } = props;

    const classDefault = "mt-5 uppercase";

    let font, color;

    switch (theme) {
        case "secondary":
            font = "font-Alfa";
            break;
    
        default:
            font = "tracking-tighter";
            break;
    }

    switch (display) {
        case 'gray':
            color = 'text-gray-700';
            break;

        default:
            color = 'text-secondary';
            break;
    }


   switch (variant) {
    case "h3":
        return (
            
            <div className="  flex justify-center items-center my-5">

              <h3 className={`${classDefault} ${font} ${color} text-2xl`}>
                {children}
              </h3>
            </div>
        );
        break;
   
    default:
        return (
            <div className="flex justify-center items-center my-5">

              <h2 className={`${theme === "secondary"? 'text-lg md:text-5xl':'text-2xl'} font-semibold ${classDefault} ${font} ${color}`}>
                {children}
              </h2>

            </div>
        );
        break;
   }
}

export default Heading;