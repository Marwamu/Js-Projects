// Selectors
const gameBoard = document.querySelector('#board')
const info = document.querySelector('#info')
let turn;
const winningCombos = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row

    [0, 3, 6], // left col
    [1, 4, 7], // middle col
    [2, 5, 8], // right col

    [0, 4, 8], // diagonal l-to-r
    [2, 4, 6], // diagonal r-to-l
]


const updateTurn = () => {
    turn = turn === 'X' ? 'O' : 'X'
    info.innerHTML = `${turn}'s turn`
    document.documentElement.style.setProperty("--hue", turn === "X" ? 10 : 200);
}

// Craete the gameboard
const createGameBoard = () => {
    const emptyTitles = " ".repeat(9).split("")
    const titleGrid = emptyTitles.map(t =>
        `<button class="title"></button>`).join("")
    gameBoard.innerHTML = titleGrid
    turn = "X";
    info.innerHTML = `${turn}'s turn`

    gameBoard.addEventListener('click', handleGameboardClick)
    gameBoard.addEventListener('mouseenter', handleMouseEnter)
    const allTitles = gameBoard.querySelectorAll(".title");
    allTitles.forEach((t) => {
        t.addEventListener("mouseenter", handleMouseEnter)
        t.addEventListener("mouseleave", handleMouseLeave)
    }
    )
}

const checkScore = (e) => {
    const allTitles = [...document.querySelectorAll(".title")]
    const titleValues = allTitles.map((t) => t.dataset.value)
    const isWinner = winningCombos.some((combo) => {
        const [a, b, c] = combo
        return (
            titleValues[a] &&
            titleValues[a] === titleValues[b] &&
            titleValues[a] === titleValues[c]
        )
    })
    console.log(isWinner);
    if (isWinner) {
        return alert("you won!")
    }
    // winningCombos
    updateTurn()
}

const handleGameboardClick = (e) => {
    const valueExists = e.target.dataset.value;
    if (!valueExists) {
        e.target.dataset.value = turn;
        e.target.style.setProperty("--hue", turn === "X" ? 10 : 200);
        checkScore()
    }
}

const handleMouseEnter = (e) => {
    const valueExists = e.target.dataset.value;
    if (!valueExists) {
        e.target.dataset.hover = turn;
        e.target.style.setProperty("--hue", turn === "X" ? 10 : 200);
    }
}

const handleMouseLeave = (e) => {
    e.target.dataset.hover = "";
}

createGameBoard()
