const Search = () => {

    return (
        <div className="flex items-center gap-2 border border-gray-400 rounded-3xl p-2 drop-shadow-lg bg-white">
            <div className="p-2">Где угодно</div>
            <div className="p-2">Любая неделя</div>
            <div className="p-2">Добавить гостей</div>
            <button className="bg-red-500 rounded-full p-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
            </button>
        </div>
    )
}

export default Search;