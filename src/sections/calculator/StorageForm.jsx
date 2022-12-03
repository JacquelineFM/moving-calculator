// hooks
import useCalculator from "../../hooks/useCalculator";
// components
import FurnitureItem from "../../components/FurnitureItem";

// ----------------------------------------------------------------------

const StorageForm = () => {
  const {
    furniture,
    handleCounter,
    handleUpdateCounter,
    handleClear,
    handleMakeQuotes,
  } = useCalculator();

  return (
    <form className="w-full" onSubmit={handleMakeQuotes}>
      <section
        id="furniture"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 md:gap-8 lg:gap-10"
      >
        {furniture.map((item, idx) => (
          <FurnitureItem
            key={idx}
            idx={idx}
            item={item}
            handleCounter={handleCounter}
            handleUpdateCounter={handleUpdateCounter}
          />
        ))}
      </section>
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:justify-between mt-20 md:mt-16 lg:mt-20">
        <button
          type="button"
          className="btn-form-calculator border-2 border-primary hover:bg-primary"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          type="submit"
          className="btn-form-calculator bg-primary hover:bg-white hover:border-2 hover:border-primary"
        >
          Calculate
        </button>
      </div>
    </form>
  );
};

export default StorageForm;
