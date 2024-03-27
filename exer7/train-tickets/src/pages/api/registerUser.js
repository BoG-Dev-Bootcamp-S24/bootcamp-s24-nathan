import createUser from "../../../server/mongodb/actions/createUser"

export default async function handler(req, res) {
    if (req.method === "POST") {
        if (createUser(req.body) ) {
            return res.status(200).send("User created")
        } else {
            return res.status(500).send("Unable to create user. Invalid data or database issue.")
        }
        
    } else {
        res.status(405).send("Method not allowed")
    }
    return
}