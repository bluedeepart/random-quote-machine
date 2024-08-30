import { useContext } from "react";
import QuoteContext from "../context/QuoteContext";
import Card from "./Card";

const QuotePreview = () => {
  const quoteCtx = useContext(QuoteContext);
  const { quote, randomColor } = quoteCtx;

  return (
    quote && (
      <div
        className="h-screen flex flex-col justify-center items-center p-5"
        style={{ backgroundColor: randomColor }}>
        <Card />
        <p className="text-center text-color-white text-sm">
          by &nbsp;
          <a
            href="http://deepart.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-color-inherit font-medium">
            deepart
          </a>
        </p>
        {/* <p><a href="https://api.quotable.io/random" target="_blank" rel="noopener noreferrer">https://api.quotable.io/random</a></p> */}
      </div>
    )
  );
};

export default QuotePreview;
