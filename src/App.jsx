// contexts
import { CalculatorProvider } from "./context/CalculatorProvider";
// pages
import Calculator from "./pages/Calculator";

// ----------------------------------------------------------------------

const App = () => {
  return (
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  );
};

export default App;
