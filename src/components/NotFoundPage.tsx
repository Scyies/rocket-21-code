import NotFound from '../assets/notfoundpage.png';

export function NotFoundPage() {
  return (
    <div className='flex flex-col place-items-center justify-center p-5'>
      <p className='text-2xl text-white p-5 font-bold'>Página de erro 404</p>
      <img src={NotFound} alt="" className='aspect-square max-h-[20rem] max-w-[20rem] object-cover place-items-center' />
    </div>
  )
}