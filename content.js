document.addEventListener('paste', function(event) {
  if (!confirm('Do you want to paste the contents of the clipboard?')) {
    event.preventDefault();
  }
});
