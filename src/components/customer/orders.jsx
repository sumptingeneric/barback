import React from "react";

// test data... will delete after figuring out the props passed down.
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
  },
  {
    order_id: 1,
    items: [
      {
        item: "Leffe",
        image_url: "/images/cocktails/leffe.png",
        quantity: 2
      },
      {
        item: "Rockin' Robin",
        image_url: "/images/cocktails/rockinrobin.png",
        quantity: 1
      },
      {
        item: "BudLite",
        image_url: "/images/beers/bluemoon.png",
        quantity: 4
      }
    ],
    status: "in progress"
  }
];

// list of orders component
// NOTE: we'll have to pass down the list of orders from the order component
var OrderList = props => {
  return (
    <div className="order-list">
      {dummyCustomerOrderPayload.map(order => {
        if (order.status === props.status) {
          return order.items.map((drink, index) => {
            return <OrderItem drink={drink} key={index} />;
          });
        }
      })}
    </div>
  );
};

// order item component
var OrderItem = props => {
  return (
    <div className="order-item">
      <span>{props.drink.item}</span>
      <span>{props.drink.quantity}</span>
    </div>
  );
};

var Orders = props => {
  return (
    <div className="orders">
      <h1>Orders</h1>
      <div className="orders-container">
        <h4>In Progress</h4>
        <OrderList status="in progress" orders={props.orders} />
      </div>
      <div className="orders-container">
        <h4>Pending</h4>
        <OrderList status="pending" orders={props.orders} />
      </div>
    </div>
  );
};

export default Orders;
