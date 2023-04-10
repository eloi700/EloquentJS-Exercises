const list = document.querySelector('.list');

const textContent = {
  fizz: 'Fizz',
  buzz: 'Buzz',
  fizzBuzz: 'FizzBuzz',
};

function createNumbersToPrint() {
  for (let i = 1; i <= 100; i++) {
    const numOutput = document.createElement('span');
    list.appendChild(numOutput);
    const content = numOutput.innerHTML;
    const parts = content.split(' ');

    if (i % 3 === 0) {
      parts.push(textContent.fizz);
    } else if (i % 3 === 0) {
      parts.push(textContent.buzz);
    } else if (i % 3 === 0 && i % 5 === 0) {
      parts.push(textContent.fizzBuzz);
    } else {
      parts.push(i);
    }
    numOutput.innerHTML = parts.join(' ');
  }
}

createNumbersToPrint();
