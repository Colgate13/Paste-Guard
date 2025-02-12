document.addEventListener('DOMContentLoaded', function () {
  const statusText = document.getElementById('status');
  const toggleButton = document.getElementById('toggle-button');

  const browserAPI = window.browser || chrome;

  browserAPI.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const activeTab = tabs[0];
    const url = new URL(activeTab.url);
    const currentHost = url.hostname;

    browserAPI.storage.sync.get('protectedSites', function(result) {
      let protectedSites = result.protectedSites || [];

      let isProtected = protectedSites.includes(currentHost);
      updateUI(isProtected);

      toggleButton.disabled = false;

      toggleButton.addEventListener('click', function() {
        isProtected = !isProtected;
        if (isProtected) {
          protectedSites.push(currentHost);
        } else {
          protectedSites = protectedSites.filter(site => site !== currentHost);
        }

        browserAPI.storage.sync.set({protectedSites: protectedSites}, function() {
          updateUI(isProtected);
        });
      });

      function updateUI(isProtected) {
        statusText.textContent = `Proteção de colagem está ${isProtected ? 'ativa' : 'inativa'} neste site.`;
        toggleButton.textContent = isProtected ? 'Desativar Proteção de Colagem' : 'Ativar Proteção de Colagem';
      }
    });
  });
});
