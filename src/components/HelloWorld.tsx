import { Planet } from 'phosphor-react';

export function HelloWorld() {
  return (
    <div className='flex place-items-center mx-auto my-20 w-full h-full justify-center'>
      <h1 className='text-white text-9xl relative' >
        <span id='hello'>
          hello 
        </span>
        <strong className='m-3 uppercase'>
          <span className='absolute text-transparent bg-clip-text bg-gradient-to-t from-pink to-blue-900 scale-98 p-1'>
            world
          </span>
          <span className='p-1 pb-1' id='hello'>
            world
          </span>
        </strong>
      </h1>
    </div>
  )
}