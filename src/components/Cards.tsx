"use client";
import React, { act, useEffect, useState } from "react";

const PokemonCards = () => {
  const [pokemonCards, setPokemonCards] = useState([]);
  const [activeCards, setActiveCards] = useState<number[]>([]); // Track active cards
  const [activeCards2, setActiveCards2] = useState<number[]>([]); // Track active cards
  const [flippedCards, setFlippedCards] = useState<number[]>([]); // Track active cards

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.add("is-flipped");
      });
    });

    if (activeCards.length > 1) {
      const flippedCards = document.querySelectorAll(".is-flipped");

      // Iterate through each element and remove the 'is-flipped' class
      flippedCards.forEach((card) => {
        card.classList.remove("is-flipped");
      });
    }
  }, [activeCards]);

  useEffect(() => {
    if (
      (activeCards.includes(1) && activeCards.includes(8)) ||
      (activeCards.includes(2) && activeCards.includes(7)) ||
      (activeCards.includes(3) && activeCards.includes(6)) ||
      (activeCards.includes(4) && activeCards.includes(5))
    ) {
      alert("You Won!");
    } else if (activeCards.length > 1) {
      setActiveCards([]);
    }
    console.log(activeCards);
  }, [activeCards2]);

  useEffect(() => {
    // Fetching 8 Pokémon from the API
    fetch("https://pokeapi.co/api/v2/pokemon?limit=4")
      .then((response) => response.json())
      .then((data) => {
        const fetchDetails = data.results.map((pokemon: any) =>
          fetch(pokemon.url).then((response) => response.json())
        );

        Promise.all(fetchDetails).then((details: any) => {
          setPokemonCards(details);
          console.log(details);
        });
      })
      .catch((error) => console.error("Error fetching Pokémon:", error));
  }, []);

  const handleImageClick = (cardIndex: number, cardIndex2: number) => {
    setFlippedCards((prevCards) => [...prevCards, cardIndex2]);
    if (activeCards.includes(cardIndex)) {
      setActiveCards((prevCards) =>
        prevCards.filter((index) => index !== cardIndex)
      );
    } else {
      if (activeCards.length < 2) {
        setActiveCards((prevCards) => [...prevCards, cardIndex]);
        setActiveCards2((prevCards) => [...prevCards, cardIndex]);
      } else {
        setActiveCards([cardIndex]);
        console.log(activeCards);
      }
    }
  };

  return (
    <div className="w-full">
      <h1 className="my-5">Pokemon Cards</h1>
      <div className="w-full flex flex-row justify-center items-between flex-wrap">
        {/* Card 1 */}
        <div className="scene scene--card">
          <div className="card">
            <div className="card__face card__face--front">
              <div onClick={() => handleImageClick(1, 1)} className="pointer">
                Card 1
              </div>
            </div>
            <div className="card__face card__face--back">
              <img
                id="card1"
                className="w-full h-2/3 mt-2"
                src={pokemonCards[0]?.sprites?.front_default}
                alt="Card 1"
              />
            </div>
          </div>
        </div>

        {/* <div
          className="w-1/5 bg-gray-300 text-2xl text-gray-800 rounded items-center justify-center flex flex-col"
          style={{ height: "200px" }}
        >
          <div onClick={() => handleImageClick(1, 1)} className="pointer">
            Card 1
          </div>
          <img
            id="card1"
            className="w-full h-2/3 mt-2 hidden"
            src={pokemonCards[0]?.sprites?.front_default}
            alt="Card 1"
          />
        </div> */}

        {/* Card 2 */}
        <div className="scene scene--card mx-2 w-1/5">
          <div className="card">
            <div className="card__face card__face--front">
              <div onClick={() => handleImageClick(2, 2)} className="pointer">
                Card 2
              </div>
            </div>
            <div className="card__face card__face--back">
              <img
                id="card1"
                className="w-full h-2/3 mt-2"
                src={pokemonCards[1]?.sprites?.front_default}
                alt="Card 1"
              />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="scene scene--card mx-2 w-1/5">
          <div className="card">
            <div className="card__face card__face--front">
              <div onClick={() => handleImageClick(3, 3)} className="pointer">
                Card 3
              </div>
            </div>
            <div className="card__face card__face--back">
              <img
                id="card1"
                className="w-full h-2/3 mt-2"
                src={pokemonCards[2]?.sprites?.front_default}
                alt="Card 1"
              />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="scene scene--card mx-2 w-1/5">
          <div className="card">
            <div className="card__face card__face--front">
              <div onClick={() => handleImageClick(4, 4)} className="pointer">
                Card 4
              </div>
            </div>
            <div className="card__face card__face--back">
              <img
                id="card1"
                className="w-full h-2/3 mt-2"
                src={pokemonCards[3]?.sprites?.front_default}
                alt="Card 1"
              />
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="scene scene--card mx-2 w-1/5">
          <div className="card">
            <div className="card__face card__face--front">
              <div onClick={() => handleImageClick(5, 5)} className="pointer">
                Card 5
              </div>
            </div>
            <div className="card__face card__face--back">
              <img
                id="card1"
                className="w-full h-2/3 mt-2"
                src={pokemonCards[3]?.sprites?.front_default}
                alt="Card 1"
              />
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="scene scene--card mx-2 w-1/5">
          <div className="card">
            <div className="card__face card__face--front">
              <div onClick={() => handleImageClick(6, 6)} className="pointer">
                Card 6
              </div>
            </div>
            <div className="card__face card__face--back">
              <img
                id="card1"
                className="w-full h-2/3 mt-2"
                src={pokemonCards[2]?.sprites?.front_default}
                alt="Card 1"
              />
            </div>
          </div>
        </div>
        {/* Card 7 */}
        <div className="scene scene--card mx-2 w-1/5">
          <div className="card">
            <div className="card__face card__face--front">
              <div onClick={() => handleImageClick(7, 7)} className="pointer">
                Card 7
              </div>
            </div>
            <div className="card__face card__face--back">
              <img
                id="card1"
                className="w-full h-2/3 mt-2"
                src={pokemonCards[1]?.sprites?.front_default}
                alt="Card 1"
              />
            </div>
          </div>
        </div>
        {/* Card 8 */}
        <div className="scene scene--card mx-2 w-1/5">
          <div className="card">
            <div className="card__face card__face--front">
              <div onClick={() => handleImageClick(8, 8)} className="pointer">
                Card 8
              </div>
            </div>
            <div className="card__face card__face--back">
              <img
                id="card1"
                className="w-full h-2/3 mt-2"
                src={pokemonCards[0]?.sprites?.front_default}
                alt="Card 1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCards;
