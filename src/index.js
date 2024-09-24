// Detecta se o objeto 'browser' ou 'chrome' está disponível
const browserAPI = window.browser || chrome;

function pasteGuardHandler(event) {
  if (!confirm("Você deseja colar o conteúdo da área de transferência?")) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
}

function updateEventListener(allowedSites) {
  const currentHost = window.location.hostname;

  if (!allowedSites.includes(currentHost)) {
    if (!window.pasteGuardListenerAdded) {
      document.addEventListener("paste", pasteGuardHandler, true);
      window.pasteGuardListenerAdded = true;
    }
  } else if (window.pasteGuardListenerAdded) {
    document.removeEventListener("paste", pasteGuardHandler, true);
    window.pasteGuardListenerAdded = false;
  }
}

browserAPI.storage.sync.get(["allowedSites"], function (result) {
  const allowedSites = result.allowedSites || [];
  updateEventListener(allowedSites);
});

browserAPI.storage.onChanged.addListener(function (changes, namespace) {
  if (namespace === "sync" && changes.allowedSites) {
    const allowedSites = changes.allowedSites.newValue || [];
    updateEventListener(allowedSites);
  }
});
