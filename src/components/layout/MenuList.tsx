import Container from "./container";
import image from "../../assets/images/products/burger1.png"
import image4 from "../../assets/images/products/burger4.png"
import image3 from "../../assets/images/products/burger3.png"
import Button from "../ui/Button";
import Heading from "../ui/Heading";




function MenuList() {
    return (
        <Container>
            <div className="flex gap-4 mb-20">
                
              <div className="w-1/3 ">
                <div className=" rounded-md    flex items-center justify-center">
                    <img src={image} alt="un delicieux burger presenter sur une planche en bois " className="w-auto" />

                </div>

                <div className=" flex-col flex items-center justify-center">
                     <Heading >
                       classico burger
                     </Heading>

                     <p className="text-center line-clamp-2">
                        steak juteux, fromage fondant, laitue croquante, tomates fraîches.
                    </p>

                      <Button className={' mt-5 font-Alfa tracking-wider'}  color='danger'>
                          commandez
                     </Button>
                 </div>
              </div> 

              <div className="w-1/3">
                <div className=" rounded-md    flex items-center justify-center ">
                    <img src={image4} alt="un delicieux burger presenter sur une planche en bois " className="w-auto" />

                </div>

                <div className=" flex-col flex items-center justify-center ">
                     <Heading >
                       Cheese Burger
                     </Heading>

                     <p className="text-center">
                        steak juteux, fromage fondant, laitue croquante, tomates fraîches et sauce légère.                     
                    </p>

                      <Button className={'font-Alfa mt-5 tracking-wider'}  color='danger'>
                          commandez
                     </Button>
                 </div>
              </div>


              <div className="w-1/3">
                <div className=" rounded-md    flex items-center justify-center">
                    <img src={image3} alt="un delicieux burger presenter sur une planche en bois " className="w-auto" />

                </div>

                <div className=" flex-col flex items-center justify-center">
                     <Heading >
                       Big House Burger
                     </Heading>

                     <p className="text-center line-clamp-2">
                        steak savoureux, fromage fondant, laitue fraîche, tomates juteuses et sauce house, le tout dans un pain brioché généreux.
                     </p>

                      <Button className={'mt-5 font-Alfa tracking-wider'}  color='danger'>
                          commandez
                     </Button>
                 </div>
              </div>
            </div>
        </Container>
    );
}

export default MenuList;