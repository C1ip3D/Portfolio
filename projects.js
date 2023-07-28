const homeBTN = document.querySelector('#home');
const aboutBTN = document.querySelector('#aboutLink');

homeBTN.addEventListener('click', () => { 
	window.location.href = 'index.html';
})

aboutBTN.addEventListener('click', () => { 
	window.location.href = 'about.html';
})
