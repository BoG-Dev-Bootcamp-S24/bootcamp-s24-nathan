import React, { useState } from 'react';
import './Pokedex.css';

function Pokedex() {
    let API_URL = 'https://pokeapi.co/api/v2/pokemon/'
    let [index, setIndex] = useState(0);
    let [name, setName] = useState('');

    const IncreaseIndex = () => {
        setIndex(index + 1)
    }

    const DecreaseIndex = () => {
        setIndex(index - 1)
    }

    return(
        <div>
            <h1 class='heading'>PokeDex</h1>
            <div class='columns'>
                <div class='leftColumn'>
                    <p>h</p>
                </div>
                <div class='rightColumn'>
                    <p>h</p>
                </div>
            </div>
        </div>
    );
}

export default Pokedex;