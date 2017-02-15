$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});

$("#chatwithus").click(function(){
            $('#sidebar').addClass('collapsed');
            $('#sidebar').attr('aria-expanded','false');
});
             
