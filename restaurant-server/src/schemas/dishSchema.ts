import { gql } from "apollo-server-express";

export const dishSchema = gql`
  input dishInput {
    id: Int!
    title: String!
    description: String!
    price: Int!
    category: Categories
    available: Boolean!
    quantity: Int!
  }


  enum Categories{
    INDIAN
    CHINEESE
    CONTINENTAL
  }

  type Dishes {
    id: Int!
    title: String!
    description: String!
    category: Categories
    price: Int!
    available: Boolean!
    quantity: Int!

  }
`;
