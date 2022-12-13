import database from "../../database.json"



export default function handlerUser(req, res) {
    res.status(200).json(database)
}