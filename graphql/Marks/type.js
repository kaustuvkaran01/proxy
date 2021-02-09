import { GraphQLObjectType } from 'graphql'
import { GraphQLJSON } from 'graphql-type-json'

const mark = new GraphQLObjectType({
    name: 'mark',
    description: 'Get individuals marks',
    fields: () => ({
        Marks: {
            type: GraphQLJSON,
            resolve: (Marks) => {
                console.log(Marks)
                return Marks
            },
        },
    }),
})

export default mark
