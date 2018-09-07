var mysql = require("mysql");
let Sequelize = require("Sequelize");
let orm = new Sequelize("barback", "root", ""); // may need to replace empty string with 'password'

var connection = mysql.createConnection({
  user: "root",
  password: "", // may need to replace empty string with 'password'
  database: "barback"
});

connection.connect();
//moved module.exports to bottom, everything from ln 1, 5-11 was from solution code

let MenuItems = orm.define("MenuItems", {
  name: Sequelize.STRING,
  price: Sequelize.FLOAT,
  category: Sequelize.STRING,
  updatedAt: Sequelize.DATE,
  createdAt: Sequelize.DATE
});

let Users = orm.define("Users", {
  name: Sequelize.STRING,
  updatedAt: Sequelize.DATE,
  createdAt: Sequelize.DATE
});

let Orders = orm.define("Orders", {
  userId: Sequelize.INTEGER, //FOREIGNKEY from Users
  status: Sequelize.STRING,
  updatedAt: Sequelize.DATE,
  createdAt: Sequelize.DATE
});

let OrderDetails = orm.define("OrderDetails", {
  orderId: Sequelize.INTEGER, //FOREIGNKEY from Orders
  menuId: Sequelize.INTEGER, //FOREIGNKEY from MenuItems
  quantity: Sequelize.INTEGER,
  subtotal: Sequelize.FLOAT,
  updatedAt: Sequelize.DATE,
  createdAt: Sequelize.DATE
});

Users.hasMany(Orders);
Orders.belongsTo(Users);
Orders.belongsToMany(MenuItems, { through: "OrderDetails" });
MenuItems.belongsToMany(Orders, { through: "OrderDetails" });

MenuItems.sync();
Users.sync();
Orders.sync();
OrderDetails.sync();

exports.MenuItems = MenuItems;
exports.Users = Users;
exports.Orders = Orders;
exports.OrderDetails = OrderDetails;

exports.connection = connection; // not sure where this is used
