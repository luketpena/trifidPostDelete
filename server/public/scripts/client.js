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