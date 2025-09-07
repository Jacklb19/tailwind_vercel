export default function Home() {
  return (
    <div className="bg-gray-300 min-h-screen py-10 px-20">
      <main className="grid grid-cols-12 gap-10">
        {/* Primer recuadro del primer nivel */}
        <div className="col-span-10 p-4 bg-gray-100 flex flex-row rounded-2xl shadow-lg gap-5">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt="Lámpara"
            className="basis-3/4  h-74 object-cover rounded-lg shadow-lg"
          />

          <div className="basis-2/4 m-5 flex flex-col gap-5">
            <h2 className="text-gray-800 font-semibold text-2xl">
              Green plants are going tod Extinct about 500 times faster than
              tehy should, Study finds
            </h2>

            <p className="text-gray-400">
              If you are the sort of person who just can not keep a plant alive,
              you are not alone according to a new study published June 10 in
              the journal Nature..
            </p>

            <div className="flex items-center gap-4">
              <img
                src="https://randomuser.me/api/portraits/men/12.jpg"
                alt="Author"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-gray-700">
                  Alexander Parkinson
                </p>
                <span className="text-xs text-gray-500">Jun 20, 2019</span>
              </div>

              <img
                src="compartir.svg"
                alt="flecha"
                className="ml-auto w-8 h-8 "
              />
            </div>
          </div>
        </div>

        <div className="col-span-2 bg-gray-100 flex flex-col rounded-2xl shadow-lg gap-6 p-6 items-start">
          <button className="gap-4 flex items-center">
            <img
              src="globe.svg"
              alt="global"
              className="bg-gray-300 rounded-lg w-10 h-10 p-2"
            />
            <p className="text-zinc-600 font-sans font-semibold text-sm">Global</p>
          </button>

          <button className="gap-4 flex items-center">
            <img
              src="busines.svg"
              alt="business"
              className="bg-gray-300 rounded-lg w-10 h-10 p-2"
            />
            <p className="text-zinc-600 font-sans font-semibold text-sm">Business</p>
          </button>

          <button className="gap-4 flex items-center">
            <img
              src="play.svg"
              alt="entertainment"
              className="bg-gray-300 rounded-lg w-10 h-10 p-2"
            />
            <p className="text-zinc-600 font-sans font-semibold text-sm">Entertainment</p>
          </button>

          <button className="gap-4 flex items-center">
            <img
              src="sports.svg"
              alt="sports"
              className="bg-blue-400 rounded-lg w-10 h-10 p-2"
            />
            <p className="text-gray-900 font-semibold text-sm">Sports</p>
          </button>

          <button className="gap-4 flex items-center">
            <img
              src="health.svg"
              alt="health"
              className="bg-gray-300 rounded-lg w-10 h-10 p-2"
            />
            <p className="text-zinc-600 font-sans font-semibold text-sm">Health</p>
          </button>
        </div>
      </main>
    </div>
  );
}
