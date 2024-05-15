function SearchComp() {
  return (
    <>
      <div
        className="w-full h-[20rem] bg-cover bg-no-repeat bg-center flex flex-col justify-center ex-text-white gap-10"
        style={{ backgroundImage: `url('/bg-balck-stars.png')` }}
      >
        <h1 className="w-full text-7xl text-center font-lobster">
          Search blogs of your interest
        </h1>
        <div className="flex flex-row w-full justify-center items-center border-none ">
          <input
            type="text"
            className="ex-bg-lightgray bg-stone-800 px-14 py-3 rounded-l-md h-14 w-1/3 focus:outline-none ex-text-white text-lg ex-search-shadow"
          />
          <button className="flex items-center justify-center gap-1 ex-bg-gray py-3 px-8 rounded-r-md border-0 h-14 active:scale-95">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke=" #FFD600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchComp;
