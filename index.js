const express = require("express");
const app = express();
const PORT = 5000;
const userData = require("./DATA.json");
const {
  graphql,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: {
        id: {
          type: GraphQLInt,
        },
      },
    },
  },
});
const Mutation = "mutation";

const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
