export default async function handler(req, res) {
    const URL = "https://pokeapi.co/api/v2/pokemon-species/"
    const name = req.query.name;

    if (req.method == "GET") {
        try {
            const response = await fetch(URL + name)
            const pokemon = await response.json();

            const evoChain = await fetch(pokemon.evolution_chain.url)
            let nextEvo = await evoChain.json()
            nextEvo = nextEvo.chain;
            
            while (nextEvo.species.name != pokemon.name) {
                nextEvo = nextEvo.evolves_to[0];
            }

            res.status(200).json({ next_evolution : nextEvo.evolves_to[0] == null ? nextEvo.species.name : nextEvo.evolves_to[0].species.name});

        } catch (e) {
            res.status(400).json({ error : "Please provide a valid pokemon name"});
        }
    } else {
        res.status(400).json({ error : "GET only"});
    }
}