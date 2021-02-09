import { GraphQLString, GraphQLNonNull } from 'graphql'
import Auth from './type.js'
import authFetch from './resolver.js'

const UserAuth = {
    type: Auth,
    description: 'Auth',
    args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        key: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: async (parent, args, context, info) => {
        return authFetch(args.name, args.key)
    },
}

export default UserAuth
