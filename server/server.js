// requires
const express = require( 'express' );
const app = express();
// uses
app.use( express.static( 'server/public' ) );
// globals
const port = 5000;
// server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) //end server up

// routes
app.get( '/test', ( req, res )=>{
    console.log( '/test GET' );
    res.send( 'ribbet' );
}) //end test GET