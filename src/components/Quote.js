import React from "react";
import "../styles/Quote.css";
import { useState, useEffect } from "react";

const Quote = () => {
  const [hoverQuote, setHoverQuote] = useState(false);
  const [quoteData, setQuoteData] = useState([]);
  const [quoteLoading, setQuoteLoading] = useState(true);

   //Quotes

  
 
  
  //fetch quote from api
  const fetchQuote = () => {

     const months = ["Hello", "Good day", "bruh", "bruh moment"];

var random = Math.floor(Math.random() * months.length);
    var RandomQuote = (random, months[random])

    if (RandomQuote === "Hello"||"Good day") {
console.log("it's hello or good day");
}
    
    
    const data = {
    "id": 0,
    "language_code": "en",
    "content": RandomQuote,
    "url": "https://www.ecomatcher.com/tree-resources/",
    "originator": {
        "id": 0,
        "name": "EcoMatcher",
        "url": "https://www.ecomatcher.com/tree-resources//"
    },
    "tags": [
        "Trees",
    ]
};
    setQuoteLoading(false);
    console.log(data);
    return data;
  };

  //shortens the quote if its too long
  const shortQuote = (e) => {
    if (e.length > 250) {
      return e.substring(0, 250) + "...";
    }
    return e;
  };

  useEffect(() => {
    const getQuotes = async () => {
      const quoteFromApi = await fetchQuote();
      setQuoteData(quoteFromApi);
    };

    getQuotes();
  }, []);

  return (
    <div>
      {quoteData && (
        <div className="quoteContainer">
          <div className="blockContainer quoteBlock">
            <div className="hoverQuote" onMouseOver={() => setHoverQuote(true)} onMouseOut={() => setHoverQuote(false)}>
              {quoteLoading === true && (
                <p className="">
                  <i className="fa fa-spinner spinner2 spinLoading" aria-hidden="true"></i>
                </p>
              )}
              <div className={`quote ${hoverQuote ? "slideUp" : ""} ${quoteLoading ? "" : "fadeInAnim"} `}>
                {quoteLoading === false && <p>{quoteData && quoteData.content && shortQuote(quoteData.content)}</p>}
              </div>
            </div>
          </div>
          <div>
            <div className="blockContainer authorBlock">
              <div className="hoverQuote" onMouseOver={() => setHoverQuote(true)} onMouseOut={() => setHoverQuote(false)}>
                <div className={`author ${hoverQuote ? "slideDownFadeIn" : ""} ${quoteLoading ? "notLoaded" : ""}`}>
                  <span className={`${hoverQuote ? "TextSlideDownFadeIn" : ""}`}>
                    {quoteData && quoteData.originator && quoteData.originator.name}
                  </span>
                  <a href={quoteData.url} className={`${quoteLoading ? "notLoaded" : ""}`}>
                    <i className={`fa fa-external-link ${hoverQuote ? "TextSlideDownFadeIn" : ""}`} aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quote;
