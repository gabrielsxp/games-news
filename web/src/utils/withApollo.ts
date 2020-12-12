import { withApollo } from 'next-apollo'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { Post } from 'generated/graphql'

const apolloClient = new ApolloClient({
  uri: 'https://games-news.herokuapp.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: {
            keyArgs: [],
            merge(existing: Post[] | undefined, incoming: Post[]) {
              return [...(existing ?? []), ...incoming]
            }
          }
        }
      }
    }
  })
})

export default withApollo(apolloClient)
