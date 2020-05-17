import React, { Component } from "react";
import "./styles/App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Posts from "./components/Posts";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Posts apollo_client={client} />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;