document.addEventListener('DOMContentLoaded', function () {
  const statusText = document.getElementById('status');
  const toggleButton = document.getElementById('toggle-button');

  // Detecta se o objeto 'browser' ou 'chrome' está disponível
  const browserAPI = window.browser || chrome;

  browserAPI.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const activeTab = tabs[0];
    const url = new URL(activeTab.url);
    const currentHost = url.hostname;

    browserAPI.storage.sync.get('allowedSites', function(result) {
      let allowedSites = result.allowedSites || [];

      let isAllowed = allowedSites.includes(currentHost);
      updateUI(isAllowed);

      toggleButton.disabled = false;

      toggleButton.addEventListener('click', function() {
        isAllowed = !isAllowed; // Inverte o estado

        if (isAllowed) {
          allowedSites.push(currentHost);
        } else {
          allowedSites = allowedSites.filter(site => site !== currentHost);
        }

        // Salva a lista atualizada
        browserAPI.storage.sync.set({allowedSites: allowedSites}, function() {
          updateUI(isAllowed);
        });
      });

      function updateUI(isAllowed) {
        statusText.textContent = `Colar está ${isAllowed ? 'permitido' : 'protegido'} neste site.`;
        toggleButton.textContent = isAllowed ? 'Desativar Colagem Automática' : 'Ativar Colagem Automática';
      }
    });
  });
});
