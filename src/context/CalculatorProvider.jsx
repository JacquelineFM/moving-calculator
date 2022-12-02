import { useState, createContext } from "react";
// data
import { FURNITURE } from "../data/DefaultFurniture";

// ----------------------------------------------------------------------

const CalculatorContext = createContext();

// ----------------------------------------------------------------------

const CalculatorProvider = ({ children }) => {
  const [furniture, setFurniture] = useState(FURNITURE);

  /**
   * When the user clicks the plus or minus button, update the quantity of the item in the array.
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

  return (
    <CalculatorContext.Provider
      value={{
        furniture,
        handleCounter,
        handleUpdateCounter,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export { CalculatorProvider };

export default CalculatorContext;
