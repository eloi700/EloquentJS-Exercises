const chessRow = document.querySelector('.chess_row');
const totalChars = 64;
let result = '';

for (let i = 1; i <= totalChars; i++) {
  // Use ternary operator to determine the character based on the effective index
  const char = (i + Math.floor((i - 1) / 8)) % 2 === 0 ? '#' : ' ';

  result += char;

  if (i % 8 === 0) {
    result += '\n';
  }
}

chessRow.textContent = result;
