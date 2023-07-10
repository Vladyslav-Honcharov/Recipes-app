// const jsonServer = require("json-server");
// const auth = require("json-server-auth");

// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();

// server.db = router.db;

// server.use(middlewares);
// server.use(jsonServer.bodyParser);

// // Set the database to use the "users" property for authentication
// const userdb = router.db.get("users");

// // Add custom routes for authentication
// server.post("/auth/register", auth.register(userdb));
// server.post("/auth/login", auth.login(userdb));

// // Use the auth middleware to protect the routes
// server.use("/api", auth.authenticate(userdb));

// server.use(router);

// server.listen(4200, () => {
//   console.log("JSON Server is running on port 4200");
// });
