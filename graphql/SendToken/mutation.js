import { GraphQLNonNull, GraphQLString } from 'graphql'
import DbUser from './type.js'
import addUser from './resolver.js'

const AddUser = {
    type: DbUser,
    description: 'Add a user',
    args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        key: { type: GraphQLNonNull(GraphQLString) },
        token: { type: GraphQLString },
    },
    resolve: (parent, args) => addUser(args.name, args.key, args.token),
}

export default AddUser
