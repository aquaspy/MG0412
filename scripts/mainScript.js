var selectedSquare;

var solvedgame = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9,
]

var initgame = [
    2, 1, 5,
    4, 3, 6,
    7, 8, 9,
];

var game = initgame;

function loadGame() {
    $("#main-menu").fadeOut(600);
    $("#gameScreen").fadeIn(600);

    draw();

}

function draw() {
    $('#gameArea').empty();

    game.forEach(function (entry) {
        $("#gameArea").append("<div id='squarePos" + entry + "' class='squareNS'></div>");
    });

    for (var i = 0; i < 10; i++) {
        $("#squarePos" + i).css("background", "url('media/" + i + ".jpg')");
    }

    $(".squareNS").click(function () {
        if ($(this)[0].id != "squarePos9") {
            for (var i = 0; i < 10; i++) {
                $("#squarePos" + game[i - 1]).removeClass('squareS').addClass('squareNS');
            }
            selectedSquare = $(this);
            $(this).removeClass('squareNS').addClass('squareS');
        }
    });

    $("#squarePos" + 9).click(function () {
        for (var i = 0; i < 10; i++) {
            $("#squarePos" + game[i - 1]).removeClass('squareS').addClass('squareNS');
        }
        if (selectedSquare != null) {
            var selectedNumber = parseInt(selectedSquare[0].id.replace("squarePos", ""));
            if (selectedNumber == game[game.indexOf(9) + 1]) {


                var gameCopy = game;

                gameCopy[game.indexOf(selectedNumber)] = 9;
                gameCopy[gameCopy.indexOf(9)] = selectedNumber;

                game = gameCopy;

                selectedSquare = null;
            } else if (selectedNumber == game[game.indexOf(9) - 1]) {


                var gameCopy = game;


                gameCopy[gameCopy.indexOf(9)] = selectedNumber;
                gameCopy[game.indexOf(selectedNumber)] = 9;


                game = gameCopy;

                selectedSquare = null;
            } else if (selectedNumber == game[game.indexOf(9) - 3]) {


                var gameCopy = game;


                gameCopy[gameCopy.indexOf(9)] = selectedNumber;
                gameCopy[game.indexOf(selectedNumber)] = 9;


                game = gameCopy;

                selectedSquare = null;
            } else if (selectedNumber == game[game.indexOf(9) + 3]) {


                var gameCopy = game;


                gameCopy[game.indexOf(selectedNumber)] = 9;
                gameCopy[gameCopy.indexOf(9)] = selectedNumber;



                game = gameCopy;

                selectedSquare = null;
            }



        }
        draw();
        checkGameWin();
    });

}

window.onload = function () {
    $("#fadeBlackScreen").fadeOut(3000);
}

function checkGameWin(){
    if(game.toString() == solvedgame.toString()){
        game = initgame;
        callGameWin();
     }
}

function callGameWin(){
  Swal.fire({
    title: 'Parabéns!',
    showCloseButton: true,
    html: '<video src="media/thanosfinal.mp4" autoplay>',
    footer: 'Obrigado por jogar!',
    showCancelButton: false,
    focusConfirm: true,
    allowEscapeKey: true,
    confirmButtonText: 'BOA'
  })
    setInterval(function(){ window.location = ""; }, 12000);
}
