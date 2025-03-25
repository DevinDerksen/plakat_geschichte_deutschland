let lastClickedButton = null;

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation();
        
        document.querySelectorAll('.tooltip').forEach(tooltip => {
            tooltip.style.display = 'none';
        });
        let tooltip = this.querySelector('.tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = this.getAttribute('data-city');
            this.appendChild(tooltip);
        }
        tooltip.style.display = 'block';

        if (lastClickedButton === this) {
            const cityName = this.getAttribute('data-city').toLowerCase().replace(/ /g, '_');
            window.open(`${cityName}.html`, '_blank');
            lastClickedButton = null;
        } else {
            lastClickedButton = this;
        }
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.classList.contains('button')) {
        document.querySelectorAll('.tooltip').forEach(tooltip => {
            tooltip.style.display = 'none';
        });
        lastClickedButton = null;
    }
});
