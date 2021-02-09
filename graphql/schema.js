import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import Calendar from './Calendar/query.js'
import Home from './Home/query.js'
import Marks from './Marks/query.js'
import UserInfo from './UserInfo/query.js'
import UserAuth from './UserAuth/query.js'
import AddUser from './SendToken/mutation.js'
import AvarageMarks from './AvarageMarks/query.js'

/*const test = buildSchema(`
   

  type Query.js {
    UserAuth(name: String!, key: String!): Boolean
    UserInfo(name: String!, key: String!): User
    Home(id: Strin!, key: String!): home
    Calendar(date: String!, key: String!): calendar
    Marks
    AvarageMarks
  }
`)*/

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'The root of all',
    fields: () => ({
        UserAuth: UserAuth,
        UserInfo: UserInfo,
        Home: Home,
        Calendar: Calendar,
        Marks: Marks,
        AvarageMarks: AvarageMarks,
    }),
})

const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root mutation',
    fields: () => ({
        AddUser: AddUser,
    }),
})

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType,
})

export default schema
