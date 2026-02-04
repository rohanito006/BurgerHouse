import Container from "./container";
import Assiete from "../../assets/images/background/Assiette-burger-frites.png";
import Sauce from "../../assets/images/background/Sauce-pimente.png";
import Burger from "../../assets/images/background/Burger.png";
import Heading from "../ui/Heading";


function Booking() {
    return (
        <Container>
            <div className="relative mb-20 ">
                <img src={Burger} alt="un hamburger" className="absolute  -top-20 -left-36 z-10 "/>
                <img src={Sauce} alt="sauce pimentée" className="absolute bottom-0 left-0"/>
                <img src={Assiete} alt="une assiette de burger frites" className=" absolute -bottom-52 -right-96"/>


                <div className="max-w-3xl mx-auto py-72  ">
                    <Heading variant="h3">
                        Réservation 
                    </Heading>

                    <Heading theme="secondary">
                        Réservez votre table
                    </Heading>

                    <form action="" className="grid grid-cols-2 gap-x-6 gap-y-7 mt-10">
                        <div className="">
                            <label htmlFor="email">
                                Nom
                            </label>
                            <input 
                               type="text"
                                placeholder="Nom"
                                id="name"
                                autoComplete="off"
                                className="w-full focus:ring-primary focus:border block border-gray-400 rounded-md p-5"
                             />
                        </div>

                        <div className="">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input 
                               type="email"
                                placeholder="Jd@gmail.com"
                                id="email"
                                autoComplete="off"
                                className="w-full focus:ring-primary focus:border block border-gray-400 rounded-md p-5"
                             />
                        </div>

                        <div className="">
                            <label htmlFor="date">
                                Date
                            </label>
                            <input 
                               type="date"
                                placeholder="Date"
                                id="date"
                                autoComplete="off"
                                className="w-full focus:ring-primary focus:border block border-gray-400 rounded-md p-5"
                             />
                        </div>

                        <div className="">
                            <label htmlFor="time">
                                Heure
                            </label>
                            <input 
                               type="time"
                                placeholder="heure"
                                id="time"
                                autoComplete="off"
                                className="w-full focus:ring-primary focus:border block border-gray-400 rounded-md p-5"
                             />
                        </div>

                        <div className="">
                            <label htmlFor="customer">
                                Nombre de personnes
                            </label>
                            <input 
                               type="text"
                                placeholder="5"
                                id="customer"
                                autoComplete="off"
                                className="w-full focus:ring-primary focus:border block border-gray-400 rounded-md p-5"
                             />
                        </div>
                        
                        <div className="">
                            <label htmlFor="sendBooking" className="invisible">
                                Réserver votre repas
                            </label>
                            <input 
                               type="button"
                                placeholder="sendBooking"
                                id="sendBooking"
                                className="w-full bg-red-primary font-Alfa hover:bg-red-primary-hover text-white tracking-widest uppercase py-5 rounded-md animate"
                                value="Réserver votre repas"
                             />
                        </div>
                       
                    </form>
                </div>
            </div>
        </Container>
    );
}

export default Booking;