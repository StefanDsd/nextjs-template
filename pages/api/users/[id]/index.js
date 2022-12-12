import database from "/database.json"

export default function handlerUser(req, res) { 
    const id = req.query.id;
    const [user] = database.filter(obj => obj.user_id === Number(id));



    res.status(200).json(user)
}