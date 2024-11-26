//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const player1Input = document.getElementById("player-1");
    const player2Input = document.getElementById("player-2");
    const submitButton = document.getElementById("submit");
    const gameBoard = document.getElementById("game-board");
    const messageDiv = document.querySelector(".message");
    const cells = document.querySelectorAll(".cell");

    let currentPlayer = null;
    let player1 = "";
    let player2 = "";
    let boardState = Array(9).fill(null);

    // Function to check for a win
    const checkWin = () => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (
                boardState[a
