import HeroTop from "../components/layout/hero-top";
import LastProducts from "../components/layout/LastProducts";
import Product from "../components/layout/Product";
import MenuList from "../components/layout/MenuList";
import Event from "../components/layout/event";


function HomePages() {

  return (
    <>
       <HeroTop />
       <LastProducts />
       <Product />
       <MenuList />
       <Event />
    </>
  )
}

export default HomePages;