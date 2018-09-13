if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

//variables
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 7337;

const app = express();
const db = require("../database/database.js");
// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/../dist"));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//allow cross origin AJAX  ->
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
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
  // let dummyCustomerPayload = [
  //   {
  //     customer_id: 1,
  //     item: "Hailey Foster"
  //   },
  //   {
  //     customer_id: 2,
  //     item: "Robin Kim"
  //   }
  // ];
  // res.send("dummyCustomerPayload");
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
    // attributes: ["id", "CustomerId"],  <- this is how to filter fields you want;
    where: { CustomerId: custId }
  }).then(data => {
    res.send(data);
  });
  // let dummyCustomerOrderPayload = [
  //   {
  //     order_id: 1,
  //     items: [
  //       {
  //         item: "Hailey's Commit",
  //         image_url: "/images/cocktails/haileyscommit.png",
  //         quantity: 2
  //       },
  //       {
  //         item: "Rockin' Robin",
  //         image_url: "/images/cocktails/rockinrobin.png",
  //         quantity: 1
  //       },
  //       {
  //         item: "Bluemoon",
  //         image_url: "/images/beers/bluemoon.png",
  //         quantity: 2
  //       }
  //     ],
  //     status: "pending"
  //   }
  // ];
});

app.get("/api/orders/:order_status", (req, res) => {
  let queryStatus = req.params.order_status;
  db.OrderDetails.findAll({
    include: [
      {
        model: db.Orders,
        where: { status: queryStatus }
      }
    ]
  }).then(data => {
    res.send(data);
  });
});

//TEST QUERY === DELETE
// app.get("/test", (req, res) => {
//   db.OrderDetails.findAll().then(data => {
//     res.send(data);
//   });
// });
//TODO
//Create new order by customer (POST)
app.post("/api/customers/:customer_id/orders", (req, res) => {
  var ordersBody = {
    status: req.body.status,
    CustomerId: req.params.customer_id
  };

  db.Orders.create(ordersBody).then(function() {
    res.sendStatus(201);
  });
  // db.Orders.create(ordersBody).complete(function(err, res) {
  //   res.sendStatus(201);
  // });

  // let dummyNewOrder = {
  //   order_id: 2,
  //   items: [
  //     {
  //       item: "Hailey's Commit",
  //       image_url: "/images/cocktails/haileyscommit.png",
  //       quantity: 2
  //     },
  //     {
  //       item: "Rockin' Robin",
  //       image_url: "/images/cocktails/rockinrobin.png",
  //       quantity: 4
  //     }
  //   ],
  //   status: "pending",
  //   created_at: "2018-09-06T08:40:51.620Z"
  // };
  // res.send(dummyNewOrder);
});

//ORDERS STATUS COLLECTION

// TEST QUERY
app.get("/test", (req, res) => {
  db.OrderDetails.findAll().then(data => {
    res.send(data);
  });
});

//Business -> Get all orders by status (pulled from URL)
app.get("/api/orders/:order_status", (req, res) => {
  let queryStatus = req.params.order_status;
  db.OrderDetails.findAll({
    include: [
      {
        model: db.Orders,
        where: { status: queryStatus }
      }
    ]
  }).then(data => {
    res.send(data);
  });
});

//Get order status by order id (GET)
app.get("/api/customers/:customer_id/orders/:order_id/status", (req, res) => {
  let custId = req.params.customer_id;
  let orderId = req.params.order_id;
  db.Orders.findAll({ where: { CustomerId: custId, id: orderId } }).then(
    data => {
      res.send(data);
    }
  );
  // let dummyOrderStatus = {
  //   order_id: 1,
  //   status: "in queue",
  //   updated_at: "2018-09-06T08:40:51.620Z"
  // };

  // res.send(dummyOrderStatus);
});

//TODO
//Update order status by order id (PUT)
app.put("/api/customers/:customer_id/orders/:order_id/status", (req, res) => {
  console.log(req.body);

  res.sendStatus(204);
});

//Port Listening

app.listen(PORT, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
