import { gql } from "apollo-server-express";

export const orderSchema = gql`
  input orderInput {
    id: Int!
    totalPrice: Int!
    orderType: OrderType
    orderStatus: OrderStatus
  }

  enum OrderType{
    CASH
    UPI
  }

  enum OrderStatus{
    PLACED
    PAYED 
    ON_TRANSPORT 
    DELIVERED 
    CANCELLED 

  }

  type Order {
    id: Int!
    totalPrice: Int!
    orderType: OrderType
    orderStatus: OrderStatus
  }
`;
