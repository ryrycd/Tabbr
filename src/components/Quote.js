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

   const months = ["Over 2 billion people's livelihoods depend on forests.", "Forests are home to 300 million people around the world.", "Trees planted sequester CO2 at an average of 25 kilos per tree per year; or an average of 250 kilos over a tree's lifetime.", "There are more than 60,000 species of trees in the world.", "More than a quarter of modern medicines originate from tropical forest plants.", "Forests are home to 80% of the world's terrestrial biodiversity.", "Tropical deforestation contributes 20% of annual global green-house pas emissions.", "13 million forests provide jobs to more than 13 million people across the world.", "80% of Europe used to be forested land, but only 34% of it remains today.", "40% of the world's oxygen is produced from rainforest.", "Forests support over 86 million green jobs and the livelihoods of millions of other. More than 90% of those who live in extreme poverty are forest-dependent.", "25% of our carbon emissions have historically been captured by Earth's forests, farms, and grasslands to keep the landscapes vegetated and soil hydrated.", "Trees are the longest living organisms on Earth, and never die of old age.", "Tree rings can help predict climate change.", "Strategically planting trees and shrubs to maximize shade can save you up to 25% on your electricity bills.", "NASA took tree seeds to the moon during the Apollo 14 mission in 1971, testing to see if space's orbit could change tree growth.", "Trees are able to communicate with each other, and can signal danger to other trees when being attacked so they can start their own defense.", "Trees can defend themselves against attacking insect by releasing certain chemicals that make their leaves harder to digest.", "Leaves, twigs, and branches on trees absorb and deflect sound waves to mask unwanted noise, through a process called sound attenuation.", "Forests help lower our stress, as trees release chemicals called phytoncides. When we breathe them in, it can reduce blood pressure, lower anxiety levels, and increase our pain threshold.", "Tree rings are natural compasses - if you're in the northern hemisphere, you can see the rings of the tree grow slightly thicker on the southern side since it receives more light.", "Several recent nationwide surveys show that mature trees in a well-landscaped yard can increase the value of a house by seven to 19 percent.", "Trees prevent soil from eroding into our waterways, reduce stormwater runoff, and lessen flood damage."];
var random = Math.floor(Math.random() * months.length);
    var RandomQuote = (random, months[random])

    if (RandomQuote === "Over 2 billion people’s livelihoods depend on forests.") {
console.log("https://www.ecomatcher.com/tree-resources/");
}
    
       if (RandomQuote === "Forests are home to 300 million people around the world.") {
console.log("https://www.ecomatcher.com/tree-resources/");
}
    if (RandomQuote === "Trees planted sequester CO2 at an average of 25 kilos per tree per year; or an average of 250 kilos over a tree’s lifetime.") {
console.log("https://www.ecomatcher.com/tree-resources/");
}
    
    if (RandomQuote === "There are more than 60,000 species of trees in the world.") {
console.log("https://www.ecomatcher.com/tree-resources/");
}
    
   if (RandomQuote === "More than a quarter of modern medicines originate from tropical forest plants.") {
console.log("https://www.ecomatcher.com/tree-resources/");
}
       if (RandomQuote === "Forests are home to 80% of the world’s terrestrial biodiversity.") {
console.log("https://www.ecomatcher.com/tree-resources/");
}
       if (RandomQuote === "Tropical deforestation contributes 20% of annual global green-house pas emissions.") {
console.log("https://www.ecomatcher.com/tree-resources/");
}
       if (RandomQuote === "13 million forests provide jobs to more than 13 million people across the world.") {
console.log("https://www.ecomatcher.com/tree-resources/");
}
       if (RandomQuote === "80% of Europe used to be forested land, but only 34% of it remains today.") {
console.log("https://www.ecomatcher.com/tree-resources/");
}
       if (RandomQuote === "40% of the world’s oxygen is produced from rainforest.") {
console.log("https://www.ecomatcher.com/tree-resources/");
}
       if (RandomQuote === "Forests support over 86 million green jobs and the livelihoods of millions of other. More than 90% of those who live in extreme poverty are forest-dependent.") {
console.log("https://www.ecomatcher.com/tree-resources/");
}
       if (RandomQuote === "25% of our carbon emissions have historically been captured by Earth’s forests, farms, and grasslands to keep the landscapes vegetates and soil hydrated.") {
console.log("https://www.ecomatcher.com/tree-resources/");
}
       if (RandomQuote === "Trees are the longest living organisms on Earth, and never die of old age.") {
console.log("https://www.precisiontreemn.com/tips/14-fun-facts-about-trees.html");
}
      if (RandomQuote === "Tree rings can help predict climate change.") {
console.log("https://www.precisiontreemn.com/tips/14-fun-facts-about-trees.html");
}
    if (RandomQuote === "Strategically planting trees and shrubs to maximize shade can save you up to 25% on your electricity bills.") {
console.log("https://www.precisiontreemn.com/tips/14-fun-facts-about-trees.html");
}
    if (RandomQuote === "NASA took tree seeds to the moon during the Apollo 14 mission in 1971, testing to see if space’s orbit could change tree growth.") {
console.log("https://www.precisiontreemn.com/tips/14-fun-facts-about-trees.html");
}
    if (RandomQuote === "Trees are able to communicate with each other, and can signal danger to other trees when being attacked so they can start their own defense.") {
console.log("https://www.precisiontreemn.com/tips/14-fun-facts-about-trees.html");
}
    if (RandomQuote === "Trees can defend themselves against attacking insect by releasing certain chemicals that make their leaves harder to digest.") {
console.log("https://www.precisiontreemn.com/tips/14-fun-facts-about-trees.html");
}
    if (RandomQuote === "Leaves, twigs, and branches on trees absorb and deflect sound waves to mask unwanted noise, through a process called sound attenuation.") {
console.log("https://www.precisiontreemn.com/tips/14-fun-facts-about-trees.html");
}
    if (RandomQuote === "Forests help lower our stress, as trees release chemicals called phytoncides. When we breathe them in, it can reduce blood pressure, lower anxiety levels, and increase our pain threshold.") {
console.log("https://www.precisiontreemn.com/tips/14-fun-facts-about-trees.html");
}
    if (RandomQuote === "Tree rings are natural compasses - if you’re in the northern hemisphere, you can see the rings of the tree grow slightly thicker on the southern side since it receives more light.") {
console.log("https://www.precisiontreemn.com/tips/14-fun-facts-about-trees.html");
}
    if (RandomQuote === "Several recent nationwide surveys show that mature trees in a well-landscaped yard can increase the value of a house by seven to 19 percent.") {
console.log("https://www.precisiontreemn.com/tips/14-fun-facts-about-trees.html");
}
    if (RandomQuote === "Trees prevent soil from eroding into our waterways, reduce stormwater runoff, and lessen flood damage.") {
console.log("https://www.precisiontreemn.com/tips/14-fun-facts-about-trees.html");
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
