import { useContext } from "react";
// contexts
import CalculatorContext from "../contexts/CalculatorProvider";

// ----------------------------------------------------------------------

const useCalculator = () => useContext(CalculatorContext);

export default useCalculator;
