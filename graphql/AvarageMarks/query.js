import { GraphQLString, GraphQLNonNull } from 'graphql'
import avarageMarks from './type.js'
import fetchAvarageMarks from './resolver.js'

const AvarageMarks = {
    type: avarageMarks,
    description: 'Get all avarage marks',
    args: {
        id: { type: GraphQLNonNull(GraphQLString) },
        key: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: (parent, args, context, info) => {
        return fetchAvarageMarks(args.id, args.key)
    },
}

export default AvarageMarks
