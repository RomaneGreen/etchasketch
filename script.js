$(document).ready(function() {


    var   grid = 400;
    var   boxhw = 16;


    for (var i = 0; i < boxhw; i++) {
        for (var x = 0; x < boxhw; x++) {
            var boxes = $('<div class = \'box\'></div>');

            boxes.appendTo('.grid');
        }
    }
    $('.box').hover(function(){
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var color = 'rgb(' + r + ',' + g + ',' + b + ')';
        $(this).css('background-color',color);
    });

});






$('#btn1').click(function(){

    /*a = prompt("Enter a grid size (1-16)");

if (a < 1 || a > 16) {
a = prompt("Please Enter a valid grid size (1-16)");

}
else

var x =  parseInt(a);
boxpx = grid/x;
boxhw = x;
console.log(boxhw);
       $(".box").width(boxpx);
       $(".box").height(boxpx);*/
    a = prompt('Please Enter a valid grid size (1-16)');

    var x =  parseInt(a);
    boxpx = grid/x;
    boxhw = x;
    console.log(boxhw);
    $('.box').width(boxpx);
    $('.box').height(boxpx);

    while (a < 1 || a > 16) {
        a = prompt('Please Enter a valid grid size (1-16)');
        if ( a > 0 && a < 17) {

            x =  parseInt(a);
            boxpx = grid/x;
            boxhw = x;
            console.log(boxhw);
            $('.box').width(boxpx);
            $('.box').height(boxpx);

        }
    }











});

$('#btn2').click(function(){
    b = confirm('Clear Grid?');
    if (b == true) {
        //  $(".box").css("width", '25px');
        //  $(".box").css("height", '25px');
        $('.box').css('background-color', 'white');
    }
});
