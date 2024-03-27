import updateTicketByUser from "../../../server/mongodb/actions/updateTicketByUser.js"

export default async function handler(req, res) {
    if (req.method === 'PATCH') {
        const x = await updateTicketByUser(req.body)
        if (x === 0) {
            return res.status(400).send("Ticket not found")
        } else if (x === 1) {
            return res.status(400).send("User not found")
        } else if (x === 2) {
            return res.status(500).send("Unable to update ticket. Invalid data or database issue.")
        } else {
            return res.status(200).send('Successfully updated')
        }
        
    } else {
        res.status(405).send("Method not allowed")
    }
    return
}