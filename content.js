document.addEventListener('paste', function(event) {
  if (!confirm('Você deseja colar o conteúdo da área de transferência?')) {
    event.preventDefault();
  }
});
