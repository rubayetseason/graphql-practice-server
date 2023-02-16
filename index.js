const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
const { graphqlHTTP } = require("express-graphql");
app.use(cors());

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
