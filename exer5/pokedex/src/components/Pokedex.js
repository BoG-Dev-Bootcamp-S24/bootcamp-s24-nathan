import React, { useState, useEffect } from 'react';
import './Pokedex.css';
import arrowImage from "./img/left-arrow.png";

const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

function Pokedex() {
    const [index, setIndex] = useState(1);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [infoPanel, setInfoPanel] = useState(true);

    const IncreaseIndex = () => {
        setIndex(index + 1)
    }

    const DecreaseIndex = () => {
        setIndex(index - 1)
    }

    const OpenInfo = () => {
        setInfoPanel(true)
    }

    const OpenMoves = () => {
        setInfoPanel(false)
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
                color = "#A6B91A"
                break;
            case 'dark':
                color = "#705746"
                break;
            case 'dragon':
                color = "#6F35FC"
                break;
            case 'electric':
                color = "#F7D02C"
                break;
            case 'fairy':
                color = "#D685AD"
                break;
            case 'fighting':
                color = "#C22E28"
                break;
            case 'fire':
                color = "#EE8130"
                break;
            case 'flying':
                color = "#A98FF3"
                break;
            case 'ghost':
                color = "#735797"
                break;
            case 'grass':
                color = "#7AC74C"
                break;
            case 'ground':
                color = "#E2BF65"
                break;
            case 'ice':
                color = "#96D9D6"
                break;
            case 'normal':
                color = "#A8A77A"
                break;
            case 'poison':
                color = "#A33EA1"
                break;
            case 'psychic':
                color = "#F95587"
                break;
            case 'rock':
                color = "#B6A136"
                break;
            case 'steel':
                color = "#B7B7CE"
                break;
            case 'water':
                color = "#6390F0"
                break;
          }
        return color;
    }

    function getMoves() {
        const moves = data.moves.map((move) => move.move.name)
        return moves
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
                    <div class='indexButtons'>
                        <button class="button2" onClick={DecreaseIndex}><img src={arrowImage} class="leftArrow"/></button>
                        <button class="button2" onClick={IncreaseIndex}><img src={arrowImage} class="rightArrow"/></button>
                    </div>
                </div>
                <div class='rightColumn'>
                    {infoPanel ? <h2 class='infoMoves'>Info</h2> : <h2>Moves</h2>}
                    {infoPanel ? (data && (
                    <div class='infoMovesPanel'>
                        <div>Height: {data.height/10}m</div>
                        <div>Weigh: {data.weight/10}kg</div>
                        <div>HP: {data.stats[0].base_stat}</div>
                        <div>Attack: {data.stats[1].base_stat}</div>
                        <div>Defense: {data.stats[2].base_stat}</div>
                        <div>Special-Attack: {data.stats[3].base_stat}</div>
                        <div>Special-Defense: {data.stats[4].base_stat}</div>
                        <div>Speed: {data.stats[5].base_stat}</div>
                    </div>
                    )) : (data && (
                        <div class='infoMovesPanel'>
                        {data && data.moves.map((move) => 
                        <div>{move.move.name}</div>
                    )}
                    </div>))}
                    <div class='infoMovesButtons'>
                        <button class="button3" onClick={OpenInfo}>Info</button>
                        <button class="button3" onClick={OpenMoves}>Moves</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pokedex;