import { gql } from "apollo-server-express";

export const dishSchema = gql`
  input dishInput {
    id: Int!
    title: String!
    description: String!
    price: Int!
    available: Boolean!
    quantity: Int!
  }

  type Images {
    id: Int!
    imagePath: String!

  }
  enum Categories{
    INDIAN
    CHINEESE
    CONTINENTAL
  }

  type Dish {
    id: Int!
    title: String!
    description: String!
    category: Categories
    price: Int!
    available: Boolean!
    quantity: Int!
  }
`;