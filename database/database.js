let Sequelize = require("sequelize");
require('dotenv').config();
// const orm = new Sequelize("barback", "root", "", {
//   dialect: "mysql"
// });

const orm = new Sequelize(`${process.env.DATABASE_URL}`);

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
OrderDetails.belongsTo(Orders);
OrderDetails.belongsTo(MenuItems);
MenuItems.sync();
Customers.sync();
Orders.sync();
OrderDetails.sync();

exports.MenuItems = MenuItems;
exports.Customers = Customers;
exports.Orders = Orders;
exports.OrderDetails = OrderDetails;
exports.connection = orm;
