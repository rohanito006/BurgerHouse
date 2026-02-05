import Container from "./container";
import image from "../../assets/images/products/LastProducts-1.jpg";
import image2 from "../../assets/images/products/LastProducts-2.jpg";
import image3 from "../../assets/images/products/LastProducts-3.jpg";



function LastProducts() {
    return (
        <Container>
            <div className=" w-full h-96  text-white uppercase p-0 md:px-11 my-19">
                <div className="grid grid-cols-1 grid-rows-2 gap-6 h-full md:grid-cols-2">

                    <div className=" row-span-2 h-full rounded-md bg-primary p-7 relative">
                        <img src={image} alt="un delicieux burger presenter sur une planche en bois " className="absolute top-0 right-0 w-full h-full object-cover" />
                        <div className="relative z-12">
                            <span className="block font-bold text-sm md:text-lg">killer Burger</span>
                            <span className="block text-xl font-black md:text-2xl">Burger le plus populaire</span>
                        </div>
                    </div>

                    <div className="h-full rounded-md bg-primary p-7 relative">
                        <img src={image2} alt="un delicieux burger presenter sur une planche en bois " className="absolute top-0 right-0 w-full h-full object-cover" />
                        <div className="relative z-12">
                            <span className="block font-bold text-sm md:text-lg">Island Burger</span>
                            <span className=" block text-xl font-black md:text-2xl">plus de plaisir</span>
                            <span className="block text-xl font-black md:text-2xl">plus de saveur</span>
                        </div>
                    </div>

                    <div className="h-full rounded-md bg-primary p-7 relative">
                        <img src={image3} alt="un delicieux burger presenter sur une planche en bois " className="absolute top-0 right-0 w-full h-full object-cover" />
                        <div className="relative z-12">
                            <span className="block font-bold text-lg">cheese Burger</span>
                            <span className="block text-xl font-black md:text-2xl">frais & pimenté</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}


export default LastProducts;