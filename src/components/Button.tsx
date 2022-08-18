import { useLayoutEffect, useState } from "react";
import classNames from "classnames";

export function Button() {
  const [theme, setTheme] = useState('dark');

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
    <section className='flex flex-col justify-center place-items-center'>
      <p className='text-xl font-bold text-white p-5'>Botão animado</p>
      <label 
        className={classNames('relative inline-block h-10 md:h-20 w-20 md:w-40 transition-all duration-700 rounded-3xl bg-white', {
          'bg-white': theme === 'light',
          'bg-blue-900': theme === 'dark'
        })}
      >
        <input 
          type="checkbox" 
          className='opacity-0 w-0 h-0'
          onClick={handleTheme}
        />
        <span className={classNames('absolute cursor-pointer top-1 left-1 right-1 bottom-1 w-[33px] md:w-[76px] transition-all duration-700 rounded-3xl bg-blue-500', {
          'translate-x-0 bg-blue-500': theme === 'light',
          'translate-x-full bg-slate-900': theme === 'dark'
        })}
        ></span>
      </label>
    </section>
  )
}