import HeroTop from "../components/layout/hero-top";
import LastProducts from "../components/layout/LastProducts";
import Product from "../components/layout/Product";
import MenuList from "../components/layout/MenuList";
import Event from "../components/layout/event";
import Booking from "../components/layout/Booking";
import Footer from "../components/layout/Footer";


function HomePages() {

  return (
    <>
       <HeroTop />
       <LastProducts />
       <Product />
       <MenuList />
       <Event />
       <Booking />
       <Footer/>
    </>
  )
}

export default HomePages;