export default async function handler(req, res) {
    const URL = "https://pokeapi.co/api/v2/pokemon/"

    if (req.method == "GET") {
        const response = await fetch(URL + Math.floor(Math.random() * 1000 + 1).toString())
        const randomPokemon = await response.json();
        res.status(200).json({ name : randomPokemon.name, sprite : randomPokemon.sprites.front_default, type : randomPokemon.types});
    }  else {
        res.status(400).json({ error : "GET only"});
    }
}