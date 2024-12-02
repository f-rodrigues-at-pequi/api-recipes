import jsonServer from "json-server";
const server = jsonServer.create()
const router = jsonServer.router("db.json")

const middlewares = jsonServer.defaults()


server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
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

server.listen(3000, () => {
    console.log("Server is running on port 3000")
})

module.exports = server;