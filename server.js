import koa from 'koa';
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import {
    graphqlKoa,
    graphiqlKoa
} from 'apollo-server-koa';

// make a server bruh
const gqlSchema = {};

const app = new koa();
const router = new koaRouter();
const PORT = 3000;

// koaBody is needed just for POST.
app.use(koaBody());

router.post('/graphql', graphqlKoa({schema: gqlSchema}));
router.get('/graphql', graphqlKoa({schema: gqlSchema}));

router.get(
    '/graphiql',
    graphiqlKoa({
        endpointURL: '/graphql',
        // passHeader: '\'Authorization\': \'Bearer lorem ipsum\''
    })
);

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);
