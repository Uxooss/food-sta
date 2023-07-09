// Удалить CSS-класс square-transition
const square = document.querySelector('.offering-icon-box');
square.classList.remove('a-dance');

// Добавить наблюдение за появлением элемента
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('a-dance');
      return;
    }
    square.classList.remove('a-dance');
  });
});
observer.observe(document.querySelector('.offering-list-item'));
