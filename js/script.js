jQuery(document).ready(function () {
    let allCells = new Array(); // все клетки
    let arrayOfX = new Array();  // клетки Х
    let arrayOfO = new Array(); // клетки O
    let currentSymbol = true; // true - X, false - O
    jQuery(".cell").on("click", function () {
        let cell_text = jQuery(this).text();
        if (cell_text != "")
            alert("Ячейка занята");
        else {
            if (currentSymbol) {
                jQuery(this).text("x");
                currentSymbol = false;
            } else {
                jQuery(this).text("o");
                currentSymbol = true;
            }
            let id_cell = jQuery(this).attr('id');
            id_cell = parseInt(id_cell);
            allCells.push(id_cell);
            cell_text = jQuery(this).text();
            if (cell_text == "x") {
                arrayOfX.push(id_cell);
            } else {
                arrayOfO.push(id_cell);
            }
        }
        checkWinner();

        function checkWinner() {
            const sit1 = [1, 2, 3];
            const sit2 = [4, 5, 6];
            const sit3 = [7, 8, 9];
            const sit4 = [1, 4, 7];
            const sit5 = [2, 5, 8];
            const sit6 = [3, 6, 9];
            const sit7 = [1, 5, 9];
            const sit8 = [3, 5, 7];
            checkSit(sit1);
            checkSit(sit2);
            checkSit(sit3);
            checkSit(sit4);
            checkSit(sit5);
            checkSit(sit6);
            checkSit(sit7);
            checkSit(sit8);
        }

        function checkSit(sit) {
            let resultX = 0;
            let resultO = 0;
            if (arrayOfX.length >= 3) {
                for (let i = 0; i < 9; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (arrayOfX[i] === sit[j]) {
                            ++resultX;
                        }
                        if (arrayOfO[i] === sit[j]) {
                            ++resultO;
                        }
                    }
                }
            }
            if (resultX === 3) {
                setTimeout(() => alert("Победил игрок 1"), 0);
                let currentScore = jQuery(".num_c").text();
                currentScore = parseInt(currentScore);
                currentScore = String(++currentScore);
                jQuery(".num_c").text(currentScore);
                newGame();
            }
            if (resultO === 3) {
                setTimeout(() => alert("Победил игрок 2"), 0);
                let currentScore = jQuery(".num_u").text();
                currentScore = parseInt(currentScore);
                currentScore = String(++currentScore);
                jQuery(".num_u").text(currentScore);
                newGame();
            }
            if (allCells.length === 9) {
                alert("Ничья");
                newGame();
            }
        }

        function newGame() {
            let currentRound = jQuery(".round").text();
            currentRound = parseInt(currentRound);
            jQuery(".round").text(String(++currentRound));
            jQuery(".cell").text("");
            arrayOfO = [];
            arrayOfX = [];
            allCells = [];
            currentSymbol = true;
        }
    });
});
