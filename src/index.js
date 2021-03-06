import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";                        // Package containing everything you need to set up Apollo Client
import { ApolloProvider } from 'react-apollo';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Connecting back-end to the front-end using Apollo Client

const client = new ApolloClient({                               // This is where the server is running
    uri: "https://to-do-list-trwxrebimw.now.sh"
});



ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
registerServiceWorker();
