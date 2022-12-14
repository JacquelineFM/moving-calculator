// ----------------------------------------------------------------------

const FurnitureItem = ({ idx, item, handleCounter, handleUpdateCounter }) => {
  const { icon, name, quantity } = item;

  return (
    <div className="flex flex-col space-y-10 md:space-y-8 lg:space-y-10">
      <div className="p-8 bg-white drop-shadow-lg w-full mx-auto 2xl:h-61">
        <div className="flex flex-col justify-center items-center h-full">
          {icon}
          <p className="mt-5 text-lg font-light text-gray-850">{name}</p>
        </div>
      </div>
      <div className="flex flex-row h-12 w-full">
        <button
          type="button"
          className="btn-counter rounded-l-md"
          onClick={handleCounter(idx, "minus")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 m-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
        </button>
        <input
          min="0"
          pattern="^[0-9]+"
          type="number"
          name="quantity"
          className="border border-gray-450 focus:outline-none focus:border-gray-300 text-center h-12 text-md basis-71 md:basis-2/4 xl:basis-3/5 w-[inherit]"
          value={quantity}
          onChange={handleUpdateCounter(idx)}
        />
        <button
          type="button"
          className="btn-counter rounded-r-md"
          onClick={handleCounter(idx, "plus")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 m-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FurnitureItem;
