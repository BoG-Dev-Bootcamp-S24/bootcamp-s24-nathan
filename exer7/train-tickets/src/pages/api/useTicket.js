import deleteTicket from "../../../server/mongodb/actions/deleteTicket.js"

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        const x = await deleteTicket(req.query)
        if (x === 1) {
            return res.status(200).send("Successfully used ticket")
        } else if (x === 2) {
            return res.status(500).send("Unable to use ticket")
        } else {
            return res.status(400).send("Ticket not found")
        }
        
    } else {
        res.status(405).send("Method not allowed")
    }
    return
}