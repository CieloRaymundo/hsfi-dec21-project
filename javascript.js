/*
This function is fired when the webpage is loaded
*/
$(document).ready(function(){
   $('.all-content').hide(); 
});

/*
When someone clicks goals-button we should hide all-content 
and then show only goals-content
*/
$("#goals-button").click(function(){
    $('.all-content').hide();
    $('#goals-content').show();
     $('body').css("background-color","white");
});


/*
When someone clicks the info button we should hide all-content 
and then show only info-content
*/
$("#info-button").click(function(){
    $('.all-content').hide();
    $('#info-content').show();
     $('body').css("background-color","white");
});

$("#past-button").click(function(){
    $('.all-content').hide();
    $('#past-content').show();
     $('body').css("background-color","white");
});


$("#dark-button").click(function(){
    $('.all-content').hide();
    $('#dark-content').show();
    $('body').css("background-color","#404040");
    
});


$("#press-button").click(function(){
    alert("I TOLD YOU NOT TO PRESS IT")
    $('.all-content').hide();
    $('body').css("background-color","white");
});

$("#takeover-button").click(function(){
    $('.all-content').hide();
    $('#takeover-content').show();
     $('body').css("background-color","white");
});


$("#takeover-form-button").click(function() {
    $('#site-title').html("This site now belongs to " +$('#takeover-input').val());
    
});