$( document ).ready( onReady );

function onReady(){
    console.log( 'JQ' );
    testGet();
}

function testGet(){
    // use AJAX to make a GET call to /test
    $.ajax({
        type: 'GET',
        url: '/test'
    }).then( function( response ){
        // put response on DOM
        console.log( 'Back from GET with:', response );
        $( '#testOut' ).text( response );
    }).catch( function( err ){
        // handle any errors
        alert( 'error getting test. see console for details' );
        console.log( err );
    })
} // end testGet

function testPost(){
    // assemble objectToSend
    let objectToSend = {
        test: 'this is a test'
    } // end objectToSend
    // AJAX POST to our server
    $.ajax({
        type: 'POST',
        url: '/test',
        data: objectToSend
    }).then( function( response ){
        console.log( 'back from POST with:', response );
    }).catch( function( err ){
        alert( 'error with post. check console for details' );
        console.log( err );
    }) //end AJAX
} // end testPost