import { ArrowCounterClockwise, Play } from "phosphor-react";
import { useState } from "react";

export function Contador() {
  const [tempo, setTempo] = useState<number | undefined>(10)
  const minutos = Math.floor(tempo! / 60);
  const segundos = tempo! % 60;
  const [minutosDezenas, minutosUnidade] = String(minutos).padStart(2, '0');
  const [segundosDezenas, segundosUnidade] = String(segundos).padStart(2, '0');
  const [newTime, setNewTime] = useState<number>();

  function regressive(time: number) {
    setTimeout(() => {
      if (time > 0) {
        setTempo(time - 1)
        return regressive(time - 1);
      }
    }, 1000)
  }

  function again() {
    if(newTime){
      setTempo(newTime)
      setNewTime(0)
    }
  }

  return(
    <div>
      <div className='flex flex-col justify-center p-5 place-items-center bg-blue-900 rounded-md m-10'>
        <div className='flex mb-5 bg-gray-900 p-2 rounded-lg shadow-md'>
          <p className='text-7xl text-white p-3 bg-gray-500 rounded-lg m-1'>
            {minutosDezenas}
          </p>
          <p className='text-7xl text-white p-3 bg-gray-500 rounded-lg m-1'>
            {minutosUnidade}
          </p>
          <p className='text-7xl text-white p-3 bg-gray-500 rounded-lg m-1'>
            :
          </p>
          <p className='text-7xl text-white p-3 bg-gray-500 rounded-lg m-1'>
            {segundosDezenas}
          </p >
          <p className='text-7xl text-white p-3 bg-gray-500 rounded-lg m-1'>
            {segundosUnidade}
          </p>
          <button className='text-white' onClick={() => regressive(tempo!)}> 
            <Play size={30} />
          </button>
        </div>
        <div className='bg-gray-900 rounded-lg p-4 flex flex-col place-items-center justify-center shadow-md'>
          <p className='text-white pb-2'>Insira o tempo em segundos</p>
          <div className='flex justify-center'>
            <input type="number" 
              className='p-1 rounded-md m-1 text-center' 
              placeholder='Insira o tempo em segundos'
              value={newTime}
              onChange={e => setNewTime(Number(e.target.value))}
            />
            <button className='text-white ml-2' onClick={again}>
              <ArrowCounterClockwise size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}