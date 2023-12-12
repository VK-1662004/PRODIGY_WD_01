$(document).ready(function(){
    $(".header .container ul li").each(function(i){

        $(this).css({"transform": "translateX("+ (i * 30)+"px" +")"})
        
        })
});
$(document).on("click", ".menu-btn", function(){

    $(this).toggleClass("active")
    
    $(".Right_box").toggleClass("active")
    $(".header .container").toggleClass("active")
    
    $(".header .container ul li").toggleClass("active")
    
    })