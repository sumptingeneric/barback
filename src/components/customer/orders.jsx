import React from "react";
import styled from "styled-components";

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
    <div className="order-list">
      {props.orders.map(order => {
        if (order.status === props.status) {
          return order.MenuItems.map((drink, index) => {
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
      <Image alt="drink" src={props.drink.imageUrl} />
      <span> {props.drink.name} </span>
      <span> Quantity {props.drink.OrderDetails.quantity}</span>
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
        <OrderList status="in progress" orders={props.currentOrders} />
      </OrdersContainer>
      <OrdersContainer>
        <FlexContainerCentered>
          <h4>Pending</h4>
        </FlexContainerCentered>
        <OrderList status="pending" orders={props.currentOrders} />
      </OrdersContainer>
    </section>
  );
};

export default Orders;
