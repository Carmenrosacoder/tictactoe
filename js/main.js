
$(document).ready(function(){
$(".casilla").click(function(){
    var c=0;
    c++;
    if(c%2===0){
        $(this).append("o");
    }
    else{
        $(this).append("x");}

});
});
