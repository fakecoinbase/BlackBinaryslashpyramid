const { gql } = require('apollo-server-express');

module.exports = gql`
  type Strategy {
    id: ID!
    title: String!
    description: String
    userId: ID!
    user: User
    createdAt: String
    updatedAt: String
  }

  enum Signal {
    BUY
    SELL
  }

  scalar Period

  type StrategyIndicator {
    id: ID!
    name: String!
    type: Signal!
    params: JSONObject
    chartPeriod: Period!
    required: Boolean!
  }

  extend type Query {
    strategies: [Strategy]
    myStrategies: [Strategy]
    strategy(id: ID!): Strategy
  }

  extend type Mutation {
    createStrategy(title: String!, type: Int!): Strategy!
    deleteStrategy(id: ID!): Strategy
  }
`;