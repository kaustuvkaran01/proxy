import { GraphQLString, GraphQLNonNull } from 'graphql'
import fetch from 'node-fetch'
import mark from './type.js'
import fetchIndividualMarks from './resolver.js'
import { getStartEndOfWeek } from '../../utilz.js'
import { GraphQLObjectType } from 'graphql'
import { GraphQLJSON } from 'graphql-type-json'

const Marks = {
    type: mark,
    description: 'Get one mark',
    args: {
        key: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: (parent, args, context, info) => {
        return fetchIndividualMarks(getStartEndOfWeek(), args.key)
    },
}

export default Marks
