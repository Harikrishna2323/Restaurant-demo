import { dishSchema } from './dishSchema';
import { orderSchema } from './orderSchema';
import { userSchema } from "./userSchema";
import { gql } from "apollo-server-express";
import { makeExecutableSchema, mergeSchemas } from "graphql-tools";
import { commonResolvers, responseMetaData } from './commonSchema';

export const customTypeDefs = gql`
  scalar DateTime

  type ResponseMetaData {
    success: Boolean!
    message: String!
  }
`;


const executableSchema = makeExecutableSchema({
  typeDefs: [customTypeDefs,responseMetaData, userSchema, orderSchema, dishSchema],
  resolvers: [commonResolvers ],
});

export default mergeSchemas({
  schemas: [executableSchema],
});
