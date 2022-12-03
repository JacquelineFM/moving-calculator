import { useState, createContext } from "react";
// data
import { FURNITURE } from "../data/DefaultFurniture";

// ----------------------------------------------------------------------

const CalculatorContext = createContext();

// ----------------------------------------------------------------------

const CalculatorProvider = ({ children }) => {
  const [summary, setSummary] = useState({
    totalItems: 0,
    totalMm: 0,
    subTotal: 0,
    tax: 0,
    total: 0,
    dueToday: 0,
  });
  const [furniture, setFurniture] = useState(FURNITURE);

  /**
   * When the user clicks on the plus or minus button, the quantity of the item is updated.
   */
  const handleCounter = (idx, ac) => (e) => {
    e.preventDefault();

    setFurniture((furniture) =>
      furniture.map((el, i) =>
        i === idx
          ? {
              ...el,
              quantity:
                ac === "plus" ? el.quantity + 1 : Math.max(0, el.quantity - 1),
            }
          : el
      )
    );
  };

  /**
   * If the value of the input is greater than or equal to zero, then update the state with the new
   * value.
   * @returns The return value is the return value of the last statement in the function.
   */
  const handleUpdateCounter = (idx) => (e) => {
    if (e.target.value >= 0) {
      const newFurniture = furniture.map((item, i) => {
        if (idx === i) {
          return { ...item, [e.target.name]: Number(e.target.value) };
        } else {
          return item;
        }
      });
      setFurniture(newFurniture);
    }

    return;
  };

  /**
   * It takes the current state of the furniture array and maps over it, returning a new array with the
   * same objects but with a quantity of 0.
   *
   * It then takes the current state of the summary object and reduces it to a new object with the same
   * keys but with a value of 0.
   */
  const handleClear = (e) => {
    e.preventDefault();

    setFurniture((furniture) =>
      furniture.map((item) => ({ ...item, quantity: 0 }))
    );

    setSummary((key) =>
      Object.keys(key).reduce((ac, curr) => ({ ...ac, [curr]: 0 }), {})
    );
  };

  /**
   * When the user clicks the button, the function will calculate the total items, total M2, subtotal,
   * tax, total and due today 50% and then set the summary state with the calculated values.
   */
  const handleMakeQuotes = (e) => {
    e.preventDefault();

    let totalItems = 0;
    let totalMm = 0;

    // Total Items and Total M2
    furniture.map(({ quantity }) => (totalItems += quantity));
    furniture.map(({ quantity, value }) => (totalMm += quantity * value));

    // Subtotal, Tax, Total and Due Today 50%
    let subTotal = totalMm * 200;
    let tax = subTotal * 0.16;
    let total = subTotal + tax;
    let dueToday = total * 0.5;

    // Summary
    setSummary({
      totalItems,
      totalMm,
      subTotal,
      tax,
      total,
      dueToday,
    });
  };

  return (
    <CalculatorContext.Provider
      value={{
        summary,
        furniture,
        handleCounter,
        handleUpdateCounter,
        handleClear,
        handleMakeQuotes,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export { CalculatorProvider };

export default CalculatorContext;
