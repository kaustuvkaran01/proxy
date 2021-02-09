import { GraphQLObjectType, GraphQLString } from 'graphql'

const User = new GraphQLObjectType({
    name: 'User',
    description: 'Info about user',
    fields: () => ({
        Name: {
            type: GraphQLString,
            resolve: (UserInfo) => UserInfo.Data.JMENO,
        },
        ClassName: {
            type: GraphQLString,
            resolve: (UserInfo) => UserInfo.Data.TRIDA_NAZEV,
        },
        PersonId: {
            type: GraphQLString,
            resolve: (UserInfo) => UserInfo.Data.OSOBA_ID,
        },
    }),
})

export default User
