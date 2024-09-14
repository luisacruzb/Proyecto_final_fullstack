console.log('Js Working')

function fetchAndDisplayData() {
    fetch('http://localhost:3000/get_homework_data')
        .then(response => response.json())
        .then(data => {
            const dataContainer = document.getElementById('dataContainer')
            dataContainer.innerHTML = ''

            // Guarda los datos en un atributo del contenedor para futuras búsquedas
            dataContainer.dataset.items = JSON.stringify(data)

            data.forEach(item => {
                const itemElement = document.createElement('div')
                itemElement.classList.add('data-item')
                itemElement.innerHTML = `
                    <div class='claseInventada'>
                        <p><strong>Nombre:</strong> ${item.nombre}</p>
                        <p><strong>Email:</strong> ${item.email}</p>
                        <p><strong>Duda:</strong> ${item.duda}</p>
                    </div>
                `

                // Crear un contenedor para las respuestas
                const respuestasContainer = document.createElement('div')
                respuestasContainer.classList.add('respuestas-container')

                // Agregar cada respuesta al contenedor de respuestas
                item.respuestas.forEach(respuesta  =>{
                    const respuestaElement = document.createElement('div')
                    respuestaElement.classList.add('respuesta-item')
                    respuestaElement.innerHTML = `
                    <div class='teacher_name_container'>
                        <p class='teacher_name'>Docente:</p>
                        <p class='teacher_name_text'>${respuesta.teacher_name}</p>
                    </div>
                    <div class='teacher_answer_container'>
                        <p class='teacher_answer'>Respuesta:</p>
                        <p class='teacher_answer_text'>${respuesta.respuesta}</p>
                    </div>
                        
                    `
                    respuestasContainer.appendChild(respuestaElement)
                })

                 // Agregar el contenedor de respuestas al elemento de la pregunta
                itemElement.appendChild(respuestasContainer)
                dataContainer.appendChild(itemElement)
            })

            // Inicializa la búsqueda
            initializeSearch()
        })
        .catch(error => {
            console.error('Error:', error)
        })
}

function initializeSearch() {
    const searchInput = document.getElementById('reseacher')
    searchInput.addEventListener('input', filterItems)
}

function filterItems() {
    const searchText = document.getElementById('reseacher').value.toLowerCase()
    const dataContainer = document.getElementById('dataContainer')
    const items = JSON.parse(dataContainer.dataset.items)

    const filteredItems = items.filter(item => 
        item.nombre.toLowerCase().includes(searchText) ||
        item.email.toLowerCase().includes(searchText) ||
        item.duda.toLowerCase().includes(searchText)
    )

    // Vuelve a renderizar los elementos filtrados
    dataContainer.innerHTML = ''
    filteredItems.forEach(item => {
        const itemElement = document.createElement('div')
        itemElement.classList.add('data-item')
        itemElement.innerHTML = `
            <p><strong>Nombre:</strong> ${item.nombre}</p>
            <p><strong>Email:</strong> ${item.email}</p>
            <p><strong>Duda:</strong> ${item.duda}</p>
        `
        dataContainer.appendChild(itemElement)
    })
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayData)
