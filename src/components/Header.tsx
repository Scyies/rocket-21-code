import { MoonStars, SunHorizon } from "phosphor-react";
import { useLayoutEffect, useState } from "react";

export function Header() {
  const [theme, setTheme] = useState('light');

  function handleTheme() {
    if(theme === 'light') {
      setTheme('dark');
      localStorage.theme = 'dark';
    } 
    if(theme === 'dark') {
      setTheme('light');
      localStorage.theme = 'light';
    }
  }

  useLayoutEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  return(
    <header className='flex justify-around p-4 border-b-2 border-slate-400 mx-8 place-items-center'>
      <p className='text-xl text-white font-bold text-center'>21 dias de código RocketSeat</p>
      <button className='text-yellow-200 dark:text-blue-300 bg-gray-700 dark:bg-gray-500 p-1 rounded-full transition-all aspect-square h-[30px] w-[30px] flex place-items-center'
        onClick={handleTheme}
      >
        {theme === 'light' ? <SunHorizon size={25} /> : <MoonStars size={25} />}
      </button>
    </header>
  )
}