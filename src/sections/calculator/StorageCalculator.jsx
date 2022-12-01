//
import StorageForm from "./StorageForm";

// ----------------------------------------------------------------------

const StorageCalculator = () => {
  return (
    <section
      id="storageCalculator"
      className="container mx-auto px-6 md:px-16 xl:px-20 py-20 md:py-28 lg:py-40 flex flex-col space-y-10 md:space-y-20"
    >
      <div className="text-center mx-auto">
        <h2 className="text-3xl md:text-5xl font-normal text-secondary leading-10">
          What items to store?
        </h2>
        <p className="text-base md:text-lg lg:text-base mt-6 md:mt-8 font-normal text-gray-550 leading-7 lg:leading-8 lg:w-3/5 mx-auto">
          Select which items you wish to store before moving to your new home.
          We’ll keep ’em safe!
        </p>
      </div>
      <StorageForm />
    </section>
  );
};

export default StorageCalculator;
