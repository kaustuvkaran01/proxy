import express, { json } from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './graphql/schema.js'

const app = express()
app.use(json())

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
)

app.listen(3000, () => {
    console.log('started')
})
