/* Utilidades compartidas por la tarjeta y la hoja de vida. No es necesario editar este archivo. */
window.UI = (function(){
  const D = window.CV, c = D.contacto;
  const esc = s => String(s).replace(/[&<>"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
  const ICON = {
    wa:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 2.2 12C2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2A11.8 11.8 0 0 0 12 .2C5.5.2.2 5.5.2 12c0 2.1.5 4.1 1.6 5.9L.1 24l6.3-1.7c1.7.9 3.7 1.4 5.6 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.3z"/></svg>',
    mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 6 9 7 9-7"/></svg>',
    in:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
    doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>',
    pdf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
    pluma:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
    mic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 17v5M8 22h8"/></svg>',
    maletin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20"/></svg>',
    birrete:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg>',
    medalla:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 8 5-3 5 3-1.5-8"/></svg>',
    manos:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
    cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18M12 14v3l2 1"/></svg>',
    templo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9 12 4l9 5H3z"/><path d="M5 9v9M9.5 9v9M14.5 9v9M19 9v9M3.5 18h17M2.5 20.5h19"/></svg>',
    loto:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4c2.6 2.2 4 5 4 8s-1.4 5.4-4 7c-2.6-1.6-4-4-4-7s1.4-5.8 4-8z"/><path d="M8.2 9.5C5.4 9.6 3.4 10.6 2 12c1.4 4.2 5.2 7 10 7"/><path d="M15.8 9.5c2.8.1 4.8 1.1 6.2 2.5-1.4 4.2-5.2 7-10 7"/></svg>',
    globo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>',
  };
  const waURL = `https://wa.me/${c.whatsapp}?text=${encodeURIComponent(c.mensajeWhatsapp)}`;
  const mailURL = `mailto:${c.correo}?subject=${encodeURIComponent('Contacto desde tu perfil profesional')}`;
  const chev = '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>';
  // Botón principal: agendar llamada
  function botonAgenda(){
    if (!c.agenda) return '';
    return `<a class="cta" href="${c.agenda}" target="_blank" rel="noopener"><span class="cta-ic">${ICON.cal}</span>
      <span class="cta-tx"><b>${esc(c.agendaTexto || 'Agendar llamada')}</b><small>${esc(c.agendaDetalle || '')}</small></span>${chev}</a>`;
  }
  // Botones solo con ícono: WhatsApp, correo y LinkedIn
  function iconosContacto(){
    return `<div class="iconos">
      <a class="ib wa" href="${waURL}" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp">${ICON.wa}</a>
      <a class="ib" href="${mailURL}" aria-label="Correo" title="Correo">${ICON.mail}</a>
      <a class="ib" href="${c.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">${ICON.in}</a>
    </div>`;
  }
  // Cuadrícula con texto (pie de la hoja de vida)
  function tilesContacto(){
    return `<div class="tiles">
      <a class="tile" href="${waURL}" target="_blank" rel="noopener"><span class="t-ic wa">${ICON.wa}</span><b>WhatsApp</b><small>Chat directo</small></a>
      <a class="tile" href="${mailURL}"><span class="t-ic">${ICON.mail}</span><b>Correo</b><small>Escribir</small></a>
      <a class="tile" href="${c.linkedin}" target="_blank" rel="noopener"><span class="t-ic">${ICON.in}</span><b>LinkedIn</b><small>Perfil</small></a>
    </div>`;
  }
  function botonesContacto(){ return botonAgenda() + tilesContacto(); }
  function toast(t){
    const el = document.getElementById('toast'); if (!el) return;
    el.textContent = t; el.classList.add('ver'); setTimeout(() => el.classList.remove('ver'), 2200);
  }
  async function compartir(url, titulo){
    const data = { title: titulo, text: titulo, url };
    try {
      if (navigator.share) await navigator.share(data);
      else { await navigator.clipboard.writeText(url); toast('Enlace copiado'); }
    } catch(e){}
  }
  // Enlaza cada mención de "ÁGORA: Laboratorio Político" al sitio oficial
  function agora(html){
    return D.sitios && D.sitios.agora ? html.replace(/ÁGORA: Laboratorio Político/g, '<a class="agora" href="' + D.sitios.agora + '" target="_blank" rel="noopener">ÁGORA: Laboratorio Político</a>') : html;
  }
  // Botones directos a los sitios de sus proyectos
  function botonesSitios(){
    const S = D.sitios || {};
    const pj = (u, ic, nombre, dom) => `<a class="pj" href="${u}" target="_blank" rel="noopener"><span class="pj-ic">${ic}</span><span class="pj-tx"><b>${dom}</b></span></a>`;
    return `<div class="proy">` + (S.agora ? pj(S.agora, ICON.templo, 'Ágora Lab', 'agoralab.site') : '') +
           (S.beautyech ? pj(S.beautyech, ICON.loto, 'Beautyech', 'beautyech.site') : '') + `</div>`;
  }
  return { D, esc, ICON, waURL, mailURL, botonAgenda, iconosContacto, tilesContacto, botonesContacto, botonesSitios, agora, toast, compartir };
})();
