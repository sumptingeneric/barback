let Sequelize = require("sequelize");
require('dotenv').config();

// LOCAL HOST DATABASE
// const orm = new Sequelize("barback", "root", `${process.env.sqlPassword}`, {
//   dialect: "mysql"
// });

// REMOTE CLOUD DATABASE 
const orm = new Sequelize(`${process.env.DATABASE_URL}`);
// const orm = new Sequelize(`${process.env.DATABASE_URL2}`);
// const orm = new Sequelize(`${process.env.DB_MOCK}`);

// REMOTE CLOUD TEST DATABASE
// const orm = new Sequelize(`${process.env.DB_MOCK}`);



orm
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

/***************DB SCHEMA ****************/
let MenuItems = orm.define("MenuItems", {
  name: Sequelize.STRING,
  price: Sequelize.FLOAT,
  category: Sequelize.STRING,
  imageUrl: Sequelize.STRING,
  description: Sequelize.TEXT
});

let Customers = orm.define("Customers", {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
});

let Bartenders = orm.define("Bartenders", {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
})

let Admins = orm.define("Admin", {
  username: Sequelize.STRING,
  password: Sequelize.STRING
})

let Orders = orm.define("Orders", {
  status: Sequelize.STRING,
});

let OrderDetails = orm.define("OrderDetails", {
  quantity: Sequelize.INTEGER,
  subtotal: Sequelize.FLOAT,
  total: Sequelize.FLOAT,
});

let Surveys = orm.define("Survey", {
  name: Sequelize.STRING,
  drinkQuality: Sequelize.INTEGER,
  customerServices: Sequelize.INTEGER
});
Bartenders.hasMany(OrderDetails);
Admins.hasMany(Bartenders);
Customers.hasMany(Orders);
Customers.hasMany(OrderDetails);
Orders.belongsTo(Customers);
OrderDetails.belongsTo(Customers);
OrderDetails.belongsTo(Bartenders);
Orders.belongsToMany(MenuItems, { through: "OrderDetails" });
MenuItems.belongsToMany(Orders, { through: "OrderDetails" });
OrderDetails.belongsTo(Orders);
OrderDetails.belongsTo(MenuItems);
Surveys.belongsTo(Orders);
OrderDetails.sync();
MenuItems.sync();
Customers.sync();
Orders.sync();
OrderDetails.sync();
Surveys.sync();
Bartenders.sync();
Admins.sync();

/****************DB HELPER FUNCTIONS *************/
const doesUsernameExist = (username, role) => {
  // check for username in database
  return getTableFromRole(role).find({ where: { username } })
    .then(data => data ? true : false)
    .catch(err => console.log(err));
};

const getPassword = (username, role) => {
  return getTableFromRole(role).find({ where: { username } })
    .then(({ password }) => { return password })
    .catch(err => console.log(err));
}

const getTableFromRole = (role) => {
  if (role === "Customer") {
    console.log('table is Customers')
    return Customers
  }
  if (role === "Bartender") {
    console.log('table is Bartenders')
    return Bartenders
  }
  if (role === "Admin") {
    console.log('table is Admins')
    return Admins
  }
}

exports.MenuItems = MenuItems;
exports.Customers = Customers;
exports.Bartenders = Bartenders;
exports.Admins = Admins;
exports.Orders = Orders;
exports.OrderDetails = OrderDetails;
exports.Surveys = Surveys;
exports.connection = orm;
exports.Surveys = Surveys;
exports.doesUsernameExist = doesUsernameExist;
exports.getPassword = getPassword;
