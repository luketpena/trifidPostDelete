// requires
const express = require( 'express' );
const app = express();
// NEEDED FOR A POST (req.body)
const bodyParser = require( 'body-parser' );
// uses
app.use( express.static( 'server/public' ) );
// also needed for POST
app.use( bodyParser.urlencoded( { extended: true } ) );
// globals
const port = process.env.PORT || 5000;

// server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) //end server up

//Set up routers: requests for /messages get sent to messages_router
const messagesRouter = require('./routers/messages_router');
app.use('/messages',messagesRouter);

const testRouter = require('./routers/test_router');
app.use('/test',testRouter);
