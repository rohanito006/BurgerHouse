import Container from "./container";
import imgFooter from "../../assets/images/background/bg-footer.jpg"
import Logo from '../../assets/svg/Logo-burger-house-white.svg';
import FacebookIcon from  '../../assets/svg/facebook-brands-solid-full.svg'
import InstagramIcon from '../../assets/svg/square-instagram-brands-solid-full.svg'
import Whahtsapp from '../../assets/svg/square-whatsapp-brands-solid-full.svg'

function Footer() {
    return(
        <Container>
            <div className="relative mb-20 p-5 text-white ">
                <img src={imgFooter} alt="plan de travail du restaurant avec 2 burger" className="bg-black absolute top-0 left-0 w-full h-full object-cover z-0"/>
                <div className=" h-96 relative grid grid-cols-2 z-10">

                    <div className="">
                        <div className='w-full mx-5 mt-18'>
                       <img src={Logo} alt="Logo Burger House" className='w-72 ' />
                        </div>

                        <div className='w-full mx-5 mt-9 text-left'>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perferendis natus vel pariatur minima! Consectetur officiis error quas, possimus consequuntur libero eos tenetur amet .
                            </p>
                        </div>

                    </div>

                    <div className=" w-full h-full flex flex-col items-center justify-center gap-4">
                        <div className="flex justify-center items-center gap-2"> 
                            <svg xmlns="http://www.w3.org/   2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <span className="uppercase font-extrabold text-lg tracking-tighter">
                                15, Avenue des Forces Armées
                            </span>
                        </div>

                        <div className="flex justify-center items-center gap-2"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                            <span className="uppercase font-extrabold text-lg tracking-tighter">
                                info@burgerhouse.com
                            </span>
                        </div>
                        
                    </div>
                </div>

                <div className="relative h-20 z-10 flex justify-between items-center">
                     <div className="uppercase font-extrabold tracking-tighter text-sm">© Burger House 2026. ALL RIGHTS RESERVED. </div>
                     <div className="flex justify-around items-center gap-2"> 
                         <div className="rounded-md hover:bg-blue-200">
                          <img src={FacebookIcon} className="w-8 " alt="" />
                         </div>
                         <div className="rounded-md hover:bg-blue-200">
                            <img src={InstagramIcon} className="w-8"  alt="" />
                         </div>
                         <div className="rounded-md hover:bg-blue-200" >
                            <img src={Whahtsapp} className="w-8" alt="" />
                         </div>
                     </div>
                </div>
            </div>
        </Container>
    )
}

export default Footer;