import { useContext } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import QuoteContext from "../context/QuoteContext";

const RandomQuote = () => {
  const quoteCtx = useContext(QuoteContext);
  const { quote, author } = quoteCtx;

  return (
    <div className="clear-both mb-8">
      <h1 className="text-2xl lg:text-3xl mb-5 text-center font-medium" id="text">
        <FaQuoteLeft className="inline mr-2" />
        {quote}
      </h1>
      <p className="text-right" id="author">- {author}</p>
    </div>
  );
};

export default RandomQuote;
