import Container from "./container";
import image from "../../assets/images/products/LastProducts-1.jpg";
import image2 from "../../assets/images/products/LastProducts-2.jpg";
import image3 from "../../assets/images/products/LastProducts-3.jpg";



function LastProducts() {
    return (
        <Container>
            <div className=" w-full h-96 px-11 my-19 text-white uppercase ">
                <div className="grid grid-flow-col grid-rows-2 gap-6 h-full">

                    <div className=" row-span-2 h-full rounded-md bg-primary p-7 relative">
                        <img src={image} alt="un delicieux burger presenter sur une planche en bois " className="absolute top-0 right-0 w-full h-full object-cover" />
                        <div className="relative z-12">
                            <span className="block font-bold text-lg">killer Burger</span>
                            <span className="block text-2xl font-black">Burger le plus populaire</span>
                        </div>
                    </div>

                    <div className="h-full rounded-md bg-primary p-7 relative">
                        <img src={image2} alt="un delicieux burger presenter sur une planche en bois " className="absolute top-0 right-0 w-full h-full object-cover" />
                        <div className="relative z-12">
                            <span className="block font-bold text-lg">Island Burger</span>
                            <span className=" block text-2xl font-black">plus de plaisir</span>
                            <span className="block text-2xl font-black">plus de saveur</span>
                        </div>
                    </div>

                    <div className="h-full rounded-md bg-primary p-7 relative">
                        <img src={image3} alt="un delicieux burger presenter sur une planche en bois " className="absolute top-0 right-0 w-full h-full object-cover" />
                        <div className="relative z-12">
                            <span className="block font-bold text-lg">cheese Burger</span>
                            <span className="block text-2xl font-black">frais & pimenté</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}


export default LastProducts;