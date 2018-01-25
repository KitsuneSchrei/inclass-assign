$( document ).ready(function() {
    console.log( "ready!" );
    // If you see ready in the console log of the browser, you have connected the js file correctly.

    // https://www.w3schools.com/jquery/event_click.asp
  
  $('.button').on('click', function(){
    alert("The button has clicked clicked.");
});
});
