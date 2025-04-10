// Comentario: contenido editable del resultado patrocinado
const sponsoredResult = {
    title: "Servicio destacado",
    url: "/example/",
    description: "Este es un resultado patrocinado que puedes editar desde search.js"
  };
  
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  async function fetchPages() {
    const res = await fetch('{{ "/search-data.json" | relative_url }}');
    return res.json();
  }
  
  function renderResults(results, query) {
    const resultsList = document.getElementById("results-list");
    const querySpan = document.getElementById("search-query");
    querySpan.textContent = query;
  
    // Agregar primero el resultado patrocinado
    const spon = document.createElement("li");
    spon.innerHTML = `<strong>${sponsoredResult.title}</strong><br><a href="${sponsoredResult.url}">${sponsoredResult.url}</a><p>${sponsoredResult.description}</p>`;
    resultsList.appendChild(spon);
  
    // Luego, resultados filtrados
    results.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${item.title}</strong><br><a href="${item.url}">${item.url}</a><p>${item.content.substring(0, 100)}...</p>`;
      resultsList.appendChild(li);
    });
  }
  
  (async () => {
    const query = getQueryParam("q");
    if (!query) return;
  
    const pages = await fetchPages();
    const results = pages.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.content.toLowerCase().includes(query.toLowerCase())
    );
    renderResults(results, query);
  })();
  