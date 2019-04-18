import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Products from './Products'

let basePath = '';
if (window.storefrontApiBaseUrl) {
    basePath = window.storefrontApiBaseUrl;
} else if (process.env.REACT_APP_STAGE === 'dev') {
    basePath = 'https://bigcommerce.support'
}

const client = new ApolloClient({
  uri: `${basePath}/graphql`
});

const App = () => (
  <ApolloProvider client={client}>
    <nav className="navbar">
      <a className="navbar-brand" href="">
        Demo React Storefront
      </a>
    </nav>
    <div className="container">
      <Products />
    </div>
  </ApolloProvider>
);

export default App
