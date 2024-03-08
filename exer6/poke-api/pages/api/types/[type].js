export default async function handler(req, res) {
    const URL = "https://pokeapi.co/api/v2/type/"
    const type = req.query.type;

    if (req.method == "GET") {
        try {
            const response = await fetch(URL + type)
            const typeList = await response.json();
            res.status(200).json({ pokemon : typeList.pokemon});
        } catch (e) {
            res.status(400).json({ error : "Please provide a valid pokemon type"});
        }
    }  else {
        res.status(400).json({ error : "GET only"});
    }
}