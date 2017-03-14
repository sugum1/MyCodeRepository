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
 
});
//弹出窗口

function unable(){
	alert("该页面暂时未投入使用")
};

//未投入使用的页面