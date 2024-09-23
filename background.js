// Compatibilidade com Chrome e Firefox
if (typeof browser === 'undefined') {
  var browser = chrome;
}

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'getClipboard') {
    navigator.clipboard.readText().then(function(text) {
      sendResponse({ text: text });
    }).catch(function(err) {
      console.error('Erro ao ler a área de transferência:', err);
      sendResponse({ text: '' });
    });
    return true; // Indica que a resposta será enviada de forma assíncrona
  }
});
