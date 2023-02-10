const express = require("express");
const app = express();
const PORT = 5000;
const userData = require("./DATA.json");
//got the fake data from the json folder
const graphql = require("graphql");
//installed graphql and express-graphql, then required it
const { graphqlHTTP } = require("express-graphql");
//required this to create a graphql server


//this is a basic schema we created for the server
const RootQuery = "query";
const Mutation = "mutation";

const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
//this is a basic schema we created for the server

//then as step-2 we create a basic graphql server down here
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    //here we need to create a schema in the third step
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
