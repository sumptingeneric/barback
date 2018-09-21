if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

//variables
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 7337;

const app = express();
const db = require("../database/database.js");
// Express only serves static assets in production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(__dirname + "/../dist"));
// }
app.use(express.static(__dirname + "/../dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//allow cross origin AJAX  ->
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

//Controllers

//CUSTOMERS COLLECTION
//List all customers (GET)
//return all customers
app.get("/api/customers", (req, res) => {
  db.Customers.findAll().then(function(customers) {
    res.send(customers);
  });
});

//MENU COLLECTION
//List all menu items by categories (GET)
app.get("/api/menu/categories", (req, res) => {
  db.MenuItems.findAll().then(function(menuItems) {
    var catObj = {};
    menuItems.forEach(function(item) {
      var category = item.category;
      if (!catObj[category]) {
        catObj[category] = [item];
      } else {
        catObj[category].push(item);
      }
    });
    // res.header("Access-Control-Allow-Origin", "*");
    res.send(catObj);
  });
});

//ORDERS COLLECTION
//List all orders by customer (GET)
app.get("/api/customers/:customer_id/orders", (req, res) => {
  // console.log(req.params.customer_id);

  let custId = req.params.customer_id;
  db.Orders.findAll({
    include: [{ model: db.MenuItems }],
    where: { CustomerId: custId }
  }).then(data => {
    res.send(data);
  });
});

app.get("/api/orders/:order_status", (req, res) => {
  // console.log('pending order request made it to the server')
  let queryStatus = req.params.order_status;
  db.OrderDetails.findAll({
    include: [
      {
        model: db.Orders,
        where: { status: queryStatus }
      },
      {
        model: db.MenuItems,
        attributes: ["name", "createdAt", "updatedAt", "imageUrl"]
      }
    ]
  }).then(data => {
    // console.log('pending order data from db received', data);
    let orderIdObj = {};

    data.forEach(item => {
      let orderId = item.OrderId;
      if (!orderIdObj[orderId]) {
        orderIdObj[orderId] = [item];
      } else {
        orderIdObj[orderId].push(item);
      }
    });
    res.send(orderIdObj);
  });
});

//TEST QUERY === DELETE
// app.get("/test", (req, res) => {
//   db.OrderDetails.findAll().then(data => {
//     res.send(data);
//   });
// });

//Create new order by customer (POST)
app.post("/api/customers/:customer_id/orders", (req, res) => {
  var ordersBody = {
    status: req.body.status,
    CustomerId: req.params.customer_id
  };

  db.Orders.create(ordersBody)
    .then(function(response) {
      let drinkOrders = req.body.drinkOrder;
      let id = response.dataValues.id;

      drinkOrders.forEach(function(order) {
        let orderDetailsBody = {
          quantity: order.quantity,
          subtotal: order.subtotal,
          OrderId: id,
          MenuItemId: order.menuItemId
        };
        //console.log(orderDetailsBody);
        db.OrderDetails.create(orderDetailsBody);
      });
    })
    .then(function() {
      res.sendStatus(201);
    });
});

//ORDERS STATUS COLLECTION
//Get order status by order id (GET)
app.get("/api/customers/:customer_id/orders/:order_id/status", (req, res) => {
  let custId = req.params.customer_id;
  let orderId = req.params.order_id;
  db.Orders.findAll({ where: { CustomerId: custId, id: orderId } }).then(
    data => {
      res.send(data);
    }
  );
});

//Update order status by order id (PUT)
app.put("/api/customers/:customer_id/orders/:order_id/:status", (req, res) => {
  // console.log("customer id " + req.params.customer_id);
  // console.log("order id " + req.params.order_id);
  // console.log("current ID test  " + req.body.current);
  let status = req.params.status;
  // let currentId = req.body.current;
  let orderId = req.params.order_id;
  if (status === "redo") {
    db.Orders.update(
      {
        status: "pending"
      },
      {
        where: { id: 1 }
      }
    );
  }
  if (status === "complete") {
    db.Orders.update(
      {
        status: "complete"
      },
      {
        where: { id: orderId }
      }
    ).then(() => {
      db.Orders.findAll({
        where: { status: "pending" },
        order: [["createdAt", "ASC"]]
      }).then(entries => {
        if (entries.length === 0) {
          res.sendStatus(204);
        }
        let newCurrentId = entries[0].id;
        db.Orders.update(
          {
            status: "current"
          },
          {
            where: { id: newCurrentId }
          }
        ).then(() => {
          res.sendStatus(204);
        });
      });
    });
  }

  if (status === "current") {
    db.Orders.update(
      {
        status: "pending"
      },
      {
        where: { status: "current" }
      }
    ).then(() => {
      db.Orders.update(
        {
          status: "current"
        },
        {
          where: { id: orderId }
        }
      ).then(() => {
        res.sendStatus(204);
      });
    });
  }
});

// ///// BAR MENU ///// //

//from EditMenu
app.get('/api/bar/menu', (req) => {
  console.log(req.query);
  //send request to database for menu items for the bar
  //res.send(data);
  //catch errors
});

//from AddMenuItem Modal
app.post('/api/bar/menu/add/:item', (req) => {
  console.log('params in server for add: ')
  const itemData = req.params.item;
  console.log(req);
  console.log(itemData.itemName);
});


//from EditMenuItem Modal
app.put('/api/bar/menu/edit', (req) => {
  console.log('params in server for edit: ', req.params);

});
// most ordered menu item
// app.get("/api/stats", (req, res) => {
//   var orderDetails = {};
//   db.Orders.findAll({where: {status: 'complete'}})
//     .then((data) => {
//       var completedOrders = data;
//       var orderIds = [];
//       for (var i = 0; i < completedOrders.length; i++) {
//         orderIds.push(completedOrders[i]['id']);
//       }
//       return orderIds;
//     })
//     .then((ids) => {
//       return db.OrderDetails.findAll({
//         where: {
//           OrderId: ids
//         }
//       })
//     })
//     .then((data) => {
//       var orderDetails = {};

//       res.send(data);
//     })
// })

//Port Listening

app.listen(PORT, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
