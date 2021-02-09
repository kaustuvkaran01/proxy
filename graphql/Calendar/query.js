import { GraphQLNonNull, GraphQLString } from 'graphql'
import calendar from './type.js'
import fetchDayCalendar from './resolver.js'

const Calendar = {
    type: calendar,
    description: 'Get week Data',
    args: {
        date: { type: GraphQLNonNull(GraphQLString) },
        key: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: (parent, args, context, info) => {
        console.log(args.date)
        return fetchDayCalendar(args.date, args.key)
    },
}

export default Calendar
