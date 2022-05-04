import { dishSchema } from './dishSchema';
import { orderSchema } from './orderSchema';
import { userSchema } from "./userSchema";
import { makeExecutableSchema, mergeSchemas } from "graphql-tools";




const executableSchema = makeExecutableSchema({
  typeDefs: [userSchema, orderSchema, dishSchema],
  resolvers: [],
});

export default mergeSchemas({
  schemas: [executableSchema],
});
