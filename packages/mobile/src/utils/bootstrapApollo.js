import AsyncStorage from '@react-native-community/async-storage';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { persistCache } from 'apollo-cache-persist';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import Config from 'react-native-config';
import { getFromStorage } from 'components/src/utils/_storageHelper';
const bootstrapApollo = async (setClient) => {
    const token = await getFromStorage('token');
    const cache = await new InMemoryCache();
    const link = await createHttpLink({ uri: Config.GRAPHQL_URL });
    const authLink = await setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : null,
            },
        };
    });
    await persistCache({
        cache,
        maxSize: false,
        storage: AsyncStorage,
        trigger: 'write',
        key: 'msq-dev',
    });
    const client = await new ApolloClient({
        link: authLink.concat(link),
        cache,
    });
    await setClient(client);
};
export default bootstrapApollo;
//# sourceMappingURL=bootstrapApollo.js.map