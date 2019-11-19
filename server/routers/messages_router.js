//Bringing in Express
let express = require('express');
//Making a new router: used in place of 'app' on the server
let router = express.Router();

let messages = [];

router.delete( '/:index', ( req, res )=>{
    console.log( 'in /messages delete:', req.params.index );
    res.send( 'squeak' );
}) //end delete

router.get( '/', ( req, res )=>{
    console.log( 'in /messages GET' );
    res.send( messages );
}) // end essages

router.post( '/', ( req, res )=>{
    console.log( 'in /messages POST:', req.body );
    messages.push( req.body );
    console.log( messages );
    res.sendStatus( 200 );
}) // end messages POST

module.exports = router;
