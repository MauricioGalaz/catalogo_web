// Función JavaScript para hacer la tabla dinámica (filtrable)
function filterTable() {
    const input = document.getElementById("search-input");
    const filter = input.value.toUpperCase();
    const table = document.getElementById("courseTable");
    const tbody = table.querySelector("tbody");
    const tr = tbody.getElementsByTagName("tr");
    
    // Loop a través de todas las filas del cuerpo de la tabla
    for (let i = 0; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName("td")[0]; // Solo buscamos en la columna CURSO
        if (td) {
            const txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = ""; // Mostrar fila si hay coincidencia
            } else {
                tr[i].style.display = "none"; // Ocultar fila si no hay coincidencia
            }
        }
    }
}

// Inicializar los data-labels al cargar la página (para la vista móvil)
window.onload = function() {
    const table = document.getElementById("courseTable");
    const tr = table.getElementsByTagName("tr");
    
    const thead = table.querySelector('thead tr');
    if (thead) {
        const headers = Array.from(thead.children).map(th => th.textContent.trim());
    
        for (let i = 0; i < tr.length; i++) { 
            const cells = tr[i].getElementsByTagName("td");
            for(let j = 0; j < cells.length; j++){
                if (!cells[j].hasAttribute('data-label')) {
                    cells[j].setAttribute('data-label', headers[j]);
                }
            }
        }
    }
};