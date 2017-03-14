$(function(){
    var $imgpar=$("#main").find(".imghoveropen").find("img").parent();
    var $imghover=$(".imghover");
    
   
    $imgpar.hover(function(){
       $(this).append($imghover);
        $(this).find(".imghover").fadeIn(400);
        
      
    },function(){
       $(this).find(".imghover").remove();
    })
})