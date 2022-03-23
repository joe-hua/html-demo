$(function (){
    var index=0;
    setInterval(function (){
        if(index==$(".box-img").length-1){
            index=0;
        }
        index++;
        $(".box-img").css("opacity",0);
        $(".box-img").eq(index).css("opacity",1);
    },2000)
})