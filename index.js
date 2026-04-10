const stars = document.querySelectorAll('#star-rating span');
const statusText = document.getElementById('status-text');
const details = document.getElementById('details');
const dateSpan = document.getElementById('current-date');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const val = parseInt(star.dataset.value);
        
        // Resetar e aplicar cor
        resetStars();
        for (let i = 0; i < val; i++) {
            stars[i].classList.add('active');
        }

        // Mensagens detalhadas
        if (val === 5) {
            statusText.innerText = "⭐ PERFEIÇÃO! O Tio Rico está orgulhoso!";
        } else if (val >= 3) {
            statusText.innerText = "👍 Muito boa! Aprovada pelo servidor SDS.";
        } else {
            statusText.innerText = "⚠️ O SPCCI sugere fritar por mais 2 minutos.";
        }

        // Mostrar detalhes do sistema
        details.classList.remove('hidden');
        dateSpan.innerText = new Date().toLocaleString('pt-BR');

        // Log no console para o Heitor monitorar
        console.log(`[LOG] Nova avaliação registrada no Heitorioextrobyte: ${val} estrelas`);
    });
});

function resetStars() {
    stars.forEach(s => s.classList.remove('active'));
}