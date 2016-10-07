import ApolloClient, {
  createNetworkInterface,
  addTypeName,
} from 'apollo-client';
const productionUrl = 'https://meetup-event-planner-api.herokuapp.com/api';

const client = new ApolloClient({
  networkInterface: createNetworkInterface(productionUrl),
  queryTransformer: addTypeName,
});

export default client;
