import { ImageSlider } from "./ImageSlider";

export function Gallery() {
  const slides = [
    {
      url: "https://i.pinimg.com/736x/9a/f5/c1/9af5c1d7bc5941704e9a68907caca4a2.jpg",
      title: "viado indiano",
    },
    {
      url: "https://images6.alphacoders.com/785/785425.png",
      title: "rin e emyia",
    },
    {
      url: "https://image.winudf.com/v2/image1/Y29tLmFzdW5hLmFwcC53YWxscGFwZXIuZmF0ZV9zY3JlZW5fMF8xNjM3MjM3MDE2XzAzMA/screen-0.jpg?fakeurl=1&type=.jpg",
      title: "seiba e kiritsugo",
    },
    {
      url: "https://images6.alphacoders.com/657/657194.jpg",
      title: "seiba",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-SGhWrdnfrIi6d82eavoMadOIPtJLj6_PQ&usqp=CAU",
      title: "rider",
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
