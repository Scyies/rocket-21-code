export function HelloWorld() {
  return (
    <section className='flex flex-col justify-center'>
      <p className='text-xl font-bold text-white pt-5 text-center'>Hello world customizado</p>
      <div className="flex flex-col place-items-center my-10 w-full h-full justify-center relative">
        <div
          className="absolute w-full opacity-0 dark:opacity-100 transition-all duration-650 animate-lightLate"
          id="lines"
        ></div>
        <div
          className="absolute w-full translate-y-3 opacity-0 dark:opacity-100 transition-all duration-700 animate-lightStart"
          id="lines"
        ></div>
        <div
          className="absolute w-full translate-y-6 opacity-0 dark:opacity-100 transition-all duration-500 animate-lightStart hidden md:block"
          id="lines"
        ></div>
        <div
          className="absolute w-full -translate-y-3 opacity-0 dark:opacity-100 transition-all duration-600 animate-lightLate"
          id="lines"
        ></div>
        <div
          className="absolute w-full -translate-y-6 opacity-0 dark:opacity-100 transition-all duration-300 animate-lightStart hidden md:block"
          id="lines"
        ></div>

        <h1 className="text-7xl md:text-9xl uppercase relative -skew-x-[15deg]">
          <span className="absolute top-0 left-0">world</span>
          <span className="">world</span>
        </h1>
        <h2 className="text-6xl md:text-8xl text-white absolute -bottom-5 md:-bottom-10 -skew-y-6">
          hello
        </h2>
      </div>
    </section>
  );
}
