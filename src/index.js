const express = require("express");
const cors = require("cors"); //Permite que app externa pueda hacer consultas
const session = require("express-session");

//Inicializaciones
const app = express();
require("./database");

// Settings
app.set("port", process.env.PORT || 3678);

// Middlewares
app.use(express.urlencoded({exttended: false}));
app.use(session({
	secret: "mysecretapp",
	resave: true, 
	saveUninitialized: true
}))

app.use(cors());
//app.use(morgan("dev"));
app.use(express.json());

// Global Variables
 
// Routes
app.use("/api/customers",  require("./routes/routes.customers"));
app.use("/api/orders", require("./routes/routes.orders"));
app.use("/api/items", require("./routes/routes.items"));
app.use("/api/products", require("./routes/routes.products"));

app.use("/api/register", require("./routes/routes.registers"));


// Static Files

// Server is listenning
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});



module.exports = app;