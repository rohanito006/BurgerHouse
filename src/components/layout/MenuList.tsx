import Container from "./container";
import image from "../../assets/images/products/burger1.png"
import image4 from "../../assets/images/products/burger4.png"
import image3 from "../../assets/images/products/burger3.png"
import Button from "../ui/Button";
import Heading from "../ui/Heading";




function MenuList() {
    return (
        <Container>
            <div className="flex flex-col  md:flex-row flex-wrap items-center justify-center gap-10 md:gap-4 mb-20 px-4">
    
    {/* Carte 1 */}
        <div className="w-full md:w-1/3 max-w-sm">
            <div className="rounded-md flex items-center justify-center">
                <img src={image} alt="Classico burger" className="w-auto h-auto object-contain" />
            </div>
            <div className="flex-col flex items-center justify-center mt-4">
                <Heading>classico burger</Heading>
                <p className="text-center line-clamp-2">
                    steak juteux, fromage fondant, laitue croquante, tomates fraîches.
                </p>
                <Button className="mt-5 font-Alfa tracking-wider" color="danger">
                    commandez
                </Button>
            </div>
        </div>

    {/* Carte 2 */}
         <div className="w-full md:w-1/3 ">
             <div className="rounded-md flex items-center justify-center">
                 <img src={image4} alt="Cheese Burger" className="w-auto h-auto object-contain" />
             </div>
             <div className="flex-col flex items-center justify-center mt-4">
                 <Heading>Cheese Burger</Heading>
                 <p className="text-center line-clamp-2">
                     steak juteux, fromage fondant, laitue croquante, tomates fraîches et sauce légère.
                 </p>
                 <Button className="font-Alfa mt-5 tracking-wider" color="danger">
                     commandez
                 </Button>
             </div>
         </div>

    {/* Carte 3 */}
               <div className="w-full md:w-1/3 max-w-sm">
                   <div className="rounded-md flex items-center justify-center">
                       <img src={image3} alt="Big House Burger" className="w-auto h-auto object-contain" />
                   </div>
                   <div className="flex-col flex items-center justify-center mt-4">
                       <Heading>Big House Burger</Heading>
                       <p className="text-center line-clamp-2">
                           steak savoureux, fromage fondant, laitue fraîche, tomates juteuses et sauce house.
                       </p>
                       <Button className="mt-5 font-Alfa tracking-wider" color="danger">
                           commandez
                       </Button>
                   </div>
               </div>
           </div>
        </Container>
    );
}

export default MenuList;