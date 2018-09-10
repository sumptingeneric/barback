if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

//variables
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 7337;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Controllers

//CUSTOMERS COLLECTION
//List all customers (GET)
app.get("/customers", (req, res) => {
  let dummyCustomerPayload = [
    {
      customer_id: 1,
      item: "Hailey Foster"
    },
    {
      customer_id: 2,
      item: "Robin Kim"
    }
  ];

  res.send(dummyCustomerPayload);
});

//MENU COLLECTION
//List all menu items by categories (GET)
app.get("/menu/categories", (req, res) => {
  let dummyMenuPayload = {
    cocktails: [
      {
        item_id: 1,
        item: "Hailey's Commit",
        price: 9.5,
        image_url: "/images/cocktails/haileyscommit.png",
        created_at: "2018-09-06T08:40:51.620Z",
        updated_at: "2018-09-06T08:40:51.620Z"
      },
      {
        item_id: 4,
        item: "Rockin' Robin",
        price: 11.25,
        image_url: "/images/cocktails/rockinrobin.png",
        created_at: "2018-09-06T08:40:51.620Z",
        updated_at: "2018-09-06T08:40:51.620Z"
      }
    ],
    beers: [
      {
        item_id: 2,
        item: "Budlite",
        price: 2.5,
        image_url: "/images/beers/budlite.png",
        created_at: "2018-09-06T08:40:51.620Z",
        updated_at: "2018-09-06T08:40:51.620Z"
      },
      {
        item_id: 6,
        item: "Leffe",
        price: 15.25,
        image_url: "/images/beers/leffe.png",
        created_at: "2018-09-06T08:40:51.620Z",
        updated_at: "2018-09-06T08:40:51.620Z"
      }
    ]
  };

  res.send(dummyMenuPayload);
});

//ORDERS COLLECTION
//List all orders by customer (GET)
app.get("/customers/:customer_id/orders", (req, res) => {
  let dummyCustomerOrderPayload = [
    {
      order_id: 1,
      items: [
        {
          item: "Hailey's Commit",
          image_url: "/images/cocktails/haileyscommit.png",
          quantity: 2
        },
        {
          item: "Rockin' Robin",
          image_url: "/images/cocktails/rockinrobin.png",
          quantity: 1
        },
        {
          item: "Bluemoon",
          image_url: "/images/beers/bluemoon.png",
          quantity: 2
        }
      ],
      status: "pending"
    }
  ];

  res.send(dummyCustomerOrderPayload);
});

//Create new order by customer (POST)
app.post("/customers/:customer_id/orders", (req, res) => {
  // console.log(req.body.customer_id);
  // console.log(req.body.items);

  let dummyNewOrder = {
    order_id: 2,
    items: [
      {
        item: "Hailey's Commit",
        image_url: "/images/cocktails/haileyscommit.png",
        quantity: 2
      },
      {
        item: "Rockin' Robin",
        image_url: "/images/cocktails/rockinrobin.png",
        quantity: 4
      }
    ],
    status: "pending",
    created_at: "2018-09-06T08:40:51.620Z"
  };

  res.send(dummyNewOrder);
});

//ORDERS STATUS COLLECTION
//Get order status by order id (GET)
app.get("/customers/:customer_id/orders/:order_id/status", (req, res) => {
  let dummyOrderStatus = {
    order_id: 1,
    status: "in queue",
    updated_at: "2018-09-06T08:40:51.620Z"
  };

  res.send(dummyOrderStatus);
});

//Update order status by order id (PUT)
app.put("/customers/:customer_id/orders/:order_id/status", (req, res) => {
  console.log(req.body);

  res.sendStatus(204);
});

//Port Listening

app.listen(PORT, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
