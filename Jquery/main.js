/*
$(document).ready(function(){
    $("button").click(function(){
        $("#test").hide();
    });
});*/
$(function (){
    $("div:first").addClass("c");
    $("p:even").css("background-color","#ff2222")
    $("p:odd").css("background-color","#2222ff")
});
$("#enlarge").click(function (){
    /*var fontSize=$("div:first").css("font-size");*/
    $("div:first").css("font-size",parseInt($("div:first").css("font-size"))+5+"px");
});
$("#narrow").click(function (){
    /*var fontSize=$("div:first").css("font-size");*/
    $("div:first").css("font-size",parseInt($("div:first").css("font-size"))-5+"px");
});
$("#show").click(function (){
    /*$("div:first").show();*/
    $("div:first").fadeIn("normal");
});
$("#hide").click(function (){
    /*$("div:first").hide();*/
    $("div:first").fadeOut("3000");
});