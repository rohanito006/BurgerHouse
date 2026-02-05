import Heading from "../ui/Heading";
import HeadingTitle from "../ui/HeadingTitle";
import Container from "./container";


function Product() {
    return (
        <Container>
    
            <HeadingTitle>
                toujours des délicieux burgers
            </HeadingTitle>

            <Heading theme="secondary" >
                choisissez et savourez
            </Heading>

            <p className="mt-6 text-center text-gray-600">
                 Découvrez notre sélection de burgers gourmets, préparés avec des ingrédients frais et de qualité. Chaque burger est conçu pour offrir une expérience gustative unique, alliant saveurs classiques et innovations culinaires. Que vous soyez amateur de viande juteuse ou de saveurs végétariennes, nous avons le burger parfait pour satisfaire vos envies.
            </p>
        </Container>
    )
}

export default Product;