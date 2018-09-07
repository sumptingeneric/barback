// var mysql = require("mysql");
let Sequelize = require("Sequelize");

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "", // may need to replace empty string with 'password'
//   database: "barback"
// });

// connection.connect();

const orm = new Sequelize("barback", "root", "", {
  //host: "localhost",
  dialect: "mysql" //| "sqlite" | "postgres" | "mssql",
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // },
  // // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  //operatorsAliases: false
});

orm
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

let MenuItems = orm.define("MenuItems", {
  name: Sequelize.STRING,
  price: Sequelize.FLOAT,
  category: Sequelize.STRING,
  imageUrl: Sequelize.STRING,
  description: Sequelize.TEXT
});

let Customers = orm.define("Customers", {
  name: Sequelize.STRING
});

let Orders = orm.define("Orders", {
  status: Sequelize.STRING
});

let OrderDetails = orm.define("OrderDetails", {
  quantity: Sequelize.INTEGER,
  subtotal: Sequelize.FLOAT
});

Customers.hasMany(Orders);
Orders.belongsTo(Customers);
Orders.belongsToMany(MenuItems, { through: "OrderDetails" });
MenuItems.belongsToMany(Orders, { through: "OrderDetails" });

MenuItems.sync();
Customers.sync();
Orders.sync();
OrderDetails.sync();

exports.MenuItems = MenuItems;
exports.Customers = Customers;
exports.Orders = Orders;
exports.OrderDetails = OrderDetails;

//exports.connection = connection; // not sure where this is going to be used
