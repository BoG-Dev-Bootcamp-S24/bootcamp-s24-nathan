import createTicket from "../../../server/mongodb/actions/createTicket"

export default async function handler(req, res) {
    if (req.method === "POST") {
        if (await createTicket(req.body)) {
            return res.status(200).send("Ticket created")
        } else {
            return res.status(500).send("Unable to create ticket. Invalid data or database issue.")
        }
        
    } else {
        res.status(405).send("Method not allowed")
    }
    return
}