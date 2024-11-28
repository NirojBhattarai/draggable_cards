const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {

    // Add 'dragstart' and 'dragend' for active card effect
    card.addEventListener('dragstart', () => {
        card.classList.add('active');
    });

    card.addEventListener('dragend', () => {
        card.classList.remove('active');
    });
    
});