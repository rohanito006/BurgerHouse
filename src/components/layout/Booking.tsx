import Container from "./container";
import Assiete from "../../assets/images/background/Assiette-burger-frites.png";
import Sauce from "../../assets/images/background/Sauce-pimente.png";
import Burger from "../../assets/images/background/Burger.png";
import Heading from "../ui/Heading";


function Booking() {
    return (
        <Container>
            <div className="relative mb-20 overflow-x-clip md:overflow-x-visible">

                <img src={Burger} alt="un hamburger" className="absolute -top-10 -left-10 w-32 md:w-auto md:-top-20 md:-left-36 z-10 opacity-50 md:opacity-100" />
                <img src={Sauce} alt="sauce pimentée" className="absolute bottom-0 left-0 w-20 md:w-auto hidden sm:block" />
                <img src={Assiete} alt="une assiette de burger frites" className="absolute -bottom-52 -right-96 hidden lg:block" />

                    <div className="max-w-3xl mx-auto py-20 px-6 md:py-72">
                        <Heading variant="h3">
                            Réservation 
                        </Heading>

                        <Heading theme="secondary">
                            Réservez votre table
                        </Heading>

                        <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7 mt-10">

                            <div className="flex flex-col">
                                <label htmlFor="name" className="font-bold mb-2">Nom</label>
                                <input 
                                    type="text"
                                    placeholder="Nom"
                                    id="name"
                                    className="w-full focus:ring-primary focus:border border border-gray-400 rounded-md p-4 md:p-5"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="font-bold mb-2">Email</label>
                                <input 
                                    type="email"
                                    placeholder="Jd@gmail.com"
                                    id="email"
                                    className="w-full focus:ring-primary focus:border border border-gray-400 rounded-md p-4 md:p-5"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="date" className="font-bold mb-2">Date</label>
                                <input 
                                    type="date"
                                    id="date"
                                    className="w-full focus:ring-primary focus:border border border-gray-400 rounded-md p-4 md:p-5"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="time" className="font-bold mb-2">Heure</label>
                                <input 
                                    type="time"
                                    id="time"
                                    className="w-full focus:ring-primary focus:border border border-gray-400 rounded-md p-4 md:p-5"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="customer" className="font-bold mb-2">Nombre de personnes</label>
                                <input 
                                    type="number"
                                    placeholder="5"
                                    id="customer"
                                    className="w-full focus:ring-primary focus:border border border-gray-400 rounded-md p-4 md:p-5"
                                />
                            </div>

                            <div className="flex flex-col justify-end">
                                {/* On garde le label invisible pour l'alignement grid sur desktop */}
                                <label className="hidden md:block invisible mb-2">Bouton</label>
                                <input 
                                    type="button"
                                    className="w-full bg-red-600 font-Alfa hover:bg-red-700 text-white tracking-widest uppercase py-4 md:py-5 rounded-md cursor-pointer transition-colors"
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