import { Component, createResource, For } from "solid-js";
import { createClient } from "urql/core";

import logo from "./logo.svg";
import styles from "./App.module.css";

const client = createClient({
  url: "http://127.0.0.1:4000/graphql",
});

const App: Component = () => {
  const [todos] = createResource<
    | void
    | undefined
    | readonly { id: string; text: string; done: boolean }[]
    | null
  >(() => {
    client
      .query(
        `
      query {
        getTodos {
          id
          done
          text
        }
      }
  `
      )
      .toPromise()
      .then(({ data }) => data.getTodos);
  });

  return (
    <div>
    </div>
  );
};

export default App;
