import { GraphQLObjectType } from 'graphql'
import { GraphQLJSON } from 'graphql-type-json'

const home = new GraphQLObjectType({
    name: 'home',
    description: 'Get data for home screen',
    fields: () => ({
        schedule: {
            type: GraphQLJSON,
            resolve: (DaySchedule) => {
                return DaySchedule[0]
            },
        },
        homeworks: {
            type: GraphQLJSON,
            resolve: (DaySchedule) => {
                return DaySchedule[1]
            },
        },
    }),
})

export default home
