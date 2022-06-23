/*
Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
Доска должна быть верно разлинована на черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
*/
function drawChess(container) {
  let black = true;
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  let writeLetter = true
  for (let i = 1; i < 9; i++) {
    if (writeLetter){
      let lettersContainer = document.createElement('div')
      lettersContainer.classList.add('letters')
      container.append(lettersContainer)
      for (let k = 0; k < 8; ++k){
        const letter = document.createElement('p')
        letter.classList.add('letter')
        letter.innerHTML = letters[k]
        lettersContainer.append(letter)
      }
      writeLetter = false
    }
    const line = document.createElement('div')
    line.classList.add('line')
    container.append(line);
    if (black) {
      const text = document.createElement('p')
      text.innerHTML = String(i)
      line.append(text)
      for (let j = 0; j < 4; j++) {
        const boxBlack = document.createElement('div')
        boxBlack.classList.add('black')
        const boxWhite = document.createElement('div')
        boxWhite.classList.add('white')
        line.append(boxBlack);
        line.append(boxWhite);
      }
    black = false;
    } else {
      const text = document.createElement('p')
      text.innerHTML = String(i)
      line.append(text)
      for (let j = 0; j < 4; j++) {
        const boxBlack = document.createElement('div')
        boxBlack.classList.add('black')
        const boxWhite = document.createElement('div')
        boxWhite.classList.add('white')
        line.append(boxWhite);
        line.append(boxBlack);
      }
      black = true;
    }
  }
}
const container = document.getElementById('desk')
drawChess(container)


