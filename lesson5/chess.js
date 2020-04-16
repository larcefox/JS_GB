var cols = [], rows = [], figures = [], playCells = [];
var chessTable = document.createElement('table');
var letterA = 65;
var letterH = 76;


document.querySelector('div').append(chessTable);
chessTable.style.borderCollapse = 'collapse';
chessTable.style.borderSpacing = '0px';
chessTable.style.width = '100%';
chessTable.style.height = '100%';

function drawBoard(cols, rows, playCells) {
    for(let i = 0; i < 12; i++){

        rows[i] = document.createElement('tr');
        rows[i].id = 'r'+ i;
        chessTable.append(rows[i]);

        for(let j = 0; j < 12; j++){

            cols[j] = document.createElement('td');
            rows[i].append(cols[j]);
            cols[j].style.outline = 'black 0px solid';
            cols[j].style.width = '80px';
            cols[j].style.height = '80px';
            cols[j].id = 'r'+i+'c'+j;
            cols[j].style.verticalAlign = 'middle';
            //cols[j].style.outline = '1px solid black';
            cols[j].style.textAlign = 'center';


            if (j == 0){
                cols[j].style.width = '40px';
                cols[j].style.backgroundColor = 'saddlebrown';
                //cols[j].style.transform = 'rotate(180deg)';
                if (i > 1 && i < 10) {
                    cols[j].innerText = 10 - i;
                }
            }

            if (j == 11){
                cols[j].style.width = '40px';
                cols[j].style.backgroundColor = 'saddlebrown';
                cols[j].style.transform = 'rotate(180deg)';
                if (i > 1 && i < 10) {
                    cols[j].innerText = i - 1;
                }
            }

            if (i == 11){
                cols[j].style.height = '40px';
                cols[j].style.backgroundColor = 'saddlebrown';
                //cols[j].style.transform = 'rotate(180deg)';
                if (j > 1 && j < 10) {
                    cols[j].innerHTML = '&#' + (letterA + j - 2) + ';';
                }
            }

            if (i == 0){
                cols[j].style.height = '40px';
                cols[j].style.backgroundColor = 'saddlebrown';
                cols[j].style.transform = 'rotate(180deg)';
                if (j > 1 && j < 10) {
                    cols[j].innerHTML = '&#' + (letterH - j - 2) + ';';
                }
            }

            if (j == 1 || j == 10){
                cols[j].style.width = '10px';
                if (i > 0 && i < 11) {
                    cols[j].style.backgroundColor = 'burlywood';
                }
            }

            if (i == 1 || i == 10){
                cols[j].style.height = '10px';
                if (j > 0 && j < 11) {
                    cols[j].style.backgroundColor = 'burlywood';
                }
            }

            if (i > 1 && i < 10 && j > 1 && j < 10){
                playCells.push(cols[j])
                cols[j].style.fontSize = '70px';
                if (j % 2 && !(i % 2)){
                    cols[j].style.backgroundColor = 'burlywood';
                }
                if (!(j % 2) && i % 2){
                    cols[j].style.backgroundColor = 'burlywood';
                }
                if (j % 2 && i % 2){
                    cols[j].style.backgroundColor = 'saddlebrown';
                }
                if (!(j % 2) && !(i % 2)){
                    cols[j].style.backgroundColor = 'saddlebrown';
                }
            }
        }
    }
}

function placeFigures(figures){
    for (let k = 0; k < 12; k++) {
        figures.push('&#' + (9812 + k) + ';');
    }

    for (let cell of playCells) {
        if (playCells.indexOf(cell) > 7 && playCells.indexOf(cell) < 16 ){
            cell.innerHTML = figures[5];
        }

        if (playCells.indexOf(cell) > 47 && playCells.indexOf(cell) < 56 ){
            cell.innerHTML = figures[11];
        }

        if (playCells.indexOf(cell) == 0 || playCells.indexOf(cell) ==  7){
            cell.innerHTML = figures[2];
        }

        if (playCells.indexOf(cell) == 56 || playCells.indexOf(cell) ==  63){
            cell.innerHTML = figures[9];
        }

        if (playCells.indexOf(cell) == 1 || playCells.indexOf(cell) ==  6){
            cell.innerHTML = figures[4];
        }

        if (playCells.indexOf(cell) == 57 || playCells.indexOf(cell) ==  62) {
            cell.innerHTML = figures[8];
        }

        if (playCells.indexOf(cell) == 2 || playCells.indexOf(cell) ==  5){
            cell.innerHTML = figures[3];
        }

        if (playCells.indexOf(cell) == 58 || playCells.indexOf(cell) ==  61) {
            cell.innerHTML = figures[10];
        }

        if (playCells.indexOf(cell) == 3){
            cell.innerHTML = figures[1];
        }

        if (playCells.indexOf(cell) == 59) {
            cell.innerHTML = figures[7];
        }
        if (playCells.indexOf(cell) == 4){
            cell.innerHTML = figures[0];
        }

        if (playCells.indexOf(cell) == 60) {
            cell.innerHTML = figures[6];
        }
    }

}

drawBoard(cols, rows, playCells);
placeFigures(figures);
//document.getElementById('r2c2').innerHTML = figures[0];