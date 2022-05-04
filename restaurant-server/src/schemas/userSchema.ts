import { gql } from "apollo-server-express";

export const userSchema = gql`
  input UserInput {
    id: Int!
    firstName: String!
    lastName: String!
    email: String
    phone: String
    password: String!
    roleId: Int!
  }

  type UserRole {
    id: Int!
    roleName: String!
  }

  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String
    phone: String
    password: String!
    activeStatus: Int!
    roleId: Int!
    role: UserRole
  }
`;
