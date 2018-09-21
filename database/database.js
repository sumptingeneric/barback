let Sequelize = require("sequelize");
<<<<<<< 5ef31570797df8113c376da738b1ab4c387cd26e
require('dotenv').config();
// const orm = new Sequelize("barback", "root", `${process.env.sqlPassword}`, {
//   dialect: "mysql"
// });
=======

const orm = new Sequelize("barback", "root", "Joanne93", {
  dialect: "mysql"
});
>>>>>>> fix bugs before launching app

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

let Surveys = orm.define("Survey", {
  drinkQuality: Sequelize.INTEGER,
  customerService: Sequelize.INTEGER
});

Customers.hasMany(Orders);
Orders.belongsTo(Customers);
Orders.belongsToMany(MenuItems, { through: "OrderDetails" });
MenuItems.belongsToMany(Orders, { through: "OrderDetails" });
Surveys.belongsToMany(Orders, { through: "OrderDetails" });

OrderDetails.belongsTo(Orders);
OrderDetails.belongsTo(MenuItems);

OrderDetails.belongsTo(Surveys);

MenuItems.sync();
Customers.sync();
Orders.sync();
Surveys.sync();
OrderDetails.sync();
// orm.sync({force:true});

exports.MenuItems = MenuItems;
exports.Customers = Customers;
exports.Orders = Orders;
exports.OrderDetails = OrderDetails;
exports.Surveys = Surveys;
exports.connection = orm;
