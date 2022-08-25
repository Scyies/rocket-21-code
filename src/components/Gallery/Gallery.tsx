import { ImageSlider } from "./ImageSlider";

export function Gallery() {
  const slides = [
    {
      url: "https://images3.alphacoders.com/641/thumb-1920-641193.jpg",
      title: "Bloodborne",
    },
    {
      url: "https://images6.alphacoders.com/785/785425.png",
      title: "rin e emyia",
    },
    {
      url: "https://i.pinimg.com/originals/40/e9/da/40e9daa6982435261c840673b008b5dd.jpg",
      title: "aniki",
    },
    {
      url: "https://images6.alphacoders.com/657/657194.jpg",
      title: "seiba",
    },
    {
      url: "https://wallpaperaccess.com/full/232672.jpg",
      title: "ds",
    },
  ];
  return (
    <div className="flex overflow-hidden justify-center">
      <div className="w-[500px] h-[280px] mx-auto bg-white m-10 rounded-lg overflow-hidden">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}
