const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {

    // Add 'dragstart' and 'dragend' for active card effect
    card.addEventListener('dragstart', () => {
        card.classList.add('active');
    });

    card.addEventListener('dragend', () => {
        card.classList.remove('active');
    });

    // Drag behavior of card
    card.addEventListener('drag', (event) => {
        const { clientY } = event;
        if (clientY) {
            card.style.transform = `translateY(${clientY - 150}px)`;
        }
    });

    // Smooth scrolling effect while dragging
    card.addEventListener('dragover', (event) => {
        event.preventDefault();
        if (index < cards.length - 1) {
            const nextCard = cards[index + 1];
            nextCard.style.transform = `translateY(${event.clientY - 150}px)`;
        }
    });
    
});