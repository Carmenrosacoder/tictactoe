$(document).ready(function(){
    var c=0;
    var array = [ [ "", "", "" ],
                  [ "", "", "" ],
                  [ "", "", "" ]
                ]
    $(".casilla").click(function(){
        c++;
        var texto = "";
        if(c%2===0) texto = "o"
        else texto = "x"
        $(this).append(texto);
        $(this).off();
        var i = $(this).attr("data-i");
        var j = $(this).attr("data-j");
        array[i][j] = texto;
        for(var i=0;i<3;i++){
            for(var j=0;j<3;i++){
        if((array[i][j]==array[i+1][j] && array[i][j]==array[i+2][j]) || (array[i][j]==array[i][j+1] && array[i][j]==array[i][j+2])){
            alert('ganador');
        }
        else if((array[i][j]==array[i+1][j] && array[i][j]==array[i+2][j]) || (array[i][j]==array[i][j+1] && array[i][j]==array[i][j+2])){
            alert('ganador');
        }
        }}
    });

    console.log(array);

});

/*$(document).ready(function(){
    c=0;
$('.casilla').click(function(){
    c++;
    var x=1;
    var o=0;
    if(c%2===0) {
    $(this).append("x");
    x++;
    if(x===3){
        alert('ganador');
    }
}
    else {
    $(this).append("o");
    o++;

}
    $(this).off();
});
});*/
/*
 var array=[];
$('#fila1 .casilla').each(function(){
     array.push($(this).text());
});
 var array1=[];
$('#fila2 .casilla').each(function(){
     array1.push($(this).text());
 });
 var array2=[];
 $('#fila3 .casilla').each(function(){
     array2.push($(this).text());
 });*/
