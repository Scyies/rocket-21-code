import classNames from "classnames";
import { ArrowFatLeft, ArrowFatRight } from "phosphor-react";
import { useState } from "react";

export default function ImgSlider({ slides }: any) {
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
    <div className="h-[50vh] w-full min-w-sm aspect-square relative overflow-hidden">
      <button
        onClick={previousImg}
        className="text-white absolute bg-preto-800 h-full p-2 opacity-70"
      >
        <ArrowFatLeft size={25} />
      </button>
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].urls.regular ? slides[currentIndex].urls.regular : ''})`,
          }}
          className={"w-full h-full bg-center bg-cover md:bg-auto bg-no-repeat"}
        ></div>
      <button
        className="text-white absolute top-0 right-0 bg-preto-800 h-full p-2 opacity-70"
        onClick={nextImg}
      >
        <ArrowFatRight size={25} />
      </button>
      <div className="flex left-[15%] md:left-[40%] absolute bottom-0">
        {slides.map((slide: any, index: any) => (
          <div
            key={index}
            className={classNames("m-1 cursor-pointer", {
              "text-white": currentIndex === index,
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
