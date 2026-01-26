import bgFood from '../../assets/images/background/bg-food.jpg';
import burgerHeroTop from '../../assets/images/heroTop/burger-hero-top.png';
import Button from '../ui/Button';
import Container from './container';
import Header from './header';


function HeroTop() {
    return (
        <div className="bg-primary w-full h-screen">
           <div 
           style={{backgroundImage: `url(${bgFood})`}}
           className="bg-bg-food w-full h-full bg-center bg-repeat ..."
           >
            <Container>
                < Header/>

                <div className='w-full relative mt-28'>
                   <img src={burgerHeroTop} alt="Menu burger avec frites et coca cola." className='z-0 absolute -top-64 right-0 w-6/12'/>

                    <div className='relative  text-secondary uppercase  px-4 py-8 '>
                        <h1 className='mb-4 font-semibold '>
                            c'est le moment de goûter à l'excellence des Hamburgers ! 
                        </h1>

                        <h2 className='font-Alfa font-bold '>
                            <span className='text-8xl block'>Burger</span>
                             <span className='text-6xl mr-3'>House</span> 
                             <span className='text-4xl'>Click <span className='text-red-primary'>&</span> Collect</span>  
                        </h2>
                    </div>
                </div>
                <Button className={'bg-secondary mt-5'} theme='big'>
                    Créer mon compte
                </Button>
                
            </Container>
           </div>
            
        </div>
    )
}

export default HeroTop;