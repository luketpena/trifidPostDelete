$( document ).ready( onReady );

function onReady(){
    $( '#sendMessageButton' ).on( 'click', sendMessage );
    $( '#refreshButton' ).on( 'click', getMessages );
    $( '#messagesOut' ).on( 'click', '.messageLine', deleteMessage );
    getMessages();
}

function deleteMessage(){
    let index = $( this ).data( 'index' );
    console.log( 'in deleteMessage, index:', index );
    // send this ID to DELETE route
    $.ajax({
        type: 'DELETE',
        url: '/messages/' + index
    }).then( function( response ){
        console.log( 'back from DELETE with:', response );
    }).catch( function( err ){
        console.log( err );
        alert( 'no worky' );
    })
}

function getMessages(){
    $.ajax({
        type: 'GET',
        url: '/messages'
    }).then( function( response ){
        console.log( 'back from GET with:', response );
        let el = $( '#messagesOut' );
        el.empty();
        for( let i=0; i<response.length; i++){
            let thingy = response[ i ];
            el.append( `<li class="messageLine" data-index="${i}"><i>${thingy.user}</i>: ${thingy.message}</li>`)
        } // end for
    }).catch( function( err ){
        alert( 'error getting messages. see console for details' );
        console.log( err );
    })
}

function sendMessage(){
    console.log( 'in sendMessage' );
    // get user input & put into an object
    let objectToSend = {
        user: $( '#nameIn' ).val(),
        message: $( '#messageIn' ).val()
    } //end objectToSend
    console.log( 'sending:', objectToSend );
    $.ajax({
        // send object via POST to server
        type: 'POST',
        url: '/messages',
        data: objectToSend
    }).then( function( response ){
        // update DOM with all messages
        console.log( 'back from POST with:', response );
        // updateDOM
        getMessages();
    }).catch( function( err ){
        // hand error
        alert( 'error sending message. see console for details' );
        console.log( err ); 
    }) // end AJAX
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