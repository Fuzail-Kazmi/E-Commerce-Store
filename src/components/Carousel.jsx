import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LuDot} from "react-icons/lu";

export const Carousel = () => {
  const slides = [
    {
      url: "https://mobirise.com/extensions/commercem4/assets/images/1.jpg",
    },
    {
      url: "https://mobirise.com/extensions/commercem4/assets/images/3.jpg",
    },
    {
      url: "https://mobirise.com/extensions/commercem4/assets/images/2.jpg",
    },

    {
      url: "https://images.unsplash.com/photo-1557821552-17105176677c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGUlMjBjb21tZXJjZSUyMGNhcm91c2VsfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1677995700883-30df169c7517?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGUlMjBjb21tZXJjZSUyMGNhcm91c2VsfGVufDB8MHwwfHx8MA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="carousel-container">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="carousel-box__img"
      ></div>
      {/* Left Arrow */}
      <div className="carousel-left-arrow text-xxl">
        <ArrowLeft onClick={prevSlide} size={22} />
      </div>
      {/* Right Arrow */}
      <div className="carousel-right-arrow text-xxl">
        <ArrowRight onClick={nextSlide} size={22} />
      </div>
      <div className="carousel-foot">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`dot ${currentIndex === slideIndex ? "bg-change" : ""}`}
          >
            <LuDot 
              size={4}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
