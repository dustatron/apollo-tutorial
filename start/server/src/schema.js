const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
    me: User
  }

  type Mutation {
    bookTrips(launchId: [ID!]): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): String # login token
  }

  """
  Mutation response
  """
  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }

  type Launch {
    id: ID!
    site: String
    mission: mission
    rocket: rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String!
    trips: [Launch]!
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }
`;

module.exports = typeDefs;
