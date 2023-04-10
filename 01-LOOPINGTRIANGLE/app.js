function createALoop() {
  const contentToLoop = document.querySelector('.content');
  const total = 7;
  for (let x = 0; x < total; x++) {
    const text = document.createElement('p');
    text.classList.add('text');
    let contentText = '#'.repeat(x+1);
    text.textContent = contentText;
    contentToLoop.appendChild(text);
  }
}

createALoop();
