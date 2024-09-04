console.log('Js Working');

function fetchAndDisplayData() {
    fetch('http://localhost:3000/get_homework_data')
        .then(response => response.json())
        .then(data => {
            const dataContainer = document.getElementById('dataContainer');
            dataContainer.innerHTML = '';

            // Guarda los datos en un atributo del contenedor para futuras búsquedas
            dataContainer.dataset.items = JSON.stringify(data);

            data.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('data-item');
                itemElement.innerHTML = `
                    <p><strong>Nombre:</strong> ${item.nombre}</p>
                    <p><strong>Email:</strong> ${item.email}</p>
                    <p><strong>Duda:</strong> ${item.duda}</p>
                    <hr>
                `;
                dataContainer.appendChild(itemElement);
            });

            // Inicializa la búsqueda
            initializeSearch();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function initializeSearch() {
    const searchInput = document.getElementById('reseacher');
    searchInput.addEventListener('input', filterItems);
}

function filterItems() {
    const searchText = document.getElementById('reseacher').value.toLowerCase();
    const dataContainer = document.getElementById('dataContainer');
    const items = JSON.parse(dataContainer.dataset.items);

    const filteredItems = items.filter(item => 
        item.nombre.toLowerCase().includes(searchText) ||
        item.email.toLowerCase().includes(searchText) ||
        item.duda.toLowerCase().includes(searchText)
    );

    // Vuelve a renderizar los elementos filtrados
    dataContainer.innerHTML = '';
    filteredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('data-item');
        itemElement.innerHTML = `
            <p><strong>Nombre:</strong> ${item.nombre}</p>
            <p><strong>Email:</strong> ${item.email}</p>
            <p><strong>Duda:</strong> ${item.duda}</p>
            <hr>
        `;
        dataContainer.appendChild(itemElement);
    });
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayData);
