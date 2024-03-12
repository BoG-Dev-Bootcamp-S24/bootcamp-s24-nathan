const pokemonData = {}

export default async function handler(req, res) {
<<<<<<< HEAD
  const name = req.query.name;
  const url = "https://pokeapi.co/api/v2/pokemon/";

  if (req.method === 'GET') {
    if(!name) {
      res.status(400).json({error : "name is required"});
    }
    if (pokemonData[name]) {
      res.status(200).json(pokemonData[name]);
    }
    if (name) {
      const callURL = url + name;
      const response = await fetch(callURL);
      const data = await response.json();
      res.status(200).json(data);
    } 
  } else if (req.method === 'PUT') {
    const data = req.query.data;
    pokemonData[name] = data;
    res.status(200).json({ message: `data overwritten for ${name}`});
  }
}
=======
    const name = req.query.name;
    const url = "https://pokeapi.co/api/v2/pokemon/"

    try {
        switch (req.method) {
          case 'GET':
            if (pokemonData[name]) {
                res.status(200).json(pokemonData[name]);
            }
            if (name) {
                const callURL = url + name
                const response = await fetch(callURL);
                const data = await response.json();
                res.status(200).json(data)
            } else {
                res.status(404).json({error : "name is required"})
            }
            break

          case 'PUT':
            if (!name) {
                res.status(400).json({ message: 'Name Required' });
                break;
            }
            const data = req.query.data
            pokemonData[name] = data;
            res.status(200).json({ message: `data overwriiten for ${name}`})
            break;
    
          default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}
>>>>>>> e6395ab (lecture 9 demo)
