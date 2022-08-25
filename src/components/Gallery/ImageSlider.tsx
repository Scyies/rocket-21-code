import classNames from "classnames";
import { ArrowFatLeft, ArrowFatRight } from "phosphor-react";
import { useState } from "react";

export function ImageSlider({ slides }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  function previousImg() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function nextImg() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function goToSlide(slideIndex: number) {
    setCurrentIndex(slideIndex);
  }

  return (
    <div
      className='w-full h-full relative'
    >
      <button 
        onClick={previousImg}
        className="text-white absolute top-[45%]"
      >
        <ArrowFatLeft size={25} />
      </button>
      <div
        style={{backgroundImage: `url(${slides[currentIndex].url})`}}
        className={'w-full h-full bg-center bg-cover animate-fadeIn'}
      >
      </div>
      <button 
        className="text-white absolute top-[45%] right-0"
        onClick={nextImg}
      >
        <ArrowFatRight size={25} />
      </button>
      <div className="flex left-[40%] absolute bottom-0">
        {slides.map((slide: any, index: any) => (
          <div key={index}
            className={classNames('m-1 cursor-pointer', {
              'text-white': currentIndex === index
            })}
            onClick={() => goToSlide(index)}
          >
            ⬤
          </div>
        ))}
      </div>
    </div>
  );
}
