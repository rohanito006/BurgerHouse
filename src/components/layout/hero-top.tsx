import bgFood from '../../assets/images/background/bg-food.jpg';
import burgerHeroTop from '../../assets/images/heroTop/burger-hero-top.png';
import Button from '../ui/Button';
import Container from './container';
import Header from './header';


function HeroTop() {
    return (
        <div className="bg-primary w-full ">
           <div 
           style={{backgroundImage: `url(${bgFood})`}}
           className="bg-bg-food w-full pb-29 bg-center bg-repeat"
           >
            <Container>
                < Header/>

                <div className=' relative mt-10 md:mt-28 w-full '>
                   <img src={burgerHeroTop} alt="Menu burger avec frites et coca cola." className='z-0 absolute -top-64 right-0 w-6/12 hidden md:block'/>
                    {/* 
                    <div className='absolute top-45 right-90 bg-red-primary w-40 h-40 rounded-full p-3'>
                        <div className='w-full h-full rounded-full text-white border-2 border-dashed border-white flex justify-center items-center'>
                            <div className='text-center'>
                                <span className='block font-extrabold '>
                                    <span className='text-6xl'>5</span>
                                    .49$
                                </span>
                                 

                                <span className='tracking-widest uppercase text-sm '>seulement</span>
                            </div>
                        </div>
                    </div>
                        */}
                    
                    <div className='relative  text-secondary uppercase  px-4 py-8 '>
                        <h1 className='mb-4 font-semibold '>
                            c'est le moment de goûter à l'excellence des Hamburgers ! 
                        </h1>

                        <h2 className='font-Alfa font-bold text-shadow-xl'>
                            <span className='text-7xl md:text-8xl block'>Burger</span>
                             <span className='text-4xl mr-3 md:text-6xl block sm:inline-block '>House</span> 
                             <span className='text-4xl ml-0 sm:ml-3'>Click <span className='text-red-primary'>&</span> Collect</span>  
                        </h2>
                    </div>
                </div>
                <Button className={' mt-5'} theme='big' color='secondary'>
                    Créer mon compte
                </Button>

         

            </Container>
           </div>
            
        </div>
    )
}

export default HeroTop;