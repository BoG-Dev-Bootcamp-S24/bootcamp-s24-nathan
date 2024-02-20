import React, { useState, useEffect } from 'react';
import './Pokedex.css';
import arrowImage from "./img/left-arrow.png";

const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

function Pokedex() {
    const [index, setIndex] = useState(1);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const IncreaseIndex = () => {
        setIndex(index + 1)
    }

    const DecreaseIndex = () => {
        setIndex(index - 1)
    }

    async function fetchPokemonByIndex()  {
        setLoading(true);  // Set loading to true when starting to fetch new data
        try {
            const res = await fetch(API_URL + index);
            const newData = await res.json();
            setData(newData);
        } catch (error) {
            console.error("Error fetching data:", error);
            setData(null);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchPokemonByIndex();
      }, [index]);

    return(
        <div>
            <h1 class='heading'>PokeDex</h1>
            <div class='columns'>
                <div class='leftColumn'>
                    {loading ? (
                            <div class='name'>Loading...</div>
                        ) : data ? (
                            <div class='imagebox'><img src={data.sprites.other['official-artwork'].front_default} class='image'/></div>
                        ) : (
                            <div class='name'>Error fetching data</div>
                        )
                    }
                    {loading ? (
                        <div class='name'>Loading...</div>
                        ) : data ? (
                        <div class='name'>{data.name}</div>
                        ) : (
                        <div class='name'>Error fetching data</div>
                    )}
                    <div>
                        <p>Types:</p>
                        {}
                    </div>
                    <div class='buttons'>
                        <button class="button2" onClick={DecreaseIndex}><img src={arrowImage} class="leftArrow"/></button>
                        <button class="button2" onClick={IncreaseIndex}><img src={arrowImage} class="rightArrow"/></button>
                    </div>
                </div>
                <div class='rightColumn'>
                    <p>h</p>
                </div>
            </div>
        </div>
    );
}

export default Pokedex;