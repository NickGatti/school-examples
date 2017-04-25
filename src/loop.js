let flag = true;
let chessBoard = '';

for (let z = 0; z < 8; z++){
    for (let i = 0; i < 8; i++){
        if (flag) {
            if (i % 2 === 0){
                chessBoard = chessBoard + ' ';
            } else {
                chessBoard = chessBoard + 'X';
            }
        } else {
            if (i % 2 === 0){
                chessBoard = chessBoard + 'X';
            } else {
                chessBoard = chessBoard + ' ';
            }
        }
        if (flag && i === 7) {
            flag = false;
        } else if (flag == false && i === 7) {
            flag = true;
        }
    }
// console.log(chessBoard);
chessBoard = '';
}