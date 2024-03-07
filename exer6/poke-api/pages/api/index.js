export default async function handler(req, res) {
    if (req.method == "GET") {
        const URL = "https://pokeapi.co/api/v2/pokemon/"
        const response = await fetch(URL + Math.floor(Math.random() * 1000 + 1).toString())
        const randomPokemon = await response.json();
        res.status(200).json({ name : randomPokemon.name, sprite : randomPokemon.sprites.front_default, type : randomPokemon.types});
    }
}