// Compatibilidade com Chrome e Firefox
if (typeof browser === 'undefined') {
  var browser = chrome;
}

document.addEventListener('paste', function(event) {
  event.stopPropagation();
  event.preventDefault();

  if (confirm('Você deseja colar o conteúdo da área de transferência?')) {
    // Envia uma mensagem ao script de fundo para obter o texto da área de transferência
    browser.runtime.sendMessage({ action: 'getClipboard' }, function(response) {
      let pastedText = response.text;

      if (pastedText !== undefined) {
        // Insere o texto no elemento ativo
        let activeElement = document.activeElement;
        if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable)) {
          // Para campos de texto
          if (activeElement.selectionStart || activeElement.selectionStart === 0) {
            let startPos = activeElement.selectionStart;
            let endPos = activeElement.selectionEnd;
            let value = activeElement.value;
            activeElement.value = value.substring(0, startPos) + pastedText + value.substring(endPos);
            activeElement.selectionStart = activeElement.selectionEnd = startPos + pastedText.length;
          } else if (activeElement.isContentEditable) {
            // Para elementos contentEditable
            document.execCommand('insertText', false, pastedText);
          }
        }
      } else {
        alert('Não foi possível acessar a área de transferência.');
      }
    });
  } else {
    alert('Ação de colar cancelada.');
  }
});
