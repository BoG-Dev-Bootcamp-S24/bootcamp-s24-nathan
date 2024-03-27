import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser.js"

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const x = await readTicketsByUser(req.query)
        console.log(x)
        if (x === 0) {
            return res.status(400).send("User not found")
        } else if (x === 2) {
            return res.status(500).send("Unable to read tickets by user. Invalid data or database issue.")
        } else {
            return res.status(200).send(x)
        }
        
    } else {
        res.status(405).send("Method not allowed")
    }
    return
}