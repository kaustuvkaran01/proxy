import { GraphQLString, GraphQLNonNull } from 'graphql'
import fetchHomeScreen from './resolver.js'
import home from './type.js'

const Home = {
    type: home,
    description: 'data for home screen',
    args: {
        id: { type: GraphQLNonNull(GraphQLString) },
        key: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: (parent, args, context, info) => {
        return fetchHomeScreen(args.id, args.key)
    },
}

export default Home
