const tareas = [{

        id: 1,
        nombre: "Agroindustrial los campos S.A",
        fecha: "2026",
        desc: "Practicas seguras en las operaciones logísticas",
        docente: "Magali Galleguillos",
        tarea: `<img id="miper" src="miper.png>`,
    },
}

];

tareas.forEach((prod) => {
    const { id, nombre, fecha, desc, tarea, docente } = prod;
    if (contenedor) {
        contenedor.innerHTML += `<div class contenido>
        <div class="card mt-3 item">
        <div id="content">
        <div id="${id}">
        <div class="box">
                <div id="${tarea}</div>
                </div>
            </div>

            </div>
        <div class="card-body">
        <h3 class="card-title">${nombre}</h3>
        <h4 class="card-text">Fecha: ${fecha}</h4>
        <h4 class="card-text">${desc}</h4>
        <h4 class="card-text">${docente}</h4>
      </div>
    </div>
    </div>
                `;
    }
}); 
