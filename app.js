const board = document.querySelector('#board')
const colors = ['#854442 ', '#0057e7', '#fed766', '#ffa700', '#f4f4f8','#011f4b','#651e3e','#f6cd61','#7bc043','#e0a899']
const SQUARES_NUMBER = 63

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', () =>
		setColor(square))

	square.addEventListener('mouseleave', () =>
		removeColor(square))


	board.append(square)

}

function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = "#5c80ba"
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}