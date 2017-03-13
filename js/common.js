$(function(){
 
 $(".op").click(function(){
	 
	 $(".mask").show();
	 $(".mask").height($(document).height());
	 $(".window").slideDown();	 
 })	
 
 $(".close").click(function(){
	 
	 $(".mask").fadeOut();
	 $(".window").slideUp();	 
 })	
 
 $(".submit").click(function(){
	 
	 $(".sure").show(); 
 })
 
 $(".sure").click(function(){
	 
	 $(".sure").hide();
	 $(".window").slideUp()
	 $(".mask").fadeOut()
 })
 
})
//弹出窗口