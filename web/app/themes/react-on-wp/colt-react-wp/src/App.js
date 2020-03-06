import React, { Component } from 'react';
import Header from './components/Header';
import Error from './components/Error';
import ReactLoading from 'react-loading';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  // Change this to the URL of your WordPress site.
  uri: "http://localhost:8888/graphql",
});

class App extends Component {

  state = { error: false }

  render() {
    if (this.state.error) {
      return <Error />
    } else if (this.state.test_env === false) {
      return <ReactLoading type={'bars'} color={'#666'} />
    } else {
      return <ApolloProvider client={client}>
              <Header />
            </ApolloProvider>
    }
  }
}

export default App;
