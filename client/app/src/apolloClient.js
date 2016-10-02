import ApolloClient, {
  createNetworkInterface,
  addTypeName,
} from 'apollo-client';
const isProduction = process.env.NODE_ENV !== 'development';
const productionUrl = 'https://meetup-event-planner-api.herokuapp.com/api';
const testUrl = 'http://localhost:3000/api';

const url = isProduction ? productionUrl : testUrl;

const client = new ApolloClient({
  networkInterface: createNetworkInterface(url),
  queryTransformer: addTypeName,
});

export default client;
