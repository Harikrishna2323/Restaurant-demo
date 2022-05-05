import { gql } from 'apollo-server-express';
import {login} from '../resolvers/LoginResolver';
import {getDishes} from  '../resolvers/dishResolver'

export const commonResolvers = {
    Query: {},
    Mutation: {
        login: login,
        getDishes: getDishes
    }
}

export const responseMetaData = gql`
    schema{
        query: Query
        mutation: Mutation
    }

    type LoginResponse {
        metadata: ResponseMetaData!
        user: User
        token: String
        validity: String
    }

    type GetDishesResponse {
        metadata: ResponseMetaData!
        dishes: Dishes
    }

    type Query{
        query: Boolean
    }

    type Mutation{
        login(email: String!, password: String!): LoginResponse
        getDishes(id: Int!, title: String) : GetDishesResponse
    }

    

`;