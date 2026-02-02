import { useEffect, useState } from "react";
import Container from "./container";

import image1 from "../../assets/images/photos/wordCup.jfif";
import image2 from "../../assets/images/products/burger3.png";
import image3 from "../../assets/images/products/burger4.png";

const slides = [
  {
    title: "Vivez la qualification à la coupe du monde",
    category: "événement à venir",
    text: "Bonjour",
    image: image1,
  },
  {
    title: "Le Burger Fromage",
    category: "événement à venir",
    text: "Bonsoir",
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
    }, 3000);

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
      <div className="relative shadow-2xl mb-20 overflow-hidden h-96 flex rounded-xl bg-white">

        {/* TEXTE */}
        <div className="w-1/2 flex flex-col justify-center items-center px-10 text-center">

          <p>
              {slides[currentIndex].category}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            {slides[currentIndex].title}
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
            {slides[currentIndex].text}
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative w-1/2 overflow-hidden">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
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
                  className="w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* BOUTON GAUCHE */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-3 py-2 rounded-full"
        >
          ‹
        </button>

        {/* BOUTON DROIT */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-3 py-2 rounded-full"
        >
          ›
        </button>
      </div>
    </Container>
  );
}

export default Event;
