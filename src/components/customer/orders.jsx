import React from "react";
import styled from "styled-components";

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
        image_url: "/images/beers/leffe.png",
        quantity: 2
      },
      {
        item: "Rockin' Robin",
        image_url: "/images/cocktails/rockinrobin.png",
        quantity: 1
      },
      {
        item: "BudLite",
        image_url: "/images/beers/budlite.png",
        quantity: 4
      }
    ],
    status: "in progress"
  }
];


//Styled Components
const OrdersContainer = styled.div`
  display: flex; 
  flex-direction: row-reverse; 
  justify-content: space-between; 
  margin-top: 20px; 
`;

const Image = styled.img`
  height: 50px; 
`;

const FlexContainerCentered = styled.div`
  display: flex; 
  align-items: center;
  justify-content: start;
`;

// list of orders component
// NOTE: we'll have to pass down the list of orders from the order component
var OrderList = props => {
  return (
    <div>
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
    <FlexContainerCentered>
      <Image alt="drink" src={props.drink.image_url} />
      <span>{props.drink.item} </span>
      {/* <span>{props.drink.quantity}</span> */}
    </FlexContainerCentered>
  );
};

var Orders = props => {
  return (
    <section>
      <h1>Orders</h1>
      <OrdersContainer>
        <FlexContainerCentered>
          <h4>In Progress</h4>
        </FlexContainerCentered>
        <OrderList status="in progress" orders={props.orders} />
      </OrdersContainer>
      <OrdersContainer>
        <FlexContainerCentered>
          <h4>Pending</h4>
        </FlexContainerCentered>
        <OrderList status="pending" orders={props.orders} />
      </OrdersContainer>
    </section>
  );
};

export default Orders;
