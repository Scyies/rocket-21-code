import { Rocket } from 'phosphor-react'
import React from 'react'

export default function ImgHeader() {
  return (
    <header 
      className="flex justify-around p-4 place-items-center 
      bg-branco-400 dark:bg-preto-600 
      text-preto-600 dark:text-branco-400 border-b-2 
      border-preto-600 dark:border-branco-400 font-bold"
    >
      <p className='text-xl'>< Rocket size={30} weight="bold" /></p>
      <nav>
        <ul className="flex">
          <li className="px-3">home</li>
          <li className="px-3">imagens</li>
          <li className="px-3">contato</li>
        </ul>
      </nav>
    </header>
  )
}
