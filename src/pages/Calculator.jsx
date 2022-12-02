// layout
import Header from "../layout/main/Header";
import Footer from "../layout/main/Footer";
// sections
import StorageCalculator from "../sections/calculator/StorageCalculator";
import StorageSummary from "../sections/calculator/StorageSummary";

// ----------------------------------------------------------------------

const Calculator = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-6 md:px-16 xl:px-20 py-20 md:py-28 lg:py-40 flex flex-col space-y-20">
        <StorageCalculator />
        <StorageSummary />
      </div>
      <Footer />
    </>
  );
};

export default Calculator;
