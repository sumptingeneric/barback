import React from "react";
import styled from "styled-components";

const OrdersContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;
`;
const Title = styled.h1`
  margin-top: 20px;
`;

const Image = styled.img`
  height: 50px;
  margin: 0px;
`;

const FlexContainerCentered = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

// Order section component (render orders by status.. see order component)
// if no orders with the status in question return null
var OrderSection = props => {
  return props.orders.length !== 0 ? (
    <OrdersContainer>
      <FlexContainerCentered>
        <h4>{props.header}</h4>
      </FlexContainerCentered>
      <OrderList orders={props.orders} />
    </OrdersContainer>
  ) : null;
};

// list of orders component (render the list of orders for each section)
var OrderList = props => {
  return (
    <div className="order-list">
      {props.orders.map(order => {
        return order.MenuItems.map(drink => {
          return <OrderItem drink={drink} key={order.id + "_" + drink.id} />;
        });
      })}
    </div>
  );
};

// order item component (render each item)
var OrderItem = props => {
  return (
    <FlexContainerCentered>
      {/* <span> */}
      <Image alt="drink" src={props.drink.imageUrl} />
      {" " + props.drink.name + " - QTY: " + props.drink.OrderDetails.quantity}
      {/* </span> */}
    </FlexContainerCentered>
  );
};

// Orders Component
var Orders = props => {
  return (
    <div>
      <Title>Orders</Title>
      <OrderSection
        header={"In Progress"}
        orders={props.currentOrders.filter(drink => drink.status === "current")}
      />
      <OrderSection
        header={"Pending"}
        orders={props.currentOrders.filter(drink => drink.status === "pending")}
      />
    </div>
  );
};

export default Orders;
