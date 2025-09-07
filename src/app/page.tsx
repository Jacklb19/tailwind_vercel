export default function Home() {
  return (
    <div className="bg-gray-300 min-h-screen py-10 px-20">
      <main className="grid grid-cols-8 gap-10">
        {/* Primer recuadro del primer nivel */}
        <div className="col-span-6 p-4 bg-gray-100 flex flex-row rounded-lg shadow-lg gap-5"> 
          <img 
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" 
            alt="Lámpara" 
            className="basis-1/2 h-65 object-cover rounded-lg shadow-lg"
          />

          <div className="basis-1/2 m-1 flex-col gap-3">
            <h2 className="text-gray-800 font-semibold text-2xl">
              Green plants are going tod Extinct about 500 times faster than tehy should, Study finds
            </h2>

            <p className="text-gray-400">If you are the sort of person who just can not keep a plant alive, 
              you are not alone according to a new study published June 10 in the journal Nature..
              </p>
            
            <div className="grid ">

            </div>

          </div>

        </div>

        <div className="col-span-2 col-start-7 bg-gray-100">hola</div>
      </main>
    </div>
  );
}
