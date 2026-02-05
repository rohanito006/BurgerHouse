import Logo from '../../assets/svg/Logo-burger-house.svg';
import picture from '../../assets/svg/picto-burger-house.svg'
import iconBag from '../../assets/svg/ico-bag-clickAndCollect.svg';
import Button from '../ui/Button';

function Header() {
    return (
        <header className=" relative  z-10 w-full pt-12 pb-6 flex justify-between items-center">
            <div className='w-full'>
               <img src={Logo} alt="Logo Burger House" className='w-64  hidden md:block' />
                <img src={picture} alt="Logo Burger House" className='w-16 md:hidden' />
            </div>

            <div className='w-full font-Roboto'>
                
                <div className=' items-center justify-end gap-1.5 hidden md:flex'>
                    <img src={iconBag} alt="icon bag" className='w-5 h-5 animate-pulse md: sm:' />
                    <span className="text-secondary text-md">
                        Commandez  votre repas en ligne et profitez de la livraison rapide ! 
                    </span>
                </div>

                <div className='md: mt-5 flex items-center justify-center gap-3 '>

                    <Button className={' tracking-wider'}>
                        Inscription
                    </Button>

                    <Button color='secondary' >
                        Connexion
                    </Button>
                </div>
            </div>
        </header>
    ) 
}

export default Header;