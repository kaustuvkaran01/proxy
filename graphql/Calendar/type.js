import { GraphQLObjectType } from 'graphql'
import { GraphQLJSON } from 'graphql-type-json'

const calendar = new GraphQLObjectType({
    name: 'calendar',
    description: 'Get data for calendar screen',
    fields: () => ({
        schedule: {
            type: GraphQLJSON,
            resolve: (Calendar) => {
                return Calendar
            },
        },
    }),
})

export default calendar
