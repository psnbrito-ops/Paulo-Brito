const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (!id || !trabalhos[id]) {
    document.getElementById('conteudo').innerHTML = `
        <p style="text-align:center;font-size:1.2rem">Trabalho não encontrado.</p>
        <p style="text-align:center"><a class="voltar" href="index.html">Voltar ao portfólio</a></p>`;
} else {
    const t = trabalhos[id];
    document.getElementById('conteudo').innerHTML = `
        <section class="trabalho-header">
            <img src="${t.imagens[0]}" alt="${t.titulo}">
            <div class="info">
                <h1>${t.titulo}</h1>
                <span class="categoria">${t.categoria}</span>
                <div class="meta">
                    <p><strong>Clientes:</strong> ${t.cliente}</p>
                </div>
                <div class="descricao">
                    <p>${t.descricao}</p>
                </div>
                ${t.ferramentas ? `
                <div class="ferramentas">
                    <p><strong>Ferramentas:</strong></p>
                    ${t.ferramentas.map(f => `<span>${f}</span>`).join('')}
                </div>` : ''}
            </div>
        </section>

        <section class="galeria">
            <h2>Galeria dos trabalhos</h2>
            <div class="galeria-grid">
                ${t.imagens.map((img, i) => `
                    <img src="${img}" alt="${t.titulo} - imagem ${i+1}" onclick="abrirModal('${img}')">
                `).join('')}
            </div>
        </section>
    `;
}

// Modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const span = document.getElementsByClassName('close')[0];

function abrirModal(src) {
    modal.style.display = 'block';
    modalImg.src = src;
}

span.onclick = () => modal.style.display = 'none';
window.onclick = e => { 
    if (e.target == modal) modal.style.display = 'none'; 
};