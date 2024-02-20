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

    function getColor(i) {
        const type = data.types[i].type.name;
        let color = "gray";
        switch (type) {
            case 'bug':
                color = "green"
                break;
            case 'dark':
                color = "darkslategray"
                break;
            case 'dragon':
                color = "purple"
                break;
            case 'electric':
                color = "yellow"
                break;
            case 'fairy':
                color = "pink"
                break;
            case 'fighting':
                color = "brown"
                break;
            case 'fire':
                color = "orange"
                break;
            case 'flying':
                color = "lightblue"
                break;
            case 'ghost':
                color = "magenta"
                break;
            case 'grass':
                color = "lightgreen"
                break;
            case 'groud':
                color = "burlywood"
                break;
            case 'ice':
                color = "cyan"
                break;
            case 'normal':
                color = "lightgray"
                break;
            case 'poison':
                color = "violet"
                break;
            case 'psychic':
                color = "lightpink"
                break;
            case 'rock':
                color = "darkkhaki"
                break;
            case 'steel':
                color = "darkgray"
                break;
            case 'water':
                color = "royalblue"
                break;
            default:
              color = "gray"
          }
        return color;
    }

    useEffect(() => {
        fetchPokemonByIndex();
      }, [index]);

    return(
        <div>
            <h1 class='heading'>PokeDex</h1>
            <div class='columns'>
                <div class='leftColumn'>
                    {loading ? (
                            <div class='imagebox'>Loading...</div>
                        ) : data ? (
                            <div class='imagebox'><img src={data.sprites.other['official-artwork'].front_default} class='image'/></div>
                        ) : (
                            <div class='imagebox'>Error fetching data</div>
                        )
                    }
                    {loading ? (
                        <div class='name'>Loading...</div>
                        ) : data ? (
                        <div class='name'>{data.name}</div>
                        ) : (
                        <div class='name'>Error fetching data</div>
                    )}
                    
                    <div class='typesbox'>
                        <div>Types:</div>
                        <div class='typesboxInner'>
                            {data && (data.types[0] && 
                                (<div class='type' style={{backgroundColor: getColor(0)}}>{data.types[0].type.name}</div>))}
                            {data && (data.types[1] && 
                                (<div class='type' style={{backgroundColor: getColor(1)}}>{data.types[1].type.name}</div>))}
                            {data && (data.types[2] && 
                                (<div class='type' style={{backgroundColor: getColor(2)}}>{data.types[2].type.name}</div>))}
                            {data && (data.types[3] && 
                                (<div class='type' style={{backgroundColor: getColor(3)}}>{data.types[3].type.name}</div>))}
                        </div>
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