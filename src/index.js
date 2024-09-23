function pasteGuardHandler(event) {
  if (!confirm('Você deseja colar o conteúdo da área de transferência?')) {
    event.preventDefault();
  }
}

function updateEventListener(allowedSites) {
  const currentHost = window.location.hostname;

  if (!allowedSites.includes(currentHost)) {
    if (!window.pasteGuardListenerAdded) {
      document.addEventListener('paste', pasteGuardHandler);
      window.pasteGuardListenerAdded = true;
    }
  } else {
    if (window.pasteGuardListenerAdded) {
      document.removeEventListener('paste', pasteGuardHandler);
      window.pasteGuardListenerAdded = false;
    }
  }
}

chrome.storage.sync.get(['allowedSites'], function(result) {
  const allowedSites = result.allowedSites || [];
  updateEventListener(allowedSites);
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  if (namespace === 'sync' && changes.allowedSites) {
    const allowedSites = changes.allowedSites.newValue || [];
    updateEventListener(allowedSites);
  }
});
