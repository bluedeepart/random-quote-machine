import QuotePreview from "./components/QuotePreview";
import { QuoteContextProvider } from "./context/QuoteContext";

function App() {

  return (
    <QuoteContextProvider>
      <QuotePreview />
    </QuoteContextProvider>
  );
}

export default App;
