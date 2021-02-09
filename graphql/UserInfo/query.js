import User from './type.js'
import fetchUser from './resolver.js'
import { GraphQLString, GraphQLNonNull } from 'graphql'

const UserInfo = {
    type: User,
    description: 'User basic info',
    args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        key: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: async (parent, args, context, info) => {
        return fetchUser(args.name, args.key)
    },
}

export default UserInfo
