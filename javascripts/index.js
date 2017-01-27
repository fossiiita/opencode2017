/*stick header*/
$(function(){
   var elemTOff = 0;
   var winTOff = 0;
   var totalOff = 0;
   var elemTDist = $("header").position().top;
  
  $(window).scroll(function(){
   
     elemTOff = $("header").offset().top;
     winTOff =  $(window).scrollTop();
     totalOff = elemTOff - winTOff;
     //console.log(totalOff +":"+winTOff)
      
    /*if totaloffset is < 0 , stick it up 
     else if windowoffset is smaller than initial element distance from top remove class sticky*/
    if(totalOff < 0){
        $("header").addClass("sticky")  
    }else if(winTOff < elemTDist ){
       $("header").removeClass("sticky")  
    }
    
   })//on scroll
});