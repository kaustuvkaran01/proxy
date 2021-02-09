import { GraphQLObjectType } from 'graphql'
import { GraphQLJSON } from 'graphql-type-json'

const avarageMarks = new GraphQLObjectType({
    name: 'avarageMarks',
    description: 'Avarage Marks',
    fields: () => ({
        AvarageMarks: {
            type: GraphQLJSON,
            resolve: (AvarageMarks) => {
                return AvarageMarks
            },
        },
    }),
})

export default avarageMarks
