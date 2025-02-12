const browserAPI = window.browser || chrome;

function pasteGuardHandler(event) {
  if (!confirm("Você deseja colar o conteúdo da área de transferência?")) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
}

function updateEventListener(protectedSites) {
  const currentHost = window.location.hostname;

  if (protectedSites.includes(currentHost)) {
    if (!window.pasteGuardListenerAdded) {
      document.addEventListener("paste", pasteGuardHandler, true);
      window.pasteGuardListenerAdded = true;
    }
  } else if (window.pasteGuardListenerAdded) {
    document.removeEventListener("paste", pasteGuardHandler, true);
    window.pasteGuardListenerAdded = false;
  }
}

browserAPI.storage.sync.get(["protectedSites"], function (result) {
  const protectedSites = result.protectedSites || [];
  updateEventListener(protectedSites);
});

browserAPI.storage.onChanged.addListener(function (changes, namespace) {
  if (namespace === "sync" && changes.protectedSites) {
    const protectedSites = changes.protectedSites.newValue || [];
    updateEventListener(protectedSites);
  }
});