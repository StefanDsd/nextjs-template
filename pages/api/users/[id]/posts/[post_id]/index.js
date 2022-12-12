import database from "/database.json"

export default function handlerUser(req, res) { 
    const {id, post_id} = req.query;
    const [user] = database.filter(obj => obj.user_id === Number(id));

    const posts = user.posts.find((post)=> post.post_id === +post_id)

    res.status(200).json(posts)
}