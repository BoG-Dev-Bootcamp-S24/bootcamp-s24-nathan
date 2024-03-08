export default async function handler(req, res) {
    const URL = "https://pokeapi.co/api/v2/pokemon/"
    const name = req.query.name;

    if (req.method == "GET") {
        try {
            const response = await fetch(URL + name)
            const pokemon = await response.json();
            res.status(200).json({ name : pokemon.name, sprite : pokemon.sprites.front_default, type : pokemon.types});
        } catch (e) {
            res.status(400).json({ error : "Please provide a valid pokemon name"});
        }
    }  else {
        res.status(400).json({ error : "GET only"});
    }
}