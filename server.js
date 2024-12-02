import jsonServer from "json-server";
const server = jsonServer.create()
const router = jsonServer.router("db.json")

const middlewares = jsonServer.defaults()


server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://recipes-d9es-ihcyyx6wd-fredericos-projects-230ee5df.vercel.app/');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }
    next();
});

server.use(middlewares)
server.use(
    jsonServer.rewriter({
        "/*": "/$1",
    })
)
server.use(router)
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log("Server is running on port 3000")
})

module.exports = server;