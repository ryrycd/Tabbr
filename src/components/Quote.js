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

   const months = ["Over 2 billion people's livelihoods depend on forests.", "Forests are home to 300 million people around the world.", "Trees planted sequester CO2 at an average of 25 kilos per tree per year; or an average of 250 kilos over a tree's lifetime.", "There are more than 60,000 species of trees in the world.", "More than a quarter of modern medicines originate from tropical forest plants.", "Forests are home to 80% of the world's terrestrial biodiversity.", "Tropical deforestation contributes 20% of annual global green-house pas emissions.", "13 million forests provide jobs to more than 13 million people across the world.", "80% of Europe used to be forested land, but only 34% of it remains today.", "40% of the world's oxygen is produced from rainforest.", "Forests support over 86 million green jobs and the livelihoods of millions of other. More than 90% of those who live in extreme poverty are forest-dependent.", "25% of our carbon emissions have historically been captured by Earth's forests, farms, and grasslands to keep the landscapes vegetated and soil hydrated.", "Trees are the longest living organisms on Earth, and never die of old age.", "Tree rings can help predict climate change.", "Strategically planting trees and shrubs to maximize shade can save you up to 25% on your electricity bills.", "NASA took tree seeds to the moon during the Apollo 14 mission in 1971, testing to see if space's orbit could change tree growth.", "Trees are able to communicate with each other, and can signal danger to other trees when being attacked so they can start their own defense.", "Trees can defend themselves against attacking insect by releasing certain chemicals that make their leaves harder to digest.", "Leaves, twigs, and branches on trees absorb and deflect sound waves to mask unwanted noise, through a process called sound attenuation.", "Forests help lower our stress, as trees release chemicals called phytoncides. When we breathe them in, it can reduce blood pressure, lower anxiety levels, and increase our pain threshold.", "Tree rings are natural compasses - if you're in the northern hemisphere, you can see the rings of the tree grow slightly thicker on the southern side since it receives more light.", "Several recent nationwide surveys show that mature trees in a well-landscaped yard can increase the value of a house by seven to 19 percent.", "Trees prevent soil from eroding into our waterways, reduce stormwater runoff, and lessen flood damage.", "Our Earth is home to over 60,000 different tree species.", "The first tree came into the world 470 million years ago.", "Before trees, Earth was home to Fungi that grew 26 feet (8 meters) tall!", "The earliest known tree is Wattieza, which grew without leaves. It was found in what's now known as New York.", "Some trees can emit chemicals that attract predators, like birds, when the tree is in danger. These predators will come towards the tree, and eat the parasites.", "The deepest tree roots can be found in South Africa's Echo Caves, with a root depth of 400 feet.", "In the U.S. alone, pollution removal by urban trees is estimated to save 850 lives per year, and $6.8 billion in total health care costs.", "Researchers at Stanford University found that adding just one tree to an open pasture can raise the number of bird species from near zero to 80.", "Research shows that urban trees are correlated with lower crime rates. Graffiti, vandalism, littering, and domestic violence all significantly decrease as more urban trees are added to an area.", "The oldest tree is 5,062 years old, meaning it was alive when Wooly Mammoths roamed the Earth.", "General Sherman, a giant sequoia, is the largest tree in the world, standing 275 feet (83.8 m) tall with 52,000 cubic feet (1,486.6 cubic meters) of wood.", "Consumers have a 12% higher willingness to pay for goods and services in retail areas that have streetscape greening such as street trees and sidewalk gardens.", "In one day, one large tree can lift up to 100 gallons of water out of the ground and discharge it into the air.", "Trees have only been around for the last 10% of earth’s entire history.", "Some tree species never die of old age. It’s been discovered that even when they're 1,000 years old, the immune system of these trees is like that of a 20-year-old.", "Many ancient cultures believed that knocking on tree trunks was thought to awaken the spirit for protection – and this led to the saying ‘knock on wood’, which we still use today!", "There are 422 times as many trees on earth as people. That figure sounds pretty impressive, until you consider that since the start of human civilization (about 11,700 years ago) the total number of trees on Earth has fallen by around 46%.", "Since the start of human civilization (about 11,700 years ago), the total number of trees on Earth has fallen by around 46%.", "More than 60% of anticancer drugs originate from trees and plants.", "1 tree cools temperature equivalent to 2 central air conditioners.", "Tropical rainforests cover less than 3% of Earth’s area, yet they are home to more than 1/2 of our planet’s terrestrial animal species.", "We lose a football field of primary rainforest every 6 seconds.", "The area of primary forest worldwide has decreased by over 80 million hectares since 1990.", "We lose 10 million hectares of forest every year.", "Areas managed by Indigenous Peoples (approximately 28% of the world’s land surface) include some of the most ecologically intact forests and many hotspots of biodiversity.", "Globally, 18% of the world’s forest area, or more than 700 million hectares, fall within legally established protected areas such as national parks, conservation areas and game reserves.", "The Amazon contributes 20% of the oxygen produced on land via photosynthesis.", "Forests currently absorb 30% of all CO2 emissions.", "Hospital patients who can see fresh green trees from their rooms are reported to heal faster and spend less time in the hospital than those without.", "The saying ‘knock on wood’ comes from the ancient pagan rituals, where it was believed that good spirits resided inside trees.", "A single tree can absorb as much carbon annually as a car makes while driving 26,000 miles.", "The bark of a willow tree is used for producing aspirin, and the Yew tree is used for making such a drug as Taxol."];
var random = Math.floor(Math.random() * months.length);
    var RandomQuote = (random, months[random])
    let QuoteSource = "";
    let QuoteName = "Tabbr";

    if (RandomQuote === "" || RandomQuote === "Over 2 billion people's livelihoods depend on forests." || RandomQuote === "Forests are home to 300 million people around the world." || RandomQuote === "Trees planted sequester CO2 at an average of 25 kilos per tree per year; or an average of 250 kilos over a tree's lifetime." || RandomQuote === "There are more than 60,000 species of trees in the world." || RandomQuote === "More than a quarter of modern medicines originate from tropical forest plants." || RandomQuote === "Forests are home to 80% of the world's terrestrial biodiversity." || RandomQuote === "Tropical deforestation contributes 20% of annual global green-house pas emissions." || RandomQuote === "13 million forests provide jobs to more than 13 million people across the world." || RandomQuote === "80% of Europe used to be forested land, but only 34% of it remains today." || RandomQuote === "40% of the world's oxygen is produced from rainforest." || RandomQuote === "Forests support over 86 million green jobs and the livelihoods of millions of other. More than 90% of those who live in extreme poverty are forest-dependent." || RandomQuote === "25% of our carbon emissions have historically been captured by Earth's forests, farms, and grasslands to keep the landscapes vegetated and soil hydrated.") {
QuoteSource = "https://www.ecomatcher.com/tree-resources/";
      QuoteName = "ecomatcher.com" 
    } else if (RandomQuote === "" || RandomQuote === "Trees are the longest living organisms on Earth, and never die of old age." || RandomQuote === "Tree rings can help predict climate change." || RandomQuote === "Strategically planting trees and shrubs to maximize shade can save you up to 25% on your electricity bills." || RandomQuote === "NASA took tree seeds to the moon during the Apollo 14 mission in 1971, testing to see if space's orbit could change tree growth." || RandomQuote === "Trees are able to communicate with each other, and can signal danger to other trees when being attacked so they can start their own defense." || RandomQuote === "Trees can defend themselves against attacking insect by releasing certain chemicals that make their leaves harder to digest." || RandomQuote === "Leaves, twigs, and branches on trees absorb and deflect sound waves to mask unwanted noise, through a process called sound attenuation." || RandomQuote === "Forests help lower our stress, as trees release chemicals called phytoncides. When we breathe them in, it can reduce blood pressure, lower anxiety levels, and increase our pain threshold." || RandomQuote === "Tree rings are natural compasses - if you're in the northern hemisphere, you can see the rings of the tree grow slightly thicker on the southern side since it receives more light." || RandomQuote === "Several recent nationwide surveys show that mature trees in a well-landscaped yard can increase the value of a house by seven to 19 percent." || RandomQuote === "Trees prevent soil from eroding into our waterways, reduce stormwater runoff, and lessen flood damage.") {
  QuoteSource = "https://www.precisiontreemn.com/tips/14-fun-facts-about-trees.html";
      QuoteName = "Precision Trees";
    } else if (RandomQuote === "" || RandomQuote === "Our Earth is home to over 60,000 different tree species." || RandomQuote === "The first tree came into the world 470 million years ago." || RandomQuote === "Before trees, Earth was home to Fungi that grew 26 feet (8 meters) tall!" || RandomQuote === "The earliest known tree is Wattieza, which grew without leaves. It was found in what's now known as New York." || RandomQuote === "Some trees can emit chemicals that attract predators, like birds, when the tree is in danger. These predators will come towards the tree, and eat the parasites." || RandomQuote === "The deepest tree roots can be found in South Africa's Echo Caves, with a root depth of 400 feet." || RandomQuote === "In the U.S. alone, pollution removal by urban trees is estimated to save 850 lives per year, and $6.8 billion in total health care costs." || RandomQuote === "Researchers at Stanford University found that adding just one tree to an open pasture can raise the number of bird species from near zero to 80." || RandomQuote === "Research shows that urban trees are correlated with lower crime rates. Graffiti, vandalism, littering, and domestic violence all significantly decrease as more urban trees are added to an area." || RandomQuote === "The oldest tree is 5,062 years old, meaning it was alive when Wooly Mammoths roamed the Earth.") {
        QuoteSource = "https://www.treehugger.com/facts-about-trees-4868798";
            QuoteName = "treehugger.com";
    } else if (RandomQuote === "" || RandomQuote === "General Sherman, a giant sequoia, is the largest tree in the world, standing 275 feet (83.8 m) tall with 52,000 cubic feet (1,486.6 cubic meters) of wood." || RandomQuote === "Consumers have a 12% higher willingness to pay for goods and services in retail areas that have streetscape greening such as street trees and sidewalk gardens." || RandomQuote === "In one day, one large tree can lift up to 100 gallons of water out of the ground and discharge it into the air.") {
            QuoteSource = "https://www.treesaregood.org/funfacts";
                QuoteName = "treesaregood.com";
    } else if (RandomQuote === "" || RandomQuote === "More than 60% of anticancer drugs originate from trees and plants." || RandomQuote === "1 tree cools temperature equivalent to 2 central air conditioners." || RandomQuote === "Tropical rainforests cover less than 3% of Earth’s area, yet they are home to more than 1/2 of our planet’s terrestrial animal species." || RandomQuote === "We lose a football field of primary rainforest every 6 seconds." || RandomQuote === "The area of primary forest worldwide has decreased by over 80 million hectares since 1990." || RandomQuote === "We lose 10 million hectares of forest every year." || RandomQuote === "Areas managed by Indigenous Peoples (approximately 28% of the world’s land surface) include some of the most ecologically intact forests and many hotspots of biodiversity." || RandomQuote === "Globally, 18% of the world’s forest area, or more than 700 million hectares, fall within legally established protected areas such as national parks, conservation areas and game reserves." || RandomQuote === "The Amazon contributes 20% of the oxygen produced on land via photosynthesis." || RandomQuote === "Forests currently absorb 30% of all CO2 emissions.") {
                QuoteSource = "https://www.ovoenergy.com/blog/green/10-amazing-facts-about-trees";
                    QuoteName = "ovoenergy.com";
    } else if (RandomQuote === "" || RandomQuote === "Hospital patients who can see fresh green trees from their rooms are reported to heal faster and spend less time in the hospital than those without." || RandomQuote === "The saying ‘knock on wood’ comes from the ancient pagan rituals, where it was believed that good spirits resided inside trees." || RandomQuote === "A single tree can absorb as much carbon annually as a car makes while driving 26,000 miles." || RandomQuote === "The bark of a willow tree is used for producing aspirin, and the Yew tree is used for making such a drug as Taxol.") {
                    QuoteSource = "https://www.nelda.org.in/67-interesting-facts-about-trees-youll-be-surprised/";
                        QuoteName = "nelda.org";
    } else {
      
    }
   
    
    const data = {
    "id": 0,
    "language_code": "en",
    "content": RandomQuote,
    "url": QuoteSource,
    "originator": {
        "id": 0,
        "name": QuoteName,
        "url": QuoteSource,
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
