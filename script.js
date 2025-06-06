/deixando os blocos interativos/ 
document.querySelectorAll('.bloco').forEach(bloco => {
  bloco.addEventListener('click', () => {
    const link = bloco.getAttribute('data-link');
    if(link){
      window.location.href = link;
    }
  });
});