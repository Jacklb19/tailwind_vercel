export default function Home() {
  return (
    <div className="bg-gray-300 min-h-screen py-10 px-20">
      <main className="grid grid-cols-11 gap-13">
        <div className="col-span-9 p-4 bg-gray-100 flex flex-row rounded-2xl shadow-lg gap-5">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt="Lámpara"
            className="basis-3/4 h-74 object-cover rounded-lg shadow-lg"
          />
          <div className="basis-2/4 m-5 flex flex-col gap-5">
            <h2 className="text-gray-800 font-semibold text-2xl">
              Green plants are going to Extinct about 500 times faster than they
              should, Study finds
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
                <span className="text-xs text-gray-400 font-semibold">
                  Jun 20, 2019
                </span>
              </div>
              <img
                src="compartir.svg"
                alt="flecha"
                className="ml-auto w-8 h-8"
              />
            </div>
          </div>
        </div>

        <div className="col-span-2  bg-gray-100 flex flex-col rounded-2xl shadow-lg gap-6 p-6 items-start">
          <button className="gap-4 flex items-center">
            <img
              src="globe.svg"
              alt="global"
              className="bg-gray-300 rounded-lg w-10 h-10 p-2"
            />
            <p className="text-gray-400 font-semibold text-sm">Global</p>
          </button>
          <button className="gap-4 flex items-center">
            <img
              src="busines.svg"
              alt="business"
              className="bg-gray-300 rounded-lg w-10 h-10 p-2"
            />
            <p className="text-gray-400 font-semibold text-sm">Business</p>
          </button>
          <button className="gap-4 flex items-center">
            <img
              src="play.svg"
              alt="entertainment"
              className="bg-gray-300 rounded-lg w-10 h-10 p-2"
            />
            <p className="text-gray-400 font-semibold text-sm">Entertainment</p>
          </button>
          <button className="gap-4 flex items-center">
            <img
              src="sports.svg"
              alt="sports"
              className="bg-indigo-400 rounded-lg w-10 h-10 p-2"
            />
            <p className="text-gray-700 font-semibold text-sm">Sports</p>
          </button>
          <button className="gap-4 flex items-center">
            <img
              src="health.svg"
              alt="health"
              className="bg-gray-300 rounded-lg w-10 h-10 p-2"
            />
            <p className="text-gray-400 font-semibold text-sm">Health</p>
          </button>
        </div>

        <div className="col-span-3 row-span-2 bg-gray-100 rounded-2xl shadow-lg p-4 flex flex-col gap-4">
          <img src="café.jpg" alt="Café" className="w-full h-54 rounded-2xl" />
          <h1 className="text-gray-700 font-semibold text-2xl">
            How to make the perfect morning coffee, according to the Science
          </h1>
          <div className="flex items-center gap-4 mt-4">
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="Author"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="text font-semibold text-gray-700">Tara Gibson</p>
              <span className="text-xs text-gray-400 font-semibold">
                Jul 13, 2019
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-5 col-start-4 bg-gray-100 rounded-2xl shadow-lg p-6 flex flex-col gap-4 h-max ">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for articles"
              className="flex-1 px-4 py-5 text-gray-400 font-semibold rounded-lg bg-gray-200"
            />
            <button className="p-5 bg-indigo-400 rounded-lg ">
              <img
                src="https://www.svgrepo.com/show/7109/search.svg"
                alt="Buscar"
                className="w-5 h-6 invert"
              />
            </button>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400">
              <span className="text-gray-400">#</span>
              <span className="text-gray-400 font-semibold">Politics</span>
            </p>
            <p className="text-gray-400">
              <span className="text-gray-400">#</span>
              <span className="text-gray-400 font-semibold">Science</span>
            </p>
            <p className="text-gray-400">
              <span className="text-gray-400">#</span>
              <span className="text-gray-400 font-semibold">Movies</span>
            </p>
            <p className="text-gray-400">
              <span className="text-gray-400">#</span>
              <span className="text-gray-400 font-semibold">Technology</span>
            </p>
          </div>
        </div>

        <div className="col-span-3 bg-gray-100 rounded-2xl shadow-lg p-3 flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80"
            alt="Edificio"
            className="w-24 h-30 basis-1/2 object-cover rounded-2xl"
          />
          <div className="flex flex-col">
            <span className="w-6 h-6 border-2 border-indigo-400 rounded-full flex items-center justify-center">
              <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
            </span>
            <div className="flex items-center gap-2">
              <h2 className="text-gray-800 font-semibold">
                An Inspiring Short Film
              </h2>
            </div>
            <div className="flex items-center text-gray-400 text-sm mt-2 gap-2">
              <img src="eye.svg" alt="views" className="w-4 h-6" />
              <span>80,989</span>
            </div>
          </div>
        </div>

        <div className="col-span-6 bg-gray-100 rounded-2xl shadow-lg p-3 flex items-center gap-4">
          <img
            src="alex.jpg"
            alt="Alex Morrison"
            className="basis-2/5 h-60 rounded-2xl object-cover"
          />

          <div className="flex flex-col basis-3/5 ">
            <div>
              <h2 className="text-gray-900 font-bold text-2xl">
                Alex Morrison
              </h2>
              <p className="text-gray-400 font-semibold">Senior Journalist</p>
            </div>

            <div className="flex justify-between bg-gray-200 rounded-xl p-3 my-4">
              <div className="flex flex-col items-center flex-1">
                <span className=" text-gray-400 font-semibold">Articles</span>
                <p className="text-gray-900 font-sans font-semibold text-2xl">
                  34
                </p>
              </div>
              <div className="flex flex-col items-center flex-1">
                <span className=" text-gray-400 font-semibold">Followers</span>
                <p className="text-gray-900 font-sans font-semibold text-2xl">
                  980
                </p>
              </div>
              <div className="flex flex-col items-center flex-1">
                <span className=" text-gray-400 font-semibold">Rating</span>
                <p className="text-gray-900 font-sans font-semibold text-2xl">
                  8.9
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="w-full py-2 rounded-xl border border-gray-300 text-gray-500">
                Chat
              </button>
              <button className="w-full py-2 rounded-xl bg-indigo-400 text-white">
                Follow
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex flex-col justify-between h-full">
          <div className="flex justify-center items-center gap-8 flex-1">
            <button
              aria-label="Anterior"
              className="w-20 h-20 bg-gray-100 rounded-full shadow-lg flex items-center justify-center"
            >
              <img
                src="left.svg"
                alt="Anterior"
                className="w-6 h-6"
              />
            </button>

            <button
              aria-label="Siguiente"
              className="w-20 h-20 bg-gray-100 rounded-full shadow-lg flex items-center justify-center"
            >
              <img
                src="right.svg"
                alt="Siguiente"
                className="w-6 h-6"
              />
            </button>
          </div>

          <div className="bg-gray-100 rounded-2xl shadow-lg p-5 gap-2 flex flex-wrap ">
            <span className="px-2 py-1 bg-gray-200 rounded-md text-gray-500 text-sm">
              Donald Trump
            </span>
            <span className="px-2 py-1 bg-gray-200 rounded-md text-gray-500 text-sm">
              USA
            </span>
            <span className="px-2 py-1 bg-gray-200 rounded-md text-gray-500 text-sm">
              Politics
            </span>
            <span className="px-2 py-1 border-1 bg-gray-200 border-indigo-400 text-indigo-400 rounded-md text-sm">
              2020
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
