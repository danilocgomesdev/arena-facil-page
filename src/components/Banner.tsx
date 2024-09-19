export default function Banner() {
  return (
    <section>
      <div
        className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
        id="secao-alvo"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-orange-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Arena Fácil
            <span className="sm:block"> Sua anera na palma da mão! </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga
            ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Comece já
            </a>

            <a
              className="block w-full rounded border border-orange-600 px-12 py-3 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto"
              href="#"
            >
              Mais informações
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
