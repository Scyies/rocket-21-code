import axios from "axios";
import React, { useEffect, useState } from "react";
import ImgFooter from "./ImgFooter";
import ImgHeader from "./ImgHeader";
import ImgSlider from "./ImgSlider";

export default function SiteImages() {
  const [images, setImages] = useState<any[]>([]);
  const unspashKey = import.meta.env.VITE_UNSPASH_API_KEY;

  async function loadImages() {
    await axios
      .get(`https://api.unsplash.com/photos/?client_id=${unspashKey}`)
      .then((response) => setImages(response.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadImages();
  }, []);

  const id = Math.round(Math.random() * images.length);
  return (
    <>
      <ImgHeader />
      <main
        className="min-h-[calc(100vh-58px)] bg-branco-400 dark:bg-preto-600
      text-preto-600 dark:text-branco-400"
      >
        <section className="min-h-[calc(100vh-58px)] flex flex-col md:flex-row justify-between">
          <div className="relative md:max-w-[50vw] justify-around">
            <p className="font-bold text-3xl text-branco-500 p-3 bg-preto-800 md:mt-[20%]">
              Todos os dias imagens diferentes para melhorar seu dia!
            </p>
            <p className="font-bold text-2xl p-3 text-branco-500 bg-preto-900 mt-[20%]">
              Você pode encontrar inspirações diariamente!
            </p>
          </div>
          <div className="float-right w-full md:max-w-[50vw] h-[calc(50vh-58px)] md:h-[calc(100vh-58px)]">
            <img
              src={
                images[id].urls.regular === undefined
                  ? ""
                  : images[id].urls.regular
              }
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </section>
        <section className="bg-slate-200 h-full">
          <div className="overflow-hidden">
            <p className="bg-preto-700 font-bold text-branco-500 -mx-5 text-center p-3 my-10 rotate-12">
              Unsplash para fornecer imagens para seu site
            </p>
          </div>
          <ImgSlider slides={images} />
        </section>
      </main>
      <ImgFooter />
    </>
  );
}
