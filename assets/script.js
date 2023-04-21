// Selezionare il bottone dentro l'HTML

const eleBtn = document.querySelector('#btn-play')
const eleGrid = document.querySelector('.grid')


// Generiamo la griglia desiderata
Grid =(100)

// applichiamo gli event listener alla griglia che contiene le celle

eleCell = document.querySelector('.cell')
for (let i = 0; i < eleCell.length; i++){
    cell = eleCell.length[i]
    cell.addEventListener('click',
		function colorCell() {
			console.log(this);
			this.classList.toggle('clicked');
		}
	);
}