alert("Por favor tener paciencia al cargar los archivos en pantalla completa");
const tareas = [
    {
        id: 1,
        nombre: "Anexo 1.4",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT71k1VqhGnM3CfFCMqJ3iWdzBFg-ToVAglE4cUXaPAyK5Ixsv-GcgeXcJeNYilom7WwSAZ7HW1nNAp/pubhtml"
    },
    {
        id: 2,
        nombre: "Procedimiento recepcion",
        url: "https://docs.google.com/document/d/e/2PACX-1vQaPALFj49ZSEhO_6mcThAR0JsnAYL671mu6W-goYTmhqczduz4cv2hAKkExih3q-rqzmGZQ47xS1Zo/pub?embedded=true"
    },
    {
        id: 3,
        nombre: "Procedimiento despacho interno",
        url: "https://docs.google.com/document/d/e/2PACX-1vTa6wXKCHWQDtcJKjr8Tg2DfZ6jSfw7QYcD_NsiWFLTpK5ucnHyW8JTqx2L_OOoNGIYXRvPY45bbWUP/pub?embedded=true"
    },
    {
        id: 4,
        nombre: "Tabla conciliación de diferencias",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQn1ZW-4yX06TshzWA0GMXJffKeeI-F0uTozQWv5zfxvK-Dh4Q9Z1WHTiZ69YzKqbitc2OGWkTKjlJx/pubhtml"
    },
    {
        id: 5,
        nombre: "Procedimiento conteo fisico",
        url: "https://docs.google.com/document/d/e/2PACX-1vQ8OrmXx1mOw-KPv0Or1ZButHaiPrxkvoFqnlJwSyTX7nMrjrtixG8pA9uswarksCKgefOHkLgU7OaB/pub?embedded=true"
    },
{
        id: 6,
        nombre: "Diagrama de flujo o BPMN del proceso logístico analizado",
        url: "https://docs.google.com/document/d/e/2PACX-1vRgrV4T9BsMG6gVPanX-C6pyZ2FgU9LnVimm6tYKM6xcVmOoTQYyprMsZP4bGmwBfZz0fHNyWu2H9ec/pub"
    },
    {
        id: 7,
        nombre: "Diagrama de flujo",
        url: `<img src"diagrama.png">`
    },
];

const contenedor = document.getElementById('contenedor');
let visorOverlay = null;
let visorIframe = null;

function crearVisorDocumento() {
    if (visorOverlay) return;

    visorOverlay = document.createElement('div');
    visorOverlay.className = 'visor-overlay';
    visorOverlay.style.display = 'none';

    const visorPanel = document.createElement('div');
    visorPanel.className = 'visor-panel';

    const btnCerrar = document.createElement('button');
    btnCerrar.className = 'visor-cerrar-btn';
    btnCerrar.type = 'button';
    btnCerrar.title = 'Cerrar documento';
    btnCerrar.textContent = 'X';
    btnCerrar.onclick = cerrarVisorDocumento;

    visorIframe = document.createElement('iframe');
    visorIframe.className = 'visor-iframe';
    visorIframe.setAttribute('allowfullscreen', 'allowfullscreen');
    visorIframe.setAttribute('allow', 'fullscreen');
    visorIframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');

    visorPanel.appendChild(btnCerrar);
    visorPanel.appendChild(visorIframe);
    visorOverlay.appendChild(visorPanel);
    document.body.appendChild(visorOverlay);

    visorOverlay.addEventListener('click', (event) => {
        if (event.target === visorOverlay) {
            cerrarVisorDocumento();
        }
    });
}

function abrirVisorDocumento(url) {
    crearVisorDocumento();
    visorOverlay.style.display = 'flex';
    document.body.classList.add('sin-scroll');
    // Carga despues de mostrar el contenedor para evitar iframe en blanco en algunos navegadores.
    requestAnimationFrame(() => {
        visorIframe.src = url;
    });
}

function cerrarVisorDocumento() {
    if (!visorOverlay || !visorIframe) return;
    visorOverlay.style.display = 'none';
    document.body.classList.remove('sin-scroll');
}

function crearTarjetaTarea(tarea) {
    const card = document.createElement('div');
    card.className = 'card mt-3 item tarea-card tarea-lista';

    const title = document.createElement('h3');
    title.className = 'card-title';
    title.textContent = tarea.nombre;
    card.appendChild(title);

    if (tarea.url) {
        const btnFull = document.createElement('button');
        btnFull.className = 'fullscreen-btn';
        btnFull.title = 'Abrir documento';
        btnFull.textContent = 'Abrir documento';
        btnFull.onclick = () => abrirVisorDocumento(tarea.url);
        card.appendChild(btnFull);
    } else {
        const noDoc = document.createElement('div');
        noDoc.textContent = 'No hay documento disponible.';
        card.appendChild(noDoc);
    }

    return card;
}

tareas.forEach((tarea) => {
    if (contenedor) {
        contenedor.appendChild(crearTarjetaTarea(tarea));
    }
});
