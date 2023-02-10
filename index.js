const express = require("express");
const app = express();
const PORT = 5000;
const { graphqlHTTP } = require("express-graphql");

const schema = require("./Schemas/schema");

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
