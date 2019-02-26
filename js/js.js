$(window).resize(function(){
 if($(window).width()<1000){
  $('#1').removeClass('position-relative');
  $('#2').removeClass('position-absolute');
 }else{
	$('#1').addClass('position-relative');
    $('#2').addClass('position-absolute');
 }
});

$(document).ready(function(){
  $("#responder").click(function(){
    $("#comentarios").toggle();
  });
});