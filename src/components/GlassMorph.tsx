import bgImg from '../assets/lofi-city-gif.gif';
import svg from '../assets/undraw_music.svg';

export function GlassMorph() {
  return(
    <div className='flex flex-col justify-center place-items-center p-5 relative'>
      <p className='text-white text-2xl font-bold p-5'>Efeito de GlassMorph</p>
      <img src={bgImg} alt="" />
      <div className='absolute p-5 md:p-10 bg-gray-400 rounded-md bg-clip-padding backdrop-blur-md bg-opacity-10 shadow-md'>
        <img src={svg} alt="" className='w-[150px]' />
      </div>
    </div>
  )
}