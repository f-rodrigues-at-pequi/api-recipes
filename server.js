import jsonServer from "json-server";
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults()
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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