fetch('./header.html')
	.then(response => response.text())
	.then(data => {
		document.getElementById('header').innerHTML = data

		document.querySelector('.menu-toggle').addEventListener('click', ()=>{
		document.querySelector('nav ul').classList.toggle('active')
	})
}).catch(error => console.error('Error al cargar el header:', error))

