document.addEventListener('DOMContentLoaded', () => {
    const tipsWAF = [
        "Los WAF analizan el tráfico HTTP/HTTPS antes de que llegue al servidor de aplicaciones.",
        "Las firmas de ataques ayudan a identificar patrones maliciosos conocidos al instante.",
        "Desplegar un WAF en la nube (SaaS) facilita la escalabilidad y la actualización automática de reglas.",
        "Bloquear ataques en la Capa 7 previene caídas de servicios y filtraciones de bases de datos."
    ];

    const btnTip = document.getElementById('btnTip');
    const tipBox = document.getElementById('tipBox');

    if (btnTip && tipBox) {
        btnTip.addEventListener('click', () => {
            const indiceAleatorio = Math.floor(Math.random() * tipsWAF.length);
            tipBox.innerHTML = `<strong>Recomendación:</strong> ${tipsWAF[indiceAleatorio]}`;
        });
    }
});