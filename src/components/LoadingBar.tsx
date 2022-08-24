export function LoadingBar() {
  return(
    <div className='flex flex-col justify-center place-items-center'>
      <div className='relative'>
        <p className='text-white text-3xl font-bold z-40'>
          Loading...
        </p>
        <p className='bg-black animate-loadingBar text-3xl font-bold absolute top-0 left-0' id='stroke'>
          Loading...
        </p>
      </div>
      <div className='bg-white h-10 w-80 p-4 m-4 z-0 relative overflow-hidden rounded-md'>
        <div className='absolute top-1 left-1 right-1 bottom-1 bg-black w-76 p-2 animate-loadingBar rounded-md'></div>
      </div>
    </div>
  )
}