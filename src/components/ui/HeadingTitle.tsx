interface HeadingTitleProps {
  children: React.ReactNode;
    variant?: 'h2' | 'h3';
}

function HeadingTitle(props: HeadingTitleProps) {

    const {
        children,
        variant
    } = props;

    const classDefault = "py-4 px-7 bg-primary text-secondary uppercase font-bold inline-block ";

   switch (variant) {
    case "h3":
        return (
            
            <div className="flex justify-center items-center my-5">

              <h3 className={`${classDefault} text-sm`}>
                {children}
              </h3>
            </div>
        );
   
    default:
        return (
            <div className="flex justify-center items-center my-5">

              <h2 className={`${classDefault}`}>
                {children}
              </h2>

            </div>
        );
        break;
   }
}

export default HeadingTitle;