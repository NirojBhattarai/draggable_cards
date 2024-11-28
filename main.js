const cards = document.querySelectorAll('.card');
let isDragging = false;
let draggedCard = null;
let offsetX, offsetY;

cards.forEach(card => {
  card.addEventListener('mousedown', (e) => {
    isDragging = true;
    draggedCard = card;
    offsetX = e.clientX - card.getBoundingClientRect().left;
    offsetY = e.clientY - card.getBoundingClientRect().top;
    card.classList.add('dragging');
  });

  card.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      draggedCard.style.transform = `translate(${x}px, ${y}px)`;
    }
  });

  card.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      draggedCard.classList.remove('dragging');
      draggedCard.style.transform = 'none'; // Reset the position
    }
  });

  card.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      draggedCard.classList.remove('dragging');
      draggedCard.style.transform = 'none'; // Reset the position
    }
  });
});
