window.onload = function() {
    const tooltipButton = document.querySelector('.tooltip-button');
    const tooltipText = document.getElementById('tooltip-text');
  
    tooltipButton.addEventListener('mouseover', () => {
      tooltipText.style.display = 'block';
    });
  
    tooltipButton.addEventListener('mouseleave', () => {
      tooltipText.style.display = 'none';
    });
  };
  