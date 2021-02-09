import { GraphQLObjectType, GraphQLBoolean } from 'graphql'

const Auth = new GraphQLObjectType({
    name: 'Auth',
    description: 'Authorization of user',
    fields: () => ({
        AuthStatus: {
            type: GraphQLBoolean,
            resolve: (UserAuth) => {
                return UserAuth.Data
            },
        },
    }),
})

export default Auth
