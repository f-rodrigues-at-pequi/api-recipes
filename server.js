import jsonServer from "json-server";
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(
    jsonServer.rewriter({
        "/*": "/$1",
    })
)
server.use(router)
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log("Server is running on port 3000")
})

module.exports = server;