import { useContext } from "react";
// contexts
import CalculatorContext from "../context/CalculatorProvider";

// ----------------------------------------------------------------------

const useCalculator = () => useContext(CalculatorContext);

export default useCalculator;
