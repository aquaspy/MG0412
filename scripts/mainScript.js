window.onload = function () {
    $("#fadeBlackScreen").fadeOut(3000);
}

var game = [
    1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 11, 12,
    13, 14, 15, 16
]

function loadGame() {
    $("#main-menu").fadeOut(600);
    $("#gameScreen").fadeIn(600);


    for(var i = 0; i<16; i++){
    $("#squarePos" + game[i - 1]).css("background", "url('media/" + i + ".png')");
    }
}
