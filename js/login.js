$(document).ready(function(){
	$("#submit").click(function (event) {
    event.preventDefault();
});

$("#submit").click(function(){
  	if($("#pass").val()=="hello"){
  		$("#alert").css("display","none");
  		 $("#succes").show();
  	}
  	else{
  		$("#succes").css("display","none");
  	 $("#alert").show();
  	}
  
});
})