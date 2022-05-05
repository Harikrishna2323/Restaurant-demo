import { gql } from 'apollo-server-express';
import {login} from '../resolvers/LoginResolver'

export const commonResolvers = {
    Query: {},
    Mutation: {
        login: login,
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

    type Query{
        __: Boolean
    }

    type Mutation{
        login(email: String!, password: String!): LoginResponse
    }

`;