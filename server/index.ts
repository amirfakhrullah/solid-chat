import { createServer } from "@graphql-yoga/node";

let todos = [
  {
    id: "1",
    text: "Hello world",
    done: false,
  },
];

const typeDefs = `
    type Todo {
        id: ID!
        done: Boolean!
        text: String!
    }
    type Query {
        getTodos: [Todo]!
    }
`;

const resolvers = {
  Query: {
    getTodos: () => {
      return todos;
    },
  },
};

// Create your server
const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
});
// start the server and explore http://localhost:4000/graphql
server.start();
