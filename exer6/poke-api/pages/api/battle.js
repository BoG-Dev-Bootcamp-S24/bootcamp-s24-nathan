export default async function handler(req, res) {
    const URL = "https://pokeapi.co/api/v2/pokemon/"
    const name1 = req.body.name1;
    const name2 = req.body.name2;

    if (req.method == "POST") {
        try {
            const response1 = await fetch(URL + name1)
            const response2 = await fetch(URL + name2)
            const pokemon1 = await response1.json();
            const pokemon2 = await response2.json();
            let pokemon1Total = 0
            let pokemon2Total = 0
            pokemon1.stats.forEach((stat) => pokemon1Total += stat.base_stat)
            pokemon2.stats.forEach((stat) => pokemon2Total += stat.base_stat)

            res.status(200).json({ winner : pokemon1Total >= pokemon2Total ? pokemon1.name : pokemon2.name});
        } catch (e) {
            res.status(400).json({ error : "Please provide 2 valid pokemon names"});
        }
    } else {
        res.status(400).json({ error : "POST only"});
    }
}