function contactarWhatsApp(area) {
    // Reemplaza con tu número de WhatsApp en formato internacional (sin '+' ni espacios)
    const numeroWhatsApp = '523112563197';
    const mensaje = `Hola,vi su información en su sitio web, solicito información sobre *${area}*. Quiero agendar una consulta legal.`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    return false;
}

document.querySelectorAll('.btn-wsp').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const area = this.closest('.service-card')?.querySelector('.service-name')?.innerText || 'Asesoría Legal';
        contactarWhatsApp(area);
    });
});
