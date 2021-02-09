import { GraphQLObjectType } from 'graphql'
import { GraphQLJSON } from 'graphql-type-json'

const DbUser = new GraphQLObjectType({
    name: 'DbUser',
    description: 'User',
    fields: () => ({
        Result: {
            type: GraphQLJSON,
            resolve: (addUser) => {
                return addUser
            },
        },
    }),
})

export default DbUser
