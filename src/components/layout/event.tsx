import { useEffect, useState } from "react";
import Container from "./container";

import image1 from "../../assets/images/photos/wordCup.jfif";
import image2 from "../../assets/images/photos/télécharger (4).jfif";
import image3 from  "../../assets/images/photos/Crispy Chicken Bacon Cheeseburger with BBQ Sauce and Tomato.jfif";

const slides = [
  {
    title: "Vivez la qualification à la coupe du monde",
    category: "événement à venir",
    text: "Rejoignez-nous pour une soirée électrique ! Ne manquez rien du match décisif sur écran géant. Ambiance de stade garantie, menu spécial supporters et boissons fraîches pour vibrer ensemble jusqu'au coup de sifflet final. Allez les léopard !",
    image: image1,
  },
  {
    title: "Journée spéciale des Frites",
    category: "événement à venir",
    text: `À l’occasion de la Journée spéciale des Frites, Le Burger Fromage est à l’honneur !
          Savoure un burger fondant accompagné de frites dorées et croustillantes.
          Une journée, une saveur, à ne pas manquer`,
    image: image2,
  },
  {
    title: "Le Burger Spicy",
    category: "événement à venir",
    text: "Bon après-midi",
    image: image3,
  },
];

function Event() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <Container>
  
        <div className="relative shadow-2xl mb-20 overflow-hidden flex flex-col md:flex-row md:h-96 rounded-xl bg-white ">
          
          {/* TEXTE : 'w-full' sur mobile, 'md:w-1/2' sur desktop */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:px-10 text-center order-2 md:order-1">
                  <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">
                    {slides[currentIndex].category}
                  </p>
              
                  <h2 className="text-2xl md:text-4xl font-Alfa text-amber-800 mb-4">
                    {slides[currentIndex].title}
                  </h2>
              
                  <p className="text-base md:text-xl text-gray-600">
                    {slides[currentIndex].text}
                  </p>
                </div>
          
          {/* IMAGE : 'h-64' sur mobile pour éviter qu'elle disparaisse, 'md:h-full' sur desktop */}
                <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden order-1 md:order-2">
                  <div
                    className="flex h-full transition-transform duration-500 ease-in-out bg-amber-900"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className="w-full h-full shrink-0 flex items-center justify-center"
                      >
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                  
          {/* BOUTONS : On les cache sur mobile ou on les ajuste pour qu'ils soient centrés verticalement */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center rounded-full transition-colors"
              >
                ‹
              </button>
                  
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center rounded-full transition-colors"
              >
               ›
             </button>
        </div>
    </Container>
  );
}

export default Event;
