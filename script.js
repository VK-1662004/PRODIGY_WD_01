$(document).ready(function(){

    // Get the screen width
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// Define a threshold for screen resolution
var resolutionThreshold = 767; // Adjust this value based on your needs

// Check if the screen resolution is greater than the threshold
if (screenWidth <= resolutionThreshold) {
    // Apply styles for high resolution
    $(".header .container ul li").each(function(i){

        $(this).css({"transform": "translateX("+ (i * 30)+"px" +")"})
        
        })
} 


   
});
$(document).on("click", ".menu-btn", function(){

    $(this).toggleClass("active")
    
    $(".Right_box").toggleClass("active")
    $(".header .container").toggleClass("active")
    
    $(".header .container ul li").toggleClass("active")
    
    })